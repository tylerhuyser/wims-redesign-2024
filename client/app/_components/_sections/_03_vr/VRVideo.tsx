"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import MuxVideo from "../../_shared/_video/MuxVideo";
import styles from "./VR.module.css"

export default function VRVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.videoWrapper}>
              
          <video className={styles.video} autoPlay muted loop>
            <source src="videos/03-vr-section-video.mp4" type="video/mp4" />
          </video>
          
        </div>
        // <div className={styles.videoWrapper}>
        //   <MuxVideo
        //   playbackId="hn00CT2l6VdCdw8dyf3XcknP4uP5TB79200VHzn1ssNv8"
        //   autoPlay
        //   loop
        //   muted
        //   accentColor="#F39C12"
        //     />
        // </div>
    )}/>
  )
}