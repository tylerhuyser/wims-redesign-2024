import styles from "./Watch.module.css"

export default function Watch() {
  return (
    <section className="section" id={styles.watchSection}>

      <div className={styles.watchContentContainer}>

        <div className={styles.watchTextContainer}>

            <p className={styles.watchText} id={styles.watchTitle}>AWOKENVR in the Workplace</p>
            
        </div>

        <div className={styles.videoWrapper}>
            
          <video className={styles.video} autoPlay muted loop>
            <source src="/videos/workplace-vr-video.mp4" type="video/mp4" />
          </video>
            
        </div>  
        
      </div>

    </section>
  );
}
