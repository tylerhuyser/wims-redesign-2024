'use client'

import React, { useState, useEffect } from 'react'

import styles from "./Carousel.module.css"

type CarouselItem = {
  path: string
  name: string
}

type CarouselProps = {
  carouselType: 'mission' | 'default' // tighten if you only expect certain strings
  data: CarouselItem[]
}

export default function Carousel({ carouselType, data }: CarouselProps) {

  const [carouselCount, setCarouselCount] = useState(0)

  useEffect(() => {
    const delay = carouselType === "mission" ? 25000 : 5000
    const timer = setTimeout(() => {
      setCarouselCount(prev =>
        prev === data.length - 1 ? 0 : prev + 1
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [carouselCount, carouselType, data.length])

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

}