import AppImage from "./AppImage"
import FadeUp from "../../_shared/_animations/FadeUp"
import styles from './App.module.css'

export default function App() {
  return (
    <section className={`section ${styles.appSection}`} id="app">
      <FadeUp>
        <div className={styles.appContentContainer}>

          <div className={`subsection ${styles.appSubsection}`} id={styles.appTextSubsection}>
            <p className={`${styles.appText} ${styles.appSubtitle}`}>AWOKEN APP</p>
            <p className={`styles.appText} ${styles.appTitle}`}>Overcoming unconscious bias takes conscious practice.</p>
            <p className={`${styles.appText} ${styles.appSubtitle}`}>Awoken App is a psychology-based digital program that makes empathy a daily practice.</p>
            <p className={`${styles.appText} ${styles.appSubtitle}`}>Through guided lessons, interactive exercises, and regular reflection, users learn to recognize bias, build empathy, and create lasting behavior change.</p>
            <p className={`${styles.appText} ${styles.appSubtitle}`}>Features include:</p>
            <p className={`${styles.appText} ${styles.appSubtitle} ${styles.appList}`}>
              • Personalized onboarding<br />
              • Daily micro-practices that reinforce perspective-taking<br />
              • Progress trackers measuring growth over time<br />
              • Scalable across organizations of different configurations<br />
            </p>
          </div>

          <AppImage />
          
        </div>
      </FadeUp>
     </section>
  );
}