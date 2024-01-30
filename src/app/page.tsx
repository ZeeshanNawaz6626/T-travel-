import Image from "next/image";
import Services from "./components/home/services";
import Hero from "./components/home/hero";
import Gateway from "./components/home/gatway";
// import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
    
   <Hero/>
   <Services/>
   <Gateway/>

   </div>
  );
}
