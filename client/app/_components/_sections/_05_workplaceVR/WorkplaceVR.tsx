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
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRTitle}`}>Bias is more than a concept. Make it human.</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>Traditional workplace program discuss the experience of bias in the abstract. Awoken makes them tangible, human, and real. Through immersive VR, participants don't just study bias—they experience it.</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>Ultimately, Awoken makes workplace programs more memorable, engaging, and more likely to spark long-term change with follow-on programs, such as Awoken App.</p>
          <p className={` ${styles.workplaceVRText} ${styles.workplaceVRSubtitle}`}>Awoken is modular, scalable, and designed to integrate seamlessly with existing programs to meet the unique needs of organizations of every size.</p>
        </div>
        
      </div>
  
    </section>
  )
}