import Carousel from "../../_shared/_carousel/Carousel"
import panorama360Images from '../../../content/06-panorama-360-carousel-data.json'

import styles from "./Panorama360.module.css"

export default function Panorama360() {
  

  return (
    <section className="section" id={styles.panoramaSection}>

      <div className={styles.panoramaContentContainer}>

        <div className={styles.panoramaTextContainer}>

          <p className={styles.panoramaText} id={styles.panoramaTitle}>Drive engagement with future media.</p>
          <p className={styles.panoramaText} id={styles.panoramaSubtitle}>See what happens when training feels more like discovery than instruction.</p>
          
        </div>
          
        <Carousel carouselType="panorama360" data={panorama360Images} />

      </div>

    </section>
  )
}