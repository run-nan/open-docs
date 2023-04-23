import React from 'react'
import styles from './styles.module.css'
import { useHistory } from '@docusaurus/router'
import RightArrow from '/homepage/right-arrow.svg'

export const GuideCard = (props) => {
  const { title, description, url, tips, icon } = props
  const router = useHistory()
  const gotoUrl = (url) => {
    router.push(url)
  }
  return (
    <div className={styles.cardWraper}>
      <img className={styles.cardIcon} src={icon} />
      <div className={styles.cardContent}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <span className={styles.tipWraper} onClick={() => gotoUrl(url)}>
          <span className={styles.tipText}>{tips}</span>
          <RightArrow className={styles.tipsIcon}></RightArrow>
        </span>
      </div>
    </div>
  )
}
