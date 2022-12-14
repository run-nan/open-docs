import React from 'react'
import Layout from '@theme/Layout'
import { HomepageFeatures, HomepageHeader } from '@site/src/components'

export default function Home(): JSX.Element {
  return (
    <Layout title="首页" description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
