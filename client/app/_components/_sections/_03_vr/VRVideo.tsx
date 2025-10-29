"use client";

import LazySection from "../../_shared/_lazy/LazySection";
import MuxVideo from "../../_shared/_video/MuxVideo";
import styles from "./VR.module.css"

export default function VRVideo() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.videoWrapper}>
          <MuxVideo
            playbackId="GOYL02zY1X6yp00b5as5c02D9i9YBd2t1h4Xyq8O9hlc5w"
            autoPlay
            loop
            muted
            accentColor="#F39C12"
          />
        </div>
    )}/>
  )
}