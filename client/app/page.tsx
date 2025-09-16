import Hero from "./_components/_sections/_00_hero/Hero"
import Mission from "./_components/_sections/_01_mission/Mission"
import Watch from "./_components/_sections/_watch/Watch"
import Panorama360 from "./_components/_sections/_panorama360/Panorama360";
import Platform from "./_components/_sections/_platform/Platform";
import WorkplaceVR from "./_components/_sections/_workplaceVR/WorkplaceVR";


export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Panorama360 />
      <Platform />
      <WorkplaceVR />
    </>
  );
}
