import Carousel from "../../_shared/_carousel/Carousel"
import images from "../../../content/workplace-vr-carousel-data.json"

import styles from "./WorkplaceVR.module.css"

export default function WorkplaceVR() {
  
  return (
    <section className="section" id={styles.workplaceVRSection}>

      <Carousel carouselType="workplaceVRCarousel" data={images} />

      <div className={`subsection ${styles.workplaceVRSubsection}`} id={styles.workplaceVRTextSubsection}>
        <p className={styles.workplaceVRText} id={styles.workplaceVRTitle}><strong className={styles.boldText}>AWOKEN VR</strong>: Immersive Empathy Training</p>
        <p className={styles.workplaceVRText} id={styles.workplaceVRSubtitle}>Step into real stories. Experience bias, resilience, and belonging firsthand.</p>
      </div>
  
    </section>
  )
}