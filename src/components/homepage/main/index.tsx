import React from 'react'
import Link from '@docusaurus/Link'
import { features } from '../../../data'
import styles from './styles.module.css'

export const HomePageMain = () => {
  return (
    <main className={styles.container}>
      {features.map((data, index) => {
        const { title, cards } = data
        return (
          <section className={styles.cardList} key={index}>
            <div className={styles.cardListTitle}>{title}</div>
            <div className={styles.cards}>
              {cards.map((card, cardIndex) => {
                const { label, content, url } = card
                return Array.isArray(content) ? (
                  <div className={styles.abilityCard} key={cardIndex}>
                    <div className={styles.abilityCardTitle}>{label}</div>
                    <ul className={styles.abilityCardList}>
                      {content.map((item, contentIndex) => {
                        const { title: itemLabel, url: itemURL } = item
                        return (
                          <li className={styles.label} key={contentIndex}>
                            <Link to={itemURL} className={styles.labelLink}>
                              {itemLabel}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : (
                  <Link className={styles.toolCard} to={url} key={cardIndex}>
                    <div className={styles.toolCardLabel}>{label}</div>
                    <div className={styles.toolCardContent}>{content}</div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}
