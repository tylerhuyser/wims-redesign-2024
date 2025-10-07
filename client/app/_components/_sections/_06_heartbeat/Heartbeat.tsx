import FadeUp from "../../_shared/_animations/FadeUp"
import styles from "./Heartbeat.module.css"

export default function Heartbeat() {
  return (
    <section className="section" id={styles.heartbeatSection}>
      <FadeUp>
        <div className={styles.heartbeatContentContainer}>

          <div className={styles.heartbeatTextContainer}>

            <p className={styles.heartbeatText} id={styles.heartbeatTitle}>Immersive experiences drive engagement.</p>
            <p className={styles.heartbeatText} id={styles.heartbeatSubtitle}>Discover how programs people truly connect with boost impact and participation.</p>
          </div>

          <div className={styles.videoWrapper}>
              
            <video className={styles.video} autoPlay muted loop>
              <source src="/videos/06-heartbeat-video.mp4" type="video/mp4" />
            </video>
              
          </div>  
          
        </div>
      </FadeUp>
    </section>
  );
}
