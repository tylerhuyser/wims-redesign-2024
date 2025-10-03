import Carousel from "../../_shared/_carousel/Carousel"
import workplaceVRImages from "../../../content/05-workplace-vr-carousel-data.json"

import styles from "./VR.module.css"

export default function VR() {
  
  return (
    <section className="section" id={styles.vrSection}>

      <div className={styles.vrContentContainer}>

        {/* <Carousel carouselType="workplaceVRCarousel" data={workplaceVRImages} /> */}

        <div className={styles.videoWrapper}>
            
            <video className={styles.video} autoPlay muted loop>
              <source src="/videos/awoken-vr-video.mp4" type="video/mp4" />
        </video>
              
          </div>  

        <div className={`subsection ${styles.vrSubsection}`} id={styles.vrTextSubsection}>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>AWOKEN VR</p>
          <p className={`${styles.vrText} ${styles.vrTitle}`}>Our perspective is limited. Expand perspective with virtual reality.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>Awoken VR is an immersive platform that lets participants take the perspective of another.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>By walking in someone else's shoes, participants:.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle} ${styles.vrList}`}>
          • Better connect with the concept of bias.<br />
          • Build greater empathy toward their colleagues & community.<br />
          • Gain a deeper sense of belonging in their community or organization<br />
          </p>
        </div>
        
      </div>
  
    </section>
  )
}