import Carousel from "../../_shared/_carousel/Carousel"
import workplaceVRImages from "../../../content/05-workplace-vr-carousel-data.json"

import styles from "./WorkplaceVR.module.css"

export default function WorkplaceVR() {
  
  return (
    <section className="section" id={styles.workplaceVRSection}>

      <div className={styles.workplaceVRContentContainer}>

        <Carousel carouselType="workplaceVRCarousel" data={workplaceVRImages} />

        <div className={`subsection ${styles.workplaceVRSubsection}`} id={styles.workplaceVRTextSubsection}>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>IN THE WORKPLACE</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRTitle}`}>Empathy training that works in the workplace.</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>Our virtual reality platform, AWOKEN VR, allows participants to see through the eyes of another and live through confrontartions with bias firsthand.</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>By walking in another’s shoes, participants develop a deeper understanding of those around them—regardless of culture, perspective, or identity.</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>The result? Training that doesn’t just inform, but transforms.</p>
        </div>
        
      </div>
  
    </section>
  )
}