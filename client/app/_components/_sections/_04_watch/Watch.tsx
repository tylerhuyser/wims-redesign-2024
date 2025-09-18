import styles from "./Watch.module.css"

export default function Watch() {
  return (
    <section className="section" id={styles.watchSection}>

      {/* <div className={styles.watchTextContainer}>

          <p className={styles.watchText} id={styles.watchTitle}>A<span className={styles.italicText}>WOKE</span>N VR</p>
          <p className={styles.watchText} id={styles.watchSubtitle}>A Inclusvity Intervention for the Workplace.</p>
          
      </div> */}

      {/* <div style={{ padding: "56.25% 0 0 0", position: "relative", width: "80vw", height: "auto", aspectRatio: "16 / 9" }}>
        <iframe
          src="https://player.vimeo.com/video/347188728?badge=0&autopause=0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title="Walk In My Shoes Media - VR Diversity & Inclusion Training Promo"
        />
      </div> */}

      <video className={styles.video} autoPlay muted loop>
        <source src="/videos/workplace-vr-video.mp4" type="video/mp4" />
      </video>


    </section>
  );
}
