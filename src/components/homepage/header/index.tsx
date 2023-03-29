import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'

import styles from './styles.module.css'

export function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.heroHeight)}>
      <div className={clsx('container', styles.heroContainer)}>
        <span className={styles.heroTitle}>
          <Translate>Customize your workspace</Translate>
        </span>
        <span className={styles.heroSubtitle}>
          <Translate>
            ONES provides extended development capabilities to meet customized needs.
          </Translate>
        </span>
        <div className={styles.buttons}>
          <Link className={clsx('button', styles.buttons, styles.link)} to="docs/guide/overview">
            <Translate>Start to build</Translate>
          </Link>
        </div>
      </div>
    </header>
  )
}
