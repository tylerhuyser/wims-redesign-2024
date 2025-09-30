import Carousel from "../../_shared/_carousel/Carousel"
import panorama360Images from '../../../content/06-panorama-360-carousel-data.json'

import styles from "./Panorama360.module.css"

export default function Panorama360() {
  

  return (
    <section className="section" id={styles.panoramaSection}>

      <div className={styles.panoramaContentContainer}>

        <div className={styles.panoramaTextContainer}>

          <p className={styles.panoramaText} id={styles.panoramaTitle}>Restoring the human element.</p>
          <p className={styles.panoramaText} id={styles.panoramaSubtitle}>Human-centeric storytelling is the core of our award-winning VR platform.</p>
          
        </div>
          
        <Carousel carouselType="panorama360" data={panorama360Images} />

      </div>

    </section>
  )
}