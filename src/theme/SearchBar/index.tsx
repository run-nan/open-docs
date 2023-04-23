import React, { useState, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useHistory } from '@docusaurus/router'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import Head from '@docusaurus/Head'
import { isRegexpStringMatch } from '@docusaurus/theme-common'
import { useSearchPage } from '@docusaurus/theme-common/internal'
import { useDocSearchKeyboardEvents } from '@docsearch/react'
// import { DocSearchButton } from '../DocSearch'
import { DocSearchButton } from '@docsearch/react'
import { useAlgoliaContextualFacetFilters } from '@docusaurus/theme-search-algolia/client'
import Translate from '@docusaurus/Translate'
import translations from '@theme/SearchTranslations'

// 对英文部分词条做映射，中文暂不关心
const newTranslations = {
  'en': {
    modal: {
      footer: {
        closeKeyAriaLabel: 'Escape key',
        closeText: 'Close',
        navigateDownKeyAriaLabel: 'Arrow down',
        navigateText: 'Navigate',
        navigateUpKeyAriaLabel: 'Arrow up',
        searchByText: 'Search by',
        selectKeyAriaLabel: 'Enter key',
        selectText: 'Select',
      },
      startScreen: {
        favoriteSearchesTitle: 'Favorite',
        noRecentSearchesText: 'Type something  to search',
        recentSearchesTitle: 'Recent',
        removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
        removeRecentSearchButtonTitle: 'Remove this search from history',
        saveRecentSearchButtonTitle: 'Save this search',
      },
    },
    placeholder: 'Search',
  },
  'zh-cn': {},
}

let DocSearchModal = null
function Hit({ hit, children }) {
  return <Link to={hit.url}>{children}</Link>
}
function ResultsFooter({ state, onClose }) {
  const { generateSearchPageLink } = useSearchPage()
  return (
    <Link to={generateSearchPageLink(state.query)} onClick={onClose}>
      <Translate id="theme.SearchBar.seeAll" values={{ count: state.context.nbHits }}>
        {'See all {count} results'}
      </Translate>
    </Link>
  )
}
function mergeFacetFilters(f1, f2) {
  const normalize = (f) => (typeof f === 'string' ? [f] : f)
  return [...normalize(f1), ...normalize(f2)]
}
function DocSearch({ contextualSearch, externalUrlRegex, ...props }) {
  const {
    siteMetadata,
    i18n: { currentLocale },
  } = useDocusaurusContext()
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters()
  const configFacetFilters = props.searchParameters?.facetFilters ?? []
  const facetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters
  // We let user override default searchParameters if she wants to
  const searchParameters = {
    ...props.searchParameters,
    facetFilters,
  }
  const { withBaseUrl } = useBaseUrlUtils()
  const history = useHistory()
  const searchContainer = useRef(null)
  const searchButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [initialQuery, setInitialQuery] = useState(undefined)
  const mergedTranslations = useMemo(() => {
    if (currentLocale === 'en') {
      return {
        ...translations,
        modal: {
          ...translations.modal,
          footer: {
            ...newTranslations.en.modal.footer,
          },
          startScreen: {
            ...newTranslations.en.modal.startScreen,
          },
        },
        placeholder: newTranslations.en.placeholder,
      }
    }
    return translations
  }, [currentLocale])
  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve()
    }
    return Promise.all([
      // import('../DocSearch/DocSearchModal'),
      import('@docsearch/react/modal'),
      import('@docsearch/react/style'),
      import('./styles.css'),
    ]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal
    })
  }, [])
  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      searchContainer.current = document.createElement('div')
      document.body.insertBefore(searchContainer.current, document.body.firstChild)
      setIsOpen(true)
    })
  }, [importDocSearchModalIfNeeded, setIsOpen])
  const onClose = useCallback(() => {
    setIsOpen(false)
    searchContainer.current?.remove()
  }, [setIsOpen])
  const onInput = useCallback(
    (event) => {
      importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true)
        setInitialQuery(event.key)
      })
    },
    [importDocSearchModalIfNeeded, setIsOpen, setInitialQuery]
  )
  const navigator = useRef({
    navigate({ itemUrl }) {
      // Algolia results could contain URL's from other domains which cannot
      // be served through history and should navigate with window.location
      if (isRegexpStringMatch(externalUrlRegex, itemUrl)) {
        window.location.href = itemUrl
      } else {
        history.push(itemUrl)
      }
    },
  }).current
  const transformItems = useRef((items) =>
    items.map((item) => {
      // If Algolia contains a external domain, we should navigate without
      // relative URL
      if (isRegexpStringMatch(externalUrlRegex, item.url)) {
        return item
      }
      // We transform the absolute URL into a relative URL.
      const url = new URL(item.url)
      return {
        ...item,
        url: withBaseUrl(`${url.pathname}${url.hash}`),
      }
    })
  ).current
  const resultsFooterComponent = useMemo(
    () => (footerProps) => <ResultsFooter {...footerProps} onClose={onClose} />,
    [onClose]
  )
  const transformSearchClient = useCallback(
    (searchClient) => {
      searchClient.addAlgoliaAgent('docusaurus', siteMetadata.docusaurusVersion)
      return searchClient
    },
    [siteMetadata.docusaurusVersion]
  )
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })
  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={onOpen}
        ref={searchButtonRef}
        translations={mergedTranslations.button}
      />

      {isOpen &&
        DocSearchModal &&
        searchContainer.current &&
        createPortal(
          <DocSearchModal
            onClose={onClose}
            initialScrollY={window.scrollY}
            initialQuery={initialQuery}
            navigator={navigator}
            transformItems={transformItems}
            hitComponent={Hit}
            transformSearchClient={transformSearchClient}
            {...(props.searchPagePath && {
              resultsFooterComponent,
            })}
            {...props}
            searchParameters={searchParameters}
            placeholder={mergedTranslations.placeholder}
            translations={mergedTranslations.modal}
          />,
          searchContainer.current
        )}
    </>
  )
}
export default function SearchBar() {
  const { siteConfig } = useDocusaurusContext()
  return <DocSearch {...siteConfig.themeConfig.algolia} />
}
