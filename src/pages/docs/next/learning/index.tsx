import React from 'react'
import Layout from '@theme/Layout'
import Translate from '@docusaurus/Translate'
import { Steps } from '@site/src/components'

import styles from './styles.module.css'

export default function Learning() {
  return (
    <Layout title="learning" description="Learning Map">
      <div className={styles.learningContent}>
        <div className={styles.header}>
          <div className={styles.title}>
            <Translate>Learning</Translate>
          </div>
          <div className={styles.description}>
            <Translate>
              Understand the whole process of ONES plugin development and quickly find the
              information you need.
            </Translate>
          </div>
        </div>
        <Steps />
      </div>
    </Layout>
  )
}
