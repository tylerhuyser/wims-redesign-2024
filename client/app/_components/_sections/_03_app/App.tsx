import styles from './App.module.css'

export default function App() {
  return (
    <section className="section" id={styles.appSection}>

      <div className={styles.appContentContainer}>

        <div className={`subsection ${styles.appSubsection}`} id={styles.appTextSubsection}>
          <p className={`${styles.appText} ${styles.appSubtitle}`}>AWOKEN APP</p>
          <p className={`styles.appText} ${styles.appTitle}`}>Our biases are unconscious. Overcoming them takes conscious practice.</p>
          <p className={`${styles.appText} ${styles.appSubtitle}`}>Awoken App is a digital lifestyle intervention and treatment for unconscious bias. With a basis in psychology, Awoken app <i>awakens</i> lasting behavior change.</p>
          <p className={`${styles.appText} ${styles.appSubtitle}`}>Through guided instruction, interactive exercises, and regular reflection, the app helps individuals, teams, and communities become connected one step at a time.</p>
          <p className={`${styles.appText} ${styles.appSubtitle} ${styles.appList}`}>
          • Personalized onboarding to meet each user's needs.<br />
          • Daily micro-practices that reinforce awareness and perspective-taking.<br />
          • Progress insights that track both personal growth.<br />
          • Scalable solution across schools, companies, and communities.<br />
          </p>
        </div>

        <div className={styles.appImageContainer}>
          <img className={styles.appImage} src={'/images/03-app/awoken-app-mockup.png'} />
        </div>
        
      
      </div>
        
    </section>
  );
}