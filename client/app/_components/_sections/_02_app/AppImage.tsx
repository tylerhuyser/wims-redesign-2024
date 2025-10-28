"use client";

import Image from "next/image";
import AppImageData from "../../../content/02-app-data.json";
import LazySection from "../../_shared/_lazy/LazySection";
import styles from './App.module.css';

export default function AppImage() {
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.appImageContainer}>
          <Image
            className={styles.appImage}
            src={AppImageData[0].path}
            alt='awoken-app-mockup'
            fill
            style={{ objectFit: 'cover' }}
            loading="lazy"
            placeholder="blur"
            blurDataURL={AppImageData[0].blurDataURL}
          />
        </div>
      )
    }/>
  );
}