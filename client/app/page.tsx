import Hero from "./_components/_sections/_00_hero/Hero"
import Mission from "./_components/_sections/_01_mission/Mission"
import Platform from "./_components/_sections/_03_platform/Platform";
import Watch from "./_components/_sections/_04_watch/Watch"
import Panorama360 from "./_components/_sections/_panorama360/Panorama360";
import WorkplaceVR from "./_components/_sections/_workplaceVR/WorkplaceVR";


export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Platform />
      <Watch />
      <WorkplaceVR />
      <Panorama360 />
    </>
  );
}
