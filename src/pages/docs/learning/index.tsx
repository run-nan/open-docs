import React from 'react'
import Layout from '@theme/Layout'

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          <h1>学习地图</h1>
        </p>
      </div>
    </Layout>
  )
}
