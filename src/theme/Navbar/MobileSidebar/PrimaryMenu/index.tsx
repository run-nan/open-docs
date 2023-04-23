import React, { useMemo } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarItem from '@theme/NavbarItem'
import { useLocation } from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar()
  const { pathname } = useLocation()
  const docusaurusContext = useDocusaurusContext()

  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems()
  const finalItems = useMemo(() => {
    const { quickEntryPrefixPath } = docusaurusContext.siteConfig.customFields
    const isBelongQuickEntry = quickEntryPrefixPath.some((item) => pathname?.indexOf(item) > -1)
    const homePageNavbarItems = items.filter((item) => item.category !== 'quickEntry')
    const quickEntryNavbarItems = items.filter((item) => item.category === 'quickEntry')

    return isBelongQuickEntry ? quickEntryNavbarItems : homePageNavbarItems
  }, [docusaurusContext, pathname, items])
  return (
    <ul className="menu__list menu__primary">
      {finalItems.map((item, i) => (
        <NavbarItem mobile {...item} onClick={() => mobileSidebar.toggle()} key={i} />
      ))}
    </ul>
  )
}
