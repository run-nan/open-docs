import type { Props } from '@theme/Footer/Layout'
import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.css'

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  return (
    <footer
      className={clsx(
        'footer',
        {
          'footer--dark': style === 'dark',
        },
        styles.footerWraper,
      )}
    >
      <section className={styles.footerContent}>
        <div className={styles.logoWraper}>{logo}</div>
        {links}
      </section>
      <section className={styles.copyRight}>{copyright}</section>
    </footer>
  )
}
