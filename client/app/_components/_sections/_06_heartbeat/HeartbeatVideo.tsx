"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import styles from "./Heartbeat.module.css"

export default function HeartbeatVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.videoWrapper}>
              
          <video className={styles.video} autoPlay muted loop>
            <source src="/videos/06-heartbeat-video.mp4" type="video/mp4" />
          </video>
          
        </div> 
    )}/>
  )
}