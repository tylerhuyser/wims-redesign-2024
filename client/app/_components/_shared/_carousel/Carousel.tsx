'use client'

import React, { useState, useEffect } from 'react'
import styles from './Carousel.module.css'
import missionCarouselStyles from "../../_sections/_01_mission/Mission.module.css"
import quotesCarouselStyles from "../../_sections/_02_quotes/Quotes.module.css"
import workplaceCarouselStyles from "../../_sections/_05_workplace/Workplace.module.css"
import communityCarouselStyles from "../../_sections/_07_community/Community.module.css"

type ImageCarouselItem = {
  path: string
  name: string
}

type QuoteCarouselItem = {
  quote: string
  author: string
}

// Image-based carousels
type ImageCarouselProps = {
  carouselType:
    | 'missionCarousel'
    | 'workplaceCarousel'
    | 'communityCarousel'
  data: ImageCarouselItem[]
}

// Quote-based carousel
type QuoteCarouselProps = {
  carouselType: 'quotes'
  data: QuoteCarouselItem[]
}

// Union of the two
type CarouselProps = ImageCarouselProps | QuoteCarouselProps

export default function Carousel({ carouselType, data }: CarouselProps) {

  const [carouselCount, setCarouselCount] = useState(0)

  useEffect(() => {
    const delay = carouselType === "missionCarousel"
      ? 25000
      : 5000
    const timer = setTimeout(() => {
      setCarouselCount(prev =>
        prev === data.length - 1 ? 0 : prev + 1
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [carouselCount, carouselType, data.length])


  if (carouselType === "missionCarousel" || carouselType === "workplaceCarousel" || carouselType === "communityCarousel") {

    const isMission = carouselType === 'missionCarousel'
    const isWorkplaceVR = carouselType === 'workplaceCarousel'
    const containerClass = isMission
        ? missionCarouselStyles.missionCarouselContainer
          : isWorkplaceVR
            ? workplaceCarouselStyles.workplaceCarouselContainer
            : communityCarouselStyles.communityCarouselContainer
    const mediaClass = isMission
        ? missionCarouselStyles.missionCarouselMedia
          : isWorkplaceVR
            ? workplaceCarouselStyles.workplaceCarouselMedia
            : communityCarouselStyles.communityCarouselMedia

    const carouselSlides = data.map((item, index) => (
      <img
        key={item.name}
        src={item.path}
        alt={item.name}
        className={
          index === carouselCount
            ? `${styles.carouselMedia} ${mediaClass}`
            : `${styles.carouselMedia} ${mediaClass} ${styles.inactive}`
        }
      />
    ))

    return (
      <div className={`${styles.carouselContainer} ${containerClass} subsection`} id={containerClass}>
        {carouselSlides}
      </div>
    )
  }
  
  if (carouselType === "quotes") {
    let carouselSlides = data.map((item, index) => (
      <p
      key={item.author}
        className={
          index === carouselCount
            ? `${quotesCarouselStyles.quoteText} ${quotesCarouselStyles.quoteTextContainer}`
            : `${quotesCarouselStyles.quoteText} ${quotesCarouselStyles.quoteTextContainer} ${styles.inactive}`
        }
      >
        <span className={`${quotesCarouselStyles.quoteText} ${quotesCarouselStyles.quote}`}>{item.quote}</span><br /><span className={`${quotesCarouselStyles.quoteText} ${quotesCarouselStyles.quoteAuthor}`}>{`- ${item.author}`}</span>
      </p>))

    return (
      <div className={`${styles.carouselContainer} subsection`} id={quotesCarouselStyles.quotesCarouselContainer} >

      {carouselSlides}
      
      </div>
    )
  }

  

}