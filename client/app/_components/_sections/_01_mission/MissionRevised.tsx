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
          <p className={`${styles.missionText} ${styles.missionSubtitle}`}>We use immersive technologies, captivating stories, and proven psychology to humanize bias, expand perspectives, and drive meaningful change.</p>
          <p className={`${styles.missionText} ${styles.missionSubtitle}`}>Our goal is to build spaces where everyone has the chance to flourish, succeed, and belong.</p>
        </div>
      
      </div>
        
    </section>
  );
}