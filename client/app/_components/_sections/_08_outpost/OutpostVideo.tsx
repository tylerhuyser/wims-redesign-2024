"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import styles from "./Outpost.module.css"

export default function OutpostVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.videoWrapper}>
              
          <video className={styles.video} autoPlay muted loop>
            <source src="/videos/08-outpost-video.mp4" type="video/mp4" />
          </video>
          
      </div>  
    )}/>
  )
}