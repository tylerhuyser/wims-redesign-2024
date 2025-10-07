import styles from "./VR.module.css"

export default function VR() {
  
  return (
    <section className={`section ${styles.vrSection}`} id="vr">

      <div className={styles.vrContentContainer}>

        <div className={styles.videoWrapper}>
            
            <video className={styles.video} autoPlay muted loop>
              <source src="/videos/03-vr-section-video.mp4" type="video/mp4" />
        </video>
              
          </div>  

        <div className={`subsection ${styles.vrSubsection}`} id={styles.vrTextSubsection}>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>AWOKEN VR</p>
          <p className={`${styles.vrText} ${styles.vrTitle}`}>Our perspective is limited. Expand perspective with virtual reality.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>Awoken VR is an immersive platform that lets participants take the perspective of another.</p>
          <p className={`${styles.vrText} ${styles.vrSubtitle}`}>By walking in someone else's shoes, participants better connect with the concept of bias, build greater empathy toward their colleagues & community, and gain a deeper sense of belonging in their community or organization.</p>
          {/* <p className={`${styles.vrText} ${styles.vrSubtitle} ${styles.vrList}`}>
          • Better connect with the concept of bias.<br />
          • Build greater empathy toward their colleagues & community.<br />
          • Gain a deeper sense of belonging in their community or organization.<br />
          </p> */}
        </div>
        
      </div>
  
    </section>
  )
}