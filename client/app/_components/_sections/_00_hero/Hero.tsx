import Carousel from "../../_shared/_carousel/Carousel"
import heroImages from "../../../content/hero-data.json"

import styles from "./Hero.module.css"

export default function Hero() {
  const heroImagesJSX = heroImages.map((imageData, index) => {
    return (
      <div className={styles.heroImageWrapper}>
        <img
          className={`${styles.heroImage} ${styles['heroImage' + (index + 1)]}`}
          src={imageData.path}
          key={index}
          alt={imageData.name || `hero-image-${index}`}
        />
      </div>
    )
  })

  return (
    <section className="section" id={styles.heroSection} >
      <div className={`subsection ${styles.heroSubsection}`} id={styles.heroTextSubsection} >
        <p className={styles.heroText} id={styles.heroTitle}>A<span className={styles.italicText}>WOKE</span>N</p>
        <p className={styles.heroText} id={styles.heroSubtitle}>Inspiring Inclusivity through Innovative Technology and Storytelling.</p>
      </div>

      <div className={`subsection ${styles.heroSubsection}`} id={styles.heroImagesSubsection} >
        {heroImagesJSX}
      </div>

      <Carousel carouselType="heroCarousel" data={heroImages} />

    </section>
  )
}