import Image from "next/image";
import heroImages from "../../../content/00-hero-data.json"
import styles from "./HeroRevised.module.css"

export default function HeroRevised() {
  const heroImagesJSX = heroImages.map((imageData, index) => {
    return (
      <div
        className={styles.heroImageWrapper}
        style={{ ['--index']: index } as React.CSSProperties}
        key={index}
      >
        <Image
          className={`${styles.heroImage} ${styles['heroImage' + (index + 1)]}`}
          src={imageData.path}
          alt={imageData.name || `hero-image-${index}`}
          fill
        />
      </div>
    )
  })

  return (
    <section className="section" id={styles.heroSection} >

      <div className={styles.heroContentContainer}>

        <p className={styles.heroText} id={styles.heroTitle}>A<span className={styles.boldText}>WOKE</span>N</p>

        <div className={styles.heroGridContainer}>
          <p className={styles.heroText} id={styles.heroSubtitle}>Recognize our biases...</p>

          {heroImagesJSX}

          <p className={styles.heroText} id={styles.heroSub}>...to begin training</p>
        </div>

        <button className={styles.heroButton}>Get Started</button>

      </div>

    </section>
  )
}