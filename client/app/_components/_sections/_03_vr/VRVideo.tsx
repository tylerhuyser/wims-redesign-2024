"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import styles from "./VR.module.css"

export default function VRVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.videoWrapper}>
              
          <video className={styles.video} autoPlay muted loop>
            <source src="/videos/03-vr-section-video.mp4" type="video/mp4" />
          </video>
          
      </div>  
    )}/>
  )
}