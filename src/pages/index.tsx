import React from 'react'
import Layout from '@theme/Layout'
import { translate } from '@docusaurus/Translate'
import { HomepageHeader, HomePageMain } from '@site/src/components'
import 'core-js/es/object/from-entries'

export default function Home(): JSX.Element {
  const title = translate({ message: 'Homepage' })
  return (
    <>
      <Layout title={title} description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <HomePageMain />
      </Layout>
    </>
  )
}
