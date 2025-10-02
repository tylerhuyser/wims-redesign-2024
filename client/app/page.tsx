// import Hero from "./_components/_sections/_00_hero/Hero"
import HeroRevised from "./_components/_sections/_00_hero/HeroRevised"
// import Mission from "./_components/_sections/_01_mission/Mission"
import Mission from "./_components/_sections/_01_mission/MissionRevised"
import Quotes from "./_components/_sections/_02_quotes/Quotes"
import App from "./_components/_sections/_03_app/App"
import Platform from "./_components/_sections/_03_platform/Platform";
import VR from "./_components/_sections/_03a_vr/VR"
import Watch from "./_components/_sections/_04_watch/Watch"
import WorkplaceVR from "./_components/_sections/_05_workplaceVR/WorkplaceVR";
import Panorama360 from "./_components/_sections/_06_panorama360/Panorama360";
import CommunityVR from "./_components/_sections/_07_communityVR/CommunityVR"


export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroRevised />
      <Mission />
      {/* <Quotes /> */}
      <App />
      {/* <Platform /> */}
      <VR />
      <Panorama360 />
      <WorkplaceVR />
      <Watch />
      {/* <Panorama360 /> */}
      <CommunityVR />
    </>
  );
}
