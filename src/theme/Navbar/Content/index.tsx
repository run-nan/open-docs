import React, { type ReactNode } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import SearchBar from '@theme/SearchBar'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarLogo from '@theme/Navbar/Logo'
import NavbarSearch from '@theme/Navbar/Search'

import styles from './styles.module.css'

const excludeType = ['dropdown', 'localeDropdown']

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
  const activePlugin = useActivePlugin()
  const pluginId = activePlugin?.pluginId
  const navbarItems = useNavbarItems()

  /**当没有实例标志的时候，默认使用default的实例标识 */
  const condition = pluginId ?? 'default'
  let items: NavbarItemConfig[] = navbarItems.filter(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (item) => excludeType.includes(item?.type) || item?.docsPluginId === condition
  )

  const dropdownItemIndex = items.findIndex((item) => item?.type === 'dropdown')

  if (dropdownItemIndex !== -1) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const dropdownItem = items[dropdownItemIndex]?.items
    const label = pluginId
      ? dropdownItem.find((item) => item?.docsPluginId === pluginId).label
      : dropdownItem[0].label

    /** docsPluginId 是被用来作为 ONES 开发和 插件开发的区分的。但是 link dropdown 这些类型并不需要这个参数，直接传下去在开发环境下控制台会报错 */
    const dropdownItems = dropdownItem?.map((dropdownItem) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { docsPluginId, ...restProps } = dropdownItem

      return restProps
    })

    items[dropdownItemIndex] = Object.assign({}, items[dropdownItemIndex], {
      label,
      items: dropdownItems,
    })
  }

  items = items.map((item) => {
    if (item.type !== 'docSidebar') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { docsPluginId = '', ...restProps } = item
      return restProps
    }
    return item
  })

  const [leftItems, rightItems] = splitNavbarItems(items)

  const searchBarItem = items.find((item) => item?.type === 'search')

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
