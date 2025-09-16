'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './Carousel.module.css'
import heroCarouselStyles from "../../_sections/_00_hero/Hero.module.css"
import missionCarouselStyles from "../../_sections/_01_mission/Mission.module.css"

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

type CarouselItem = {
  path: string
  name: string
}

type CarouselProps = {
  carouselType: 'heroCarousel' | 'missionCarousel' | 'panorama360' | 'platformCarousel' | 'workplaceVRCarousel' | 'default' // tighten if you only expect certain strings
  data: CarouselItem[]
}

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
          ? styles.platformCarouselContainer
          : styles.workplaceVRCarouselContainer
    const mediaClass = isHero
      ? heroCarouselStyles.heroCarouselMedia
      : isMission
        ? missionCarouselStyles.missionCarouselMedia
        : isPlatform
          ? styles.platformCarouselMedia
          : styles.workplaceVRCarouselMedia

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
      <div className={`${styles.carouselContainer} subsection`} id={containerClass}>
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
      <div className={`${styles.carouselContainer} subsection`} id={styles.panoCarouselContainer}>
        {carouselSlides}
      </div>
  )}

  

}