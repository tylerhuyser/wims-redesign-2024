import Carousel from "../../_shared/_carousel/Carousel"
import communityVRImages from "../../../content/07-community-vr-carousel-data.json"
import styles from './CommunityVR.module.css'

export default function CommunityVR() {
  return (
    <section className="section" id={styles.communityVRSection}>

      <div className={styles.communityVRContentContainer}>

        <div className={`subsection ${styles.communityVRSubsection}`} id={styles.communityVRTextSubsection}>
          <p className={styles.communityVRText} id={styles.communityVRTitle}>Communities grow closer when stories are shared.</p>
          <p className={styles.communityVRText} id={styles.communityVRSubtitle}>Awoken communityVR is a digital lifestyle intervention that serves as a treatment for conscious & unconscious bias. With a basis in psychology, Awoken communityVR <i>awakens</i> lasting behavior change.</p>
          <p className={styles.communityVRText} id={styles.communityVRSubtitle}>Through guided instruction, interactive exercises, and regular reflection, the communityVR helps individuals, teams, and communities become connected one step at a time.</p>

        </div>

        <Carousel carouselType="communityVRCarousel" data={communityVRImages} />
      
      </div>
        
    </section>
  );
}