"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import MuxVideo from "../../_shared/_video/MuxVideo"
import styles from "./Outpost.module.css"

export default function OutpostVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        
        <div className={styles.videoWrapper}>
          <MuxVideo
            playbackId="Nr01r6lF7gn7bjqLibMwIFLtSbgO01fXymZxz8vRO4I3U"
            poster="https://image.mux.com/Nr01r6lF7gn7bjqLibMwIFLtSbgO01fXymZxz8vRO4I3U/thumbnail.webp?width=1920&height=1080&time=122"
            loop
            muted
            accentColor="#152c46"
          />
        </div>
        
    )}/>
  )
}