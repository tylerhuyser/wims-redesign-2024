import Carousel from "../../_shared/_carousel/Carousel"

import styles from "./VR.module.css"

export default function VR() {
  
  return (
    <section className="section" id={styles.vrSection}>

    <Carousel carouselType="vrCarousel" data={} />

    <div className={`subsection ${styles.vrSubsection}`} id={styles.vrTextSubsection}>
      <p className={styles.vrText} id={styles.vrTitle}><strong className={styles.boldText}>AWOKEN VR</strong>: Immersive Empathy Training</p>
      <p className={styles.vrText} id={styles.vrSubtitle}>Step into real stories. Experience bias, resilience, and belonging firsthand.</p>
    </div>
  
  </section>
  )
}