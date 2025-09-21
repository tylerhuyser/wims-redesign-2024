import Carousel from "../../_shared/_carousel/Carousel"
import panorama360Images from '../../../content/06-panorama-360-carousel-data.json'

import styles from "./Panorama360.module.css"

export default function Panorama360() {
  

  return (
    <section className="section" id={styles.panoramaSection}>
      <Carousel carouselType="panorama360" data={panorama360Images} />
    </section>
  )
}