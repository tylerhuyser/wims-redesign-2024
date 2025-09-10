import Image from "next/image";
import Watch from "./_components/_sections/_watch/Watch"
import Mission from "./_components/_sections/_mission/Mission"
import Panorama360 from "./_components/_sections/_panorama360/Panorama360";


export default function Home() {
  return (
    <>
      <Watch />
      <Mission />
      <Panorama360 />
    </>
  );
}
