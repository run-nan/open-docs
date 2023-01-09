import React, { type ReactNode } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import SearchBar from '@theme/SearchBar'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarLogo from '@theme/Navbar/Logo'
import NavbarSearch from '@theme/Navbar/Search'

import styles from './styles.module.css'

const excludeTypeInONESDevelopment = ['dropdown', 'localeDropdown']
const excludeTypeInRelease = ['dropdown', 'docsVersionDropdown']
const projectDocsPluginId = 'project'

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
  let navbarItems = useNavbarItems()

  /** --------------------------------------------------------------- */
  const docusaurusContext = useDocusaurusContext()
  const activePlugin = useActivePlugin()
  const pluginId = activePlugin?.pluginId ?? 'default'
  const customFields = docusaurusContext.siteConfig.customFields
  const isProduction = Object.prototype.hasOwnProperty.call(customFields, 'PRODUCTION_ENV')

  if (isProduction) {
    navbarItems = navbarItems.filter(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (item) => item?.label !== 'Changelog' && !excludeTypeInRelease.includes(item.type)
    )
  }

  navbarItems =
    pluginId === projectDocsPluginId
      ? navbarItems.filter(
          (item) =>
            excludeTypeInONESDevelopment.includes(item.type) ||
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            item.docsPluginId === projectDocsPluginId
        )
      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navbarItems.filter((item) => item.docsPluginId !== projectDocsPluginId)

  if (!isProduction) {
    const targetItem = navbarItems.find((item) => item.type === 'dropdown')
    Object.assign(targetItem, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      label: targetItem?.items?.[pluginId === projectDocsPluginId ? 1 : 0]?.label,
    })
  }
  /** --------------------------------------------------------------- */

  const [leftItems, rightItems] = splitNavbarItems(navbarItems)

  const searchBarItem = navbarItems.find((item) => item?.type === 'search')

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
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
