"use client";

import Image from "next/image";
import ContactImageData from "../../../content/00-hero-data.json"
import LazySection from "../../_shared/_lazy/LazySection";
import styles from "./Contact.module.css"

export default function ContactImage() { 
  return (
    <LazySection render={(visible) =>
      visible && (
        <div className={styles.contactImageContainer}>
          <Image
            className={styles.contactImage}
            src={ContactImageData[3].path}
            alt={'contact-image'}
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={ContactImageData[3].blurDataURL}
          />
        </div>
      )}/>

  )
}