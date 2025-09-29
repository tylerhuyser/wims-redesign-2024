import Carousel from "../../_shared/_carousel/Carousel"
import workplaceVRImages from "../../../content/05-workplace-vr-carousel-data.json"

import styles from "./WorkplaceVR.module.css"

export default function WorkplaceVR() {
  
  return (
    <section className="section" id={styles.workplaceVRSection}>

      <div className={styles.workplaceVRContentContainer}>

        <Carousel carouselType="workplaceVRCarousel" data={workplaceVRImages} />

        <div className={`subsection ${styles.workplaceVRSubsection}`} id={styles.workplaceVRTextSubsection}>
          <p className={styles.workplaceVRText} id={styles.workplaceVRTitle}>Immersive Empathy Training</p>
          <p className={styles.workplaceVRText} id={styles.workplaceVRSubtitle}>Step into real stories. Experience bias, resilience, and belonging firsthand.</p>
        </div>
        
      </div>
  
    </section>
  )
}