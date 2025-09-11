import Carousel from '../../_shared/_carousel/Carousel'
import gifs from "../../../content/mission-carousel-data.json"

import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section className="section" id={styles.missionSection}>

      <div className={`subsection ${styles.missionSubsection}`} id={styles.missionTextSubsection}>
        <p className={styles.missionText} id={styles.missionTitle}><strong className={styles.boldText}>AWOKEN</strong> strengthens teams and communities through immersive technology and human-centered storytelling.</p>
        <p className={styles.missionText} id={styles.missionSubtitle}>We build experiences that confront bias, shift perspectives, and create spaces where everoyone feels seen, heard, and valued.</p>
      </div>
      
      <Carousel carouselType="missionCarousel" data={gifs} />
    </section>
  );
}