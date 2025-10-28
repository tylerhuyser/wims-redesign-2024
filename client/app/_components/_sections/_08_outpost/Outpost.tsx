import OutpostVideo from "./OutpostVideo"
import FadeUp from "../../_shared/_animations/FadeUp"
import styles from "./Outpost.module.css"

export default function Outpost() {
  return (
    <section className="section" id={styles.outpostSection}>
      <FadeUp>
        <div className={styles.outpostContentContainer}>

          <div className={styles.outpostTextContainer}>

            <p className={styles.outpostText} id={styles.outpostTitle}>Deepen the connections within your community.</p>
            <p className={styles.outpostText} id={styles.outpostSubtitle}>See how Awoken helps communities listen, learn, and grow together.</p>
          </div>

          <OutpostVideo />
          
        </div>
      </FadeUp>
    </section>
  );
}