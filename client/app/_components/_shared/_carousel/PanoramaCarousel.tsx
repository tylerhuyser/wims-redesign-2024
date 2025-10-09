"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

import styles from "../../_sections/_04_panorama360/Panorama360.module.css"

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

const PanoramaViewer = dynamic(
  () =>
    import('@/app/_lib/PannellumClient').then(
      mod => mod.PanoramaViewer as React.ComponentType<PanoramaViewerProps>
    ),
  { ssr: false }
)

type PanoramaItem = {
  path: string
  name: string
}

// Image-based carousels
type PanoramaProps = {
  data: PanoramaItem[]
}

export default function PanoramaCarousel({ data }: PanoramaProps) {

  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
      const timeout =  setTimeout(() => {
        setActiveIndex(prevState => (prevState + 1) % data.length)
      }, 20000);
      return () => {
        clearTimeout(timeout)
      }
  }, [activeIndex])

  const changeIndex = (direction: "left" | "right") => { 
    (direction === "right") ? setActiveIndex(prevState => (prevState + 1) % data.length) : setActiveIndex(prevState => (prevState - 1 + data.length) % data.length )
  }

  const onClick = (direction : "left" | "right") => {
    changeIndex(direction)
  }

  return (
    <div className={styles.panoCarouselContainer}>

      <button className={`${styles.panoCarouselButton} ${styles.leftArrow}`} onClick={() => onClick("left")}>{String.fromCharCode(60)}</button>

      
      <div className={styles.panoCarouselSliderContainer}>

      {data.map((item, index) => {
 
      const offset = index - activeIndex;

      const normalizedOffset =
        (offset + data.length) % data.length;

        let style: React.CSSProperties = {};
        
        if (normalizedOffset === 0) {
          style = { transform: "translate(-50%, -50%) translateX(0%) scale(1)", zIndex: 2};
        } else if (normalizedOffset === 1) {
          style = { transform: "translate(-50%, -50%) translateX(40%) scale(0.8)", zIndex: 1 };
        } else if (normalizedOffset === data.length - 1) {
          style = { transform: "translate(-50%, -50%) translateX(-40%) scale(0.8)", zIndex: 1 };
        } else {
          style = { transform: "translate(-50%, -50%) scale(0.5)", zIndex: 0 };
        }

      return (
        <div
          key={item.name}
          className={styles.panoCarouselMedia}
          style={style}
        >
          <PanoramaViewer
            imagePath={item.path}
            width="100%"
            height="100%"
            pitch={0}
            yaw={0}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
          />
        </div>
      );
    })}
      </div>

      <button className={`${styles.panoCarouselButton} ${styles.rightArrow}`} onClick={() => onClick("right")}>{String.fromCharCode(62)}</button>

    </div>
  )
}

