import Carousel from "../../_shared/_carousel/Carousel"
import workplaceVRImages from "../../../content/05-workplace-vr-carousel-data.json"

import styles from "./VR.module.css"

export default function VR() {
  
  return (
    <section className="section" id={styles.vrSection}>

      <div className={styles.vrContentContainer}>

        <Carousel carouselType="workplaceVRCarousel" data={workplaceVRImages} />

        <div className={`subsection ${styles.vrSubsection}`} id={styles.vrTextSubsection}>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>AWOKEN VR</p>
          <p className={`${styles.vrText} ${styles.vrTitle}`}>We expand our perspective when we step into another person's shoes.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>AWOKEN VR is an immersive, perspective-taking platform that makes the impact of bias tangible—and unforgettable.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>By seeing through the eyes of another, participants not only understand bias more deeply but also become more committed to pick up the practice of addressing it.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>Where Awoken App builds daily practice, AWOKEN VR sparks awareness and inspires lasting engagement with change.</p>
        </div>
        
      </div>
  
    </section>
  )
}