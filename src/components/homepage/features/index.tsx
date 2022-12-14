import React from 'react'
import Link from '@docusaurus/Link'
import { features } from '../../../data'
import styles from './styles.module.css'

export enum ContentEnum {
  Ability,
  Tools,
}

interface CardsContent {
  cards: {
    cardTitle: React.ReactNode
    cardList: {
      label: React.ReactNode
      url: string
    }[]
  }[]
}

function AbilityContent({ cards }: CardsContent) {
  return (
    <div className={styles.abilityContent}>
      {cards.map((card, index) => {
        const { cardTitle, cardList } = card
        return (
          <div className={styles.abilityCard} key={index}>
            <div className={styles.abilityCardTitle}>{cardTitle}</div>
            <div>
              <ul className={styles.cardList}>
                {cardList.map((list, cardIndex) => {
                  const { url, label } = list
                  return (
                    <li className={styles.item} key={cardIndex}>
                      <Link to={url} className={styles.label}>
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ToolsContent({ cards }: CardsContent) {
  return (
    <div className={styles.toolsContent}>
      {cards.map((card, index) => {
        const { cardTitle, cardList } = card
        const { label, url } = cardList[0]
        return (
          <Link className={styles.toolsCard} to={url} key={index}>
            <div className={styles.toolsCardTitle}>{cardTitle}</div>
            <div className={styles.description}>{label}</div>
          </Link>
        )
      })}
    </div>
  )
}

export function HomepageFeatures(): JSX.Element {
  return (
    <article className={styles.articleContainer}>
      {features.map((data, index) => {
        const { title, type, cards } = data
        return (
          <section className={styles.sectionContainer} key={index}>
            <div className={styles.sectionTitle}>{title}</div>
            <div className={styles.sectionContent}>
              {type === ContentEnum.Ability && <AbilityContent cards={cards} />}
              {type === ContentEnum.Tools && <ToolsContent cards={cards} />}
            </div>
          </section>
        )
      })}
    </article>
  )
}
