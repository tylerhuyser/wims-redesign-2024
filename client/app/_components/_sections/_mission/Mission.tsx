import Carousel from '../../_shared/_carousel/Carousel'
import gifs from "../../../content/mission-carousel-data.json"

import './Mission.module.css'

export default function Mission() {
  return (
    <section className="section" id="mission-section">
      <div className="mission-subsection subsection" id="mission-copy">
        AWOKEN strengthens teams and communities through immersive technology and human-centered storytelling.

        We build experiences that confront bias, shift perspectives, and create spaces where everoyone feels seen, heard, and valued.
      </div>
      <Carousel carouselType="mission" data={gifs} />
    </section>
  );
}