import Carousel from "../../_shared/_carousel/Carousel"
import renders from "../../../content/awoken-app-renders-data.json"

import styles from "./platform.module.css"

export default function Platform() {

  return (
    <section className="section" id={styles.platformSection}>

      <div className={`subsection ${styles.platformSubsection}`} id={styles.platformCarouselSubsection}>

        <div className={styles.platformTextContainer}>

            <p className={`${styles.platformText} ${styles.platformCarouselText}`} id={styles.platformCarouselTitle}>A<span className={styles.italicText}>WOKE</span>N</p>
            <br /><br />
            <p className={`${styles.platformText} ${styles.platformCarouselText}`} id={styles.platformCarouselSubtitle}>A Lifestyle Intervention for Bias & Belonging</p>
          
        </div>

        <Carousel carouselType="platformCarousel" data={renders} />

        <img
          key='awoken-platform-render-combined'
          src={'/images/awoken-app/awoken-app-renders-combined.png'}
          alt='awoken-app-render-combined'
          className={styles.platformCombinedImage}
        />

      </div>

      <div className={`subsection ${styles.platformSubsection}`} id={styles.platformTextSubsection}>
        <p className={styles.platformText} id={styles.platformTitle}>Bias isn't overcome in just a day. It takes practice.</p>
        <br /><br />
        <p className={styles.platformText} id={styles.platformSubtitle}>
          • Personalized onboarding <br />
          • Daily micro-lessons & reflections <br />
          • Progress tracking & surveys <br />
          • Scalable for organizations <br />
        </p>
      </div>

    </section>
  )
}