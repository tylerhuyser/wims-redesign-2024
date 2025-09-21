import Carousel from '../../_shared/_carousel/Carousel'
import missionGifs from "../../../content/01-mission-carousel-data.json"

import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section className="section" id={styles.missionSection}>

      <Carousel carouselType="missionCarousel" data={missionGifs} />

      <div className={`subsection ${styles.missionSubsection}`} id={styles.missionTextSubsection}>
        <p className={styles.missionText} id={styles.missionTitle}><strong className={styles.boldText}>AWOKEN</strong> strengthens teams and communities.</p>
        <p className={styles.missionText} id={styles.missionSubtitle}>Using immersive technology and human-centered storytelling, we build experiences that confront bias, shift perspectives, and create spaces where everoyone feels seen, heard, and valued.</p>
      </div>
    
    </section>
  );
}