import Image from "next/image";
import Slider from "../components/Slider";
import pepe from "../public/assets/pepeshill.png"
import crazy from "../public/assets/crazy1.png"
import baby2 from "../public/assets/babydoge2.png"
import shib from "../public/assets/shibatw.png"
import pepe2 from "../public/assets/pepe2.png"
import floki from "../public/assets/flokitw.png"






export default function Tweets(){
    return(
        <div className="w-full flex flex-col py-12 justify-center items-center">
           <Image src={pepe} width={800}></Image>
           <Image src={crazy} width={800} className="pt-8"></Image>
           <Image src={baby2} width={800} className="pt-8"></Image>
           <Image src={shib} width={800} className="pt-8"></Image>
           <Image src={pepe2} width={800} className="pt-8"></Image>
           <Image src={floki} width={800} className="pt-8"></Image>


        </div>
    )
}