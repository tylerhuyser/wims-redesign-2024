import VRVideo from "./VRVideo"
import FadeUp from "../../_shared/_animations/FadeUp"
import styles from "./VR.module.css"

export default function VR() {
  
  return (
    <section className={`section ${styles.vrSection}`} id="vr">
      <FadeUp>
        <div className={styles.vrContentContainer}>

          <VRVideo />

          <div className={`subsection ${styles.vrSubsection}`} id={styles.vrTextSubsection}>
            <p className={`${styles.vrText} ${styles.vrSubtitle}`}>AWOKEN VR</p>
            <p className={`${styles.vrText} ${styles.vrTitle}`}>Our perspective is limited. Expand perspective with virtual reality.</p>
            <p className={`${styles.vrText} ${styles.vrSubtitle}`}>Awoken VR is an immersive platform that lets participants take the perspective of another.</p>
            <p className={`${styles.vrText} ${styles.vrSubtitle}`}>By walking in someone else&apos;s shoes, participants better connect with the concept of bias, build greater empathy toward their colleagues & community, and gain a deeper sense of belonging in their community or organization.</p>
          </div>
          
        </div>
      </FadeUp>
    </section>
  )
}