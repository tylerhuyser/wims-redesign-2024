import Carousel from "../../_shared/_carousel/Carousel"
import communityImages from "../../../content/07-community-carousel-data.json"
import styles from './Community.module.css'

export default function Community() {
  return (
    <section className={`section ${styles.communitySection}`} id="communities">

      <div className={styles.communityContentContainer}>

        <div className={`subsection ${styles.communitySubsection}`} id={styles.communityTextSubsection}>
        <p className={`${styles.communityText} ${styles.communitySubtitle}`}>IN THE COMMUNITY</p>
          <p className={`${styles.communityText} ${styles.communityTitle}`}>Communities grow closer when we share our stories.</p>
          <p className={`${styles.communityText} ${styles.communitySubtitle}`}>Beyond the workplaces, Awoken strengthens communities through public exhibitions and workshops.</p>
          <p className={`${styles.communityText} ${styles.communitySubtitle}`}>Using immersive media and digital platforms, we help educate individuals on issues specific to their community.</p>
          <p className={`${styles.communityText} ${styles.communitySubtitle}`}>By helping individuals recognize how bias shapes their community, Awoken builds connections and spaces where everyone belongs.</p>
        </div>

        <Carousel carouselType="communityCarousel" data={communityImages} />
      
      </div>
        
    </section>
  );
}