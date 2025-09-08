'use client'

import React, { useState, useEffect } from 'react'

import "./Carousel.module.css"

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
  // const { carouselType, data } = props

  useEffect(() => {
    if (carouselType === "mission") {
      const loginCarouselTimer = setTimeout(() => {
        if (carouselCount === (data.length - 1)) {
          setCarouselCount(0)
        } else {
          setCarouselCount(carouselCount + 1)
        }
      }, 25000)
      return () => clearTimeout(loginCarouselTimer)
    } else {
      const carouselTimer = setTimeout(() => {
        if (carouselCount === (data.length - 1)) {
          setCarouselCount(0)
        } else {
          setCarouselCount(carouselCount + 1)
        }
      }, 5000)
      return () => clearTimeout(carouselTimer)
    }
  }, [carouselCount])

  if (carouselType === "mission") {

    let carouselSlides = data.map((gif, index) => (
      <img className={index === carouselCount ? 'carousel-media mission-carousel-media' : ' carousel-media mission-carousel-media inactive'} src={gif.path} alt={gif.name} key={gif.name} />
      ))

    return (
      <div className='carousel-container subsection' id="mission-carousel-container">

        {carouselSlides}
      
    </div>
    )
  }

}