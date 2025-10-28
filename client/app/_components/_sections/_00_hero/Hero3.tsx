import HeroButton from "./HeroButton";
import Image from "next/image";
import heroImages from "../../../content/00-hero-data.json"
import styles from "./Hero3.module.css"

export default function Hero3() {
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
          placeholder="blur"
          blurDataURL={imageData.blurDataURL}
          priority={index === 0}
        />
      </div>
    )
  })

  return (
    <section className="section" id={styles.heroSection} >

      <div className={styles.heroContentContainer}>

        <div className={styles.heroTextContainer}>
          <p className={styles.heroText} id={styles.heroSubtitle}>WELCOME TO A<span className={styles.boldText}>WOKE</span>N</p>
          <p className={styles.heroText} id={styles.heroTitle}>Make the unconscious conscious.</p>
          <p className={styles.heroText} id={styles.heroTitle}>Make empathy a practice.</p>
          <p className={styles.heroText} id={styles.heroBody}>
            Our platforms, <span className={styles.boldText}>Awoken App</span> and <span className={styles.boldText}>Awoken VR</span>, help individuals, organizations, and communities grow together.
          </p>
          <HeroButton />
        </div>


        <div className={styles.heroGridContainer}>

          {heroImagesJSX}


        </div>

      </div>

    </section>
  )
}