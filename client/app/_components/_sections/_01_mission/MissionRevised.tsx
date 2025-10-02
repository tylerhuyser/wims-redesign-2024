import Carousel from '../../_shared/_carousel/Carousel'
import missionGifs from "../../../content/01-mission-carousel-data.json"

import styles from './MissionRevised.module.css'

export default function Mission() {
  return (
    <section className="section" id={styles.missionSection}>

      <div className={styles.missionContentContainer}>

        <Carousel carouselType="missionCarousel" data={missionGifs} />

        <div className={`subsection ${styles.missionSubsection}`} id={styles.missionTextSubsection}>
        <p className={`${styles.missionText} ${styles.missionSubtitle}`}>OUR MISSION</p>
          <p className={`${styles.missionText} ${styles.missionTitle}`}>We aim to strengthen schools, teams, and communities.</p>
          <p className={`${styles.missionText} ${styles.missionSubtitle}`}>Using immersive technology and human-centered storytelling, we build experiences that confront bias, shift perspectives, and inspire lasting change.</p>
          <p className={`${styles.missionText} ${styles.missionSubtitle}`}>By becoming awoken to different perspectives, we build spaces where everyone has the chance to flourish.</p>
        </div>
      
      </div>
        
    </section>
  );
}