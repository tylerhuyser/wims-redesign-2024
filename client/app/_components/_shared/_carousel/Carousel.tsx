'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './Carousel.module.css'
import heroCarouselStyles from "../../_sections/_00_hero/Hero.module.css"
import missionCarouselStyles from "../../_sections/_01_mission/MissionRevised.module.css"
import quotesCarouselStyles from "../../_sections/_02_quotes/Quotes.module.css"
import platformCarouselStyles from "../../_sections/_03_platform/Platform.module.css"
import workplaceVRCarouselStyles from "../../_sections/_05_workplaceVR/WorkplaceVR.module.css"
import panorama360CarouselStyles from "../../_sections/_06_panorama360/Panorama360.module.css"

// Define props for the PanoramaViewer
type PanoramaViewerProps = {
  imagePath: string
  width?: string
  height?: string
  pitch?: number
  yaw?: number
  hfov?: number
  autoLoad?: boolean
  showZoomCtrl?: boolean
}

// Dynamic import of PanoramaViewer with SSR disabled
const PanoramaViewer = dynamic(
  () =>
    import('@/app/_lib/PannellumClient').then(
      mod => mod.PanoramaViewer as React.ComponentType<PanoramaViewerProps>
    ),
  { ssr: false }
)

// type CarouselItem = {
//   path: string
//   name: string
// }

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
    | 'heroCarousel'
    | 'missionCarousel'
    | 'platformCarousel'
    | 'workplaceVRCarousel'
    | 'panorama360'
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
    const delay = carouselType === "missionCarousel" || carouselType === "panorama360"
      ? 25000
      : 5000
    const timer = setTimeout(() => {
      setCarouselCount(prev =>
        prev === data.length - 1 ? 0 : prev + 1
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [carouselCount, carouselType, data.length])


  if (carouselType === "heroCarousel" || carouselType === "missionCarousel" || carouselType === "platformCarousel" || carouselType === "workplaceVRCarousel") {
    const isHero = carouselType === 'heroCarousel'
    const isMission = carouselType === 'missionCarousel'
    const isPlatform = carouselType === 'platformCarousel'
    const containerClass = isHero
      ? heroCarouselStyles.heroCarouselContainer
      : isMission
        ? missionCarouselStyles.missionCarouselContainer
        : isPlatform
          ? platformCarouselStyles.platformCarouselContainer
          : workplaceVRCarouselStyles.workplaceVRCarouselContainer
    const mediaClass = isHero
      ? heroCarouselStyles.heroCarouselMedia
      : isMission
        ? missionCarouselStyles.missionCarouselMedia
        : isPlatform
          ? platformCarouselStyles.platformCarouselMedia
          : workplaceVRCarouselStyles.workplaceVRCarouselMedia

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


  if (carouselType === 'panorama360') {
    const carouselSlides = data.map((item, index) => {
      const isActive = index === carouselCount

      return (
        <div
          key={item.name}
          className={
            isActive
              ? `${styles.carouselMedia} ${styles.panoCarouselMedia}`
              : `${styles.carouselMedia} ${styles.panoCarouselMedia} ${styles.inactive}`
          }
        >
          {isActive && (
            <PanoramaViewer
              key={item.name}
              imagePath={item.path}
              width="100%"
              height="100%"
              pitch={0}
              yaw={0}
              hfov={110}
              autoLoad
              showZoomCtrl={false}
            />
          )}
        </div>
      )
    })

    return (
      <div className={`${styles.carouselContainer} ${panorama360CarouselStyles.panoCarouselContainer} subsection`} id={panorama360CarouselStyles.panoCarouselContainer}>
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