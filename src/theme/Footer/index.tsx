import React from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import FooterLogo from '@theme/Footer/Logo'
import FooterLinkItem from '@theme/Footer/LinkItem'
// import FooterLinks from '@theme/Footer/Links'
// import FooterCopyright from '@theme/Footer/Copyright'
// import FooterLayout from '@theme/Footer/Layout'

import styles from './styles.module.css'

function Footer() {
  const { footer } = useThemeConfig()
  if (!footer) {
    return null
  }
  const { copyright, links, logo } = footer
  return (
    <footer className={styles.footerWraper}>
      <section className={styles.footerContent}>
        <div className={styles.logoWraper}>
          <FooterLogo logo={logo} />
        </div>
        <section className={styles.linkWraper}>
          {links.map((linkGroup) => (
            <div className={styles.linkitemWraper} key={linkGroup.title}>
              <div>
                <span className={styles.title}>{linkGroup.title}</span>
                {linkGroup.items.map((linkItem) => (
                  <li className={styles.linkItem} key={linkItem.label}>
                    <FooterLinkItem item={linkItem} />
                  </li>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className={styles.copyRight}>
        <span>{copyright}</span>
      </section>
    </footer>
  )
}
export default React.memo(Footer)
