import React from 'react'
import Layout from '@theme/Layout'
import { HomepageHeader, HomePageMain } from '@site/src/components'

export default function Home(): JSX.Element {
  return (
    <Layout title="首页" description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomePageMain />
    </Layout>
  )
}
