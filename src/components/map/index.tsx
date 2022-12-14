import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import { learnings } from '../../data'

export function Steps() {
  return (
    <div className={styles.container}>
      <ul className={styles.stops}>
        {learnings.map((step, index) => {
          const { stepTitle, description, docsList } = step

          return (
            <li className={styles.step} key={index}>
              <div className={styles.stepTitle}>{stepTitle}</div>
              <div className={styles.splitContainer}>
                <div className={styles.segment} />
                <div className={styles.split} />
              </div>
              <div className={styles.contentContainer}>
                <span className={styles.description}>{description}</span>
                <div className={styles.docs}>
                  {docsList?.map((list) => {
                    const { itemTitle, docList } = list
                    return (
                      <div className={styles.docList}>
                        <div className={styles.itemTitle}>{itemTitle}</div>
                        <div className={styles.itemList}>
                          {docList.map((doc, index) => {
                            return (
                              <Link className={styles.item} to={doc.url} key={index}>
                                <span className={styles.docTitle}>{doc.docTitle}</span>
                                <span className={styles.vector}>{'>'}</span>
                                <span className={styles.activeVector}>→</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
