import Carousel from "../../_shared/_carousel/Carousel"
import quotesData from "../../../content/02-quotes-data.json"

import styles from "./Quotes.module.css"

export default function Quotes() {
  
  return (
    <section className="section" id={styles.quotesSection}>

      <Carousel carouselType="quotes" data={quotesData} />

    </section>
  )
}