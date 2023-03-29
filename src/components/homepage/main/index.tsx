import React from 'react'
// import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import { guideCardData, abilityCardData } from '../../../data'
import styles from './styles.module.css'
import { GuideCard } from '../../guideCard'
import { AbilityCard } from '../../abilityCard'

export const HomePageMain = () => {
  return (
    <main className={styles.container}>
      <section className={styles.guideCardWraper}>
        <span className={styles.sectionTitle}>
          <Translate>Take your development to the next level</Translate>
        </span>
        <section className={styles.guideCardContent}>
          {guideCardData.map((item) => {
            return <GuideCard {...item} key={item.title}></GuideCard>
          })}
        </section>
      </section>
      <section className={styles.bgWraper}>
        <section className={styles.abilityCardWraper}>
          <span className={styles.sectionTitle}>
            <Translate>Explore the abilities of ONES Open Platform</Translate>
          </span>
          <section className={styles.abilityCardContent}>
            {abilityCardData.map((item) => {
              return <AbilityCard {...item} key={item.title} />
            })}
          </section>
        </section>
      </section>
    </main>
  )
}
