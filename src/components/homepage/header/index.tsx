import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'

import styles from './styles.module.css'

export function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <h1 className="hero__title">
          <Translate>ONES Open Platform</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            ONES fully opens the pedestal capability to help customers and partners build an
            enterprise digital platform and accelerate the release of products.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.buttons, styles.link)}
            to="docs/learning"
          >
            <Translate>Get Started</Translate> →
          </Link>
        </div>
      </div>
    </header>
  )
}
