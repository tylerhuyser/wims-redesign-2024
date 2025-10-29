"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import MuxVideo from "../../_shared/_video/MuxVideo";
import styles from "./Heartbeat.module.css"

export default function HeartbeatVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (

        <div className={styles.videoWrapper}>
          <MuxVideo
            playbackId="7UNFXCc7EmaDT222F8xMoYm9QYhpKjW1RWGdsbXHWyk"
            poster="https://image.mux.com/7UNFXCc7EmaDT222F8xMoYm9QYhpKjW1RWGdsbXHWyk/thumbnail.webp?width=1920&height=1080&time=20"
            loop
            muted
            accentColor="#152c46"
          />
      </div>
    )}/>
  )
}