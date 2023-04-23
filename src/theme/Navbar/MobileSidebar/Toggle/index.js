import React from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'
import HamMenu from '../../../../../static/homepage/hamburger-menus.svg'
export default function MobileSidebarToggle() {
  const { toggle, shown } = useNavbarMobileSidebar()
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
    >
      <HamMenu></HamMenu>
    </button>
  )
}
