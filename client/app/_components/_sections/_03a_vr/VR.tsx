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
          <p className={`${styles.vrText} ${styles.vrTitle}`}>Our perspectives shift when we step inside another person's shoes.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>AWOKEN VR is a virtual reality platform that lets us see through the eyes of another. By living through another's experiences firsthand, the concept of bias becomes human.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>Where Awoken App builds daily practice, AWOKEN VR inspires engagement and a willingness to commit to change.</p>
        </div>
        
      </div>
  
    </section>
  )
}