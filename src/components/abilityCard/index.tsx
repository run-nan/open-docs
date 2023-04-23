import React from 'react'
import styles from './styles.module.css'
import { useHistory } from '@docusaurus/router'
import RightArrow from '/homepage/right-arrow.svg'

export const AbilityCard = (props) => {
  const { title, description, url, tips, icon, keyword } = props
  const router = useHistory()
  const gotoUrl = (url) => {
    router.push(url)
  }
  return (
    <div className={styles.cardWraper} onClick={() => gotoUrl(url)}>
      <img src={icon} className={styles.cardIcon} />
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <ul className={styles.keyword}>
        {keyword.map((item) => {
          return (
            <li className={styles.keywordItem} key={item}>
              <span className={styles.keywordText}>{item}</span>
            </li>
          )
        })}
      </ul>
      <span className={styles.tipWraper}>
        <span className={styles.tipText}>{tips}</span>
        <RightArrow className={styles.tipsIcon}></RightArrow>
      </span>
    </div>
  )
}
