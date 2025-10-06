import Hero3 from "./_components/_sections/_00_hero/Hero3"
import Mission from "./_components/_sections/_01_mission/Mission"
import App from "./_components/_sections/_02_app/App"
import VR from "./_components/_sections/_03_vr/VR"
import Panorama360 from "./_components/_sections/_04_panorama360/Panorama360";
import Workplace from "./_components/_sections/_05_workplace/Workplace";
import Heartbeat from "./_components/_sections/_06_heartbeat/Heartbeat"
import Community from "./_components/_sections/_07_community/Community"
import Outpost from "./_components/_sections/_08_outpost/Outpost"
import Quotes from "./_components/_sections/_02_quotes/Quotes"


export default function Home() {
  return (
    <>
      <Hero3 />
      <Mission />
      <App />
      <VR />
      <Panorama360 />
      <Workplace />
      <Heartbeat />
      <Community />
      <Outpost />
    </>
  );
}
