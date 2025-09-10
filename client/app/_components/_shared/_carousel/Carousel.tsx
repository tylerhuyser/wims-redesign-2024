'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './Carousel.module.css'

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
  carouselType: 'mission' | 'panorama360' | 'default' // tighten if you only expect certain strings
  data: CarouselItem[]
}

export default function Carousel({ carouselType, data }: CarouselProps) {

  const [carouselCount, setCarouselCount] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  useEffect(() => {
    const delay = carouselType === "mission" || carouselType === "panorama360"
      ? 25000
      : 5000
    const timer = setTimeout(() => {
      setCarouselCount(prev =>
        prev === data.length - 1 ? 0 : prev + 1
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [carouselCount, carouselType, data.length])

  // useEffect(() => {
  //   if (carouselType !== 'panorama360') return
  //   const loaded: boolean[] = Array(data.length).fill(false)
  //   data.forEach((item, index) => {
  //     const img = new Image()
  //     img.src = item.path.startsWith('/') ? `${window.location.origin}${item.path}` : item.path
  //     img.onload = () => {
  //       loaded[index] = true
  //       setImagesLoaded([...loaded])
  //     }
  //   })
  // }, [data, carouselType])

  if (carouselType === "mission") {

    const carouselSlides = data.map((gif, index) => (
      <img
        key={gif.name}
        src={gif.path}
        alt={gif.name}
        className={
          index === carouselCount
            ? `${styles.carouselMedia} ${styles.missionCarouselMedia}`
            : `${styles.carouselMedia} ${styles.missionCarouselMedia} ${styles.inactive}`
        }
      />
    ))

    return (
      <div className={`${styles.carouselContainer} subsection`}  id={styles.missionCarouselContainer}>

        {carouselSlides}
      
      </div>
    )
  }
  if (carouselType === 'panorama360') {
    const carouselSlides = data.map((item, index) => {
      const isActive = index === carouselCount
      // const showPano = imagesLoaded[index] && isActive

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
              key={`pano_${carouselCount}`} // force remount when slide changes
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