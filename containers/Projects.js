import { Lilita_One } from "next/font/google";
const lili = Lilita_One({ weight: "400", subsets: ["latin"] });
import { Indie_Flower } from "next/font/google";
import babydoge from "../public/assets/baby.png";
import floki from "../public/assets/floki.png";
import milady from "../public/assets/milady.png";
import pepe from "../public/assets/pepe.png";
import shiba from "../public/assets/shibaa.png";

import Image from "next/image";

const indie = Indie_Flower({ weight: "400", subsets: ["latin"] });
export default function Projects() {
  return (
    <div className="h-72 flex flex-col items-center pt-12  text-center  w-screen absolute mt-[800px] md:mt-[600px] bg-blue-600">
      <div className={lili.className}>
        <div className="text-white font-thin text-3xl">
          Trusted by well-known projects
        </div>
      </div>
      <div className={indie.className}>
        <div className="text-white font-thin text-xl pt-4">
          These and other crypto projects have worked with us to get their token
          to the moon.
        </div>
      </div>
      <div className="w-full flex justify-center">
      <div className="flex w-1/3 justify-between py-8">
        <Image src={babydoge} width={60}></Image>
        <Image src={milady} width={60}></Image>
        <Image src={pepe} width={60}></Image>
        <Image src={shiba} width={60}></Image>
        <Image src={floki} width={60}></Image>
      </div></div>
    </div>
  );
}
