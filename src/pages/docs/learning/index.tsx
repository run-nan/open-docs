import React from 'react'
import Layout from '@theme/Layout'
import Translate, { translate } from '@docusaurus/Translate'

import { Steps } from '@site/src/components'

import styles from './styles.module.css'

export default function Learning() {
  const title = translate({ message: 'Learning' })
  return (
    <Layout title={title} description="Learning Map">
      <div className={styles.learningContent}>
        <div className={styles.title}>
          <Translate>Learning</Translate>
        </div>
        <div className={styles.description}>
          <Translate>
            Understand the whole process of ONES plugin development and quickly find the information
            you need.
          </Translate>
        </div>

        <Steps />
      </div>
    </Layout>
  )
}
