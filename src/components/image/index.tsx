// @ts-expect-error no check
import IdealImage from '@theme/IdealImage'
import React from 'react'

const shouldAutoDownload = () => true

export const Image = (props) => {
  return <IdealImage shouldAutoDownload={shouldAutoDownload} {...props} />
}
