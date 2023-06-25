
import { Indie_Flower, Rowdies } from "next/font/google";

import logo from "../public/assets/whitelogo.png";

import Image from "next/image";
import { Lilita_One } from "next/font/google";
const lili = Lilita_One({ weight: "400", subsets: ["latin"] });
const rowdie = Rowdies({ weight: "400", subsets: ["latin"] });
const indie = Indie_Flower({ weight: "400", subsets: ["latin"] });
export default function Footer({ id }) {
  return (
    <div className="h-72 flex flex-col mt-24 items-center pt-12  text-center  w-screen    bg-space ">
    <div className={lili.className}>
      <div id={id} className="text-white font-thin text-3xl">
        Contact Us
      </div>
    </div>
    <div className={rowdie.className}>
      <div className="text-white font-thin text-xl pt-4">
        These and other crypto projects have worked with us to get their
        token to the moon.
      </div>
    </div>
    <Image src={logo} width={300} className="py-12"></Image>
  
  </div>
  );
}
