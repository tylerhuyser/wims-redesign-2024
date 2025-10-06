import Carousel from "../../_shared/_carousel/Carousel"
import workplaceImages from "../../../content/05-workplace-carousel-data.json"

import styles from "./Workplace.module.css"

export default function Workplace() {
  
  return (
    <section className="section" id={styles.workplaceSection}>

      <div className={styles.workplaceContentContainer}>

        <Carousel carouselType="workplaceCarousel" data={workplaceImages} />

        <div className={`subsection ${styles.workplaceSubsection}`} id={styles.workplaceTextSubsection}>
          <p className={`${styles.workplaceText} ${styles.workplaceSubtitle}`}>IN THE WORKPLACE</p>
          <p className={`${styles.workplaceText} ${styles.workplaceTitle}`}>Bias is more than a concept. Make it human.</p>
          <p className={`${styles.workplaceText} ${styles.workplaceSubtitle}`}>Traditional workplace program discuss the experience of bias in the abstract. Awoken makes them tangible, human, and real. Through immersive VR, participants don't just study bias—they experience it.</p>
          <p className={`${styles.workplaceText} ${styles.workplaceSubtitle}`}>Ultimately, Awoken makes workplace programs more memorable, engaging, and more likely to spark long-term change with follow-on programs, such as Awoken App.</p>
          <p className={`${styles.workplaceText} ${styles.workplaceSubtitle}`}>Awoken is modular, scalable, and designed to integrate seamlessly with existing programs to meet the unique needs of organizations of every size.</p>
        </div>
        
      </div>
  
    </section>
  )
}