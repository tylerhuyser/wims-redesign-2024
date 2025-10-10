import Image from "next/image";
import FadeUp from "../../_shared/_animations/FadeUp"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={`section ${styles.contactSection}`} id="contact">

      <FadeUp>
        <div className={styles.contactContentContainer}>

          <div className={`subsection ${styles.contactSubsection}`} id={styles.contactTextSubsection}>
            <p className={`${styles.contactText} ${styles.contactSubtitle}`}>CONTACT US</p>
            <p className={`${styles.contactText} ${styles.contactTitle}`}>Awaken change in your school, team, or community.</p>
            <p className={`${styles.contactText} ${styles.contactSubtitle}`}>Get in touch to explore how Awoken can help strengthen your organization.</p>

            <form className={styles.contactForm}>

              <div className={styles.formGroup}>
                <label htmlFor="name">FULL NAME</label>
                <input type="text" id="name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="organization">ORGANIZATION</label>
                <input type="text" id="organization" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">E-MAIL</label>
                <input type="email" id="email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">PHONE</label>
                <input type="tel" id="phone" required />
              </div>

              <div className={styles.formGroup} id={styles.textarea}>
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" rows={4} required />
              </div>

              <button className={styles.contactButton}>Send Message</button>

            </form>

          </div>

          <div className={styles.contactImageContainer}>
            <Image className={styles.contactImage} src={'/images/00-hero/hero-04.jpg'} alt={'contact-image'} fill />
          </div>
          

        </div>
      </FadeUp>
    </section>
  )
}