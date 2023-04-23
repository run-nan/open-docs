import React, { useMemo, type ReactNode } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
// import { useActivePlugin } from '@docusaurus/plugin-content-docs/client'
import { useLocation } from '@docusaurus/router'

import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'
// import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import SearchBar from '@theme/SearchBar'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarLogo from '@theme/Navbar/Logo'
import NavbarSearch from '@theme/Navbar/Search'
// import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem'
// import styles from './styles.module.css'

// const excludeTypeInONESDevelopment = ['dropdown', 'localeDropdown']
// const excludeTypeInRelease = ['dropdown', 'docsVersionDropdown']
// const projectDocsPluginId = 'project'

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[]
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  )
}

function NavbarContentLayout({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  )
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar()
  const navbarItems = useNavbarItems()
  const { pathname } = useLocation()

  /** --------------------------------------------------------------- */
  const docusaurusContext = useDocusaurusContext()

  const [leftItems, rightItems] = splitNavbarItems(navbarItems)

  const finalLeft = useMemo(() => {
    const { quickEntryPrefixPath } = docusaurusContext.siteConfig.customFields
    const isBelongQuickEntry = quickEntryPrefixPath.some((item) => pathname?.indexOf(item) > -1)
    const homePageNavbarItems = leftItems.filter((item) => item.category !== 'quickEntry')
    const quickEntryNavbarItems = leftItems.filter((item) => item.category === 'quickEntry')

    return isBelongQuickEntry ? quickEntryNavbarItems : homePageNavbarItems
  }, [docusaurusContext, leftItems, pathname])

  const searchBarItem = navbarItems.find((item) => item?.type === 'search')

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={finalLeft} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          {/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  )
}
