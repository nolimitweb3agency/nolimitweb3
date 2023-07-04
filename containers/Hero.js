import { Indie_Flower, Rowdies } from "next/font/google";
import Box from "../components/Box";
import babydoge from "../public/assets/baby.png";
import floki from "../public/assets/floki.png";
import milady from "../public/assets/milady.png";
import pepe from "../public/assets/pepe.png";
import shiba from "../public/assets/shibaa.png";
import Image from "next/image";

const rowdie = Rowdies({ weight: "400", subsets: ["latin"] });
import { Lilita_One } from "next/font/google";
const lili = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function Hero({ id }) {
  return (
    <div className="flex flex-col justify-center items-center bg-hero bg-cover bg-center w-full h-full ">
      <div className="flex-col flex items-center text-xl  md:pt-12 md:justify-start ">
        <div className={rowdie.className}>
          <div className="flex flex-wrap items-center justify-center ">
            <div className="text-white text-center text-4xl md:text-5xl lg:text-6xl md:px-0 px-16">
              We will make your token go viral
            </div>
            <div className="text-5xl px-4 animate-bounce lg:pt-0 pt-8">🚀</div>
          </div>
        </div>
          <div className={rowdie.className}>
            <div className="text-center  text-white text-xl sm:text-2xl px-4  pt-8">
              Welcome to No Limit Web3 Marketing — The #1 crypto marketing
              agency known for aggressive crypto shill campaigns.
            </div>
          </div>
       
        <div className="md:flex w-full md:px-24 justify-center pt-4 px-4 md:justify-between ">
          <Box
            title="$9M"
            subtitle="Average market cap at ATH of our clients"
            symbol="🚀"
          ></Box>
          <Box
            title="3800%"
            subtitle="Average price growth rate across our clients"
            symbol="🌕"
          ></Box>
          <Box
            title="17x"
            subtitle="Increase in client's community members on average"
            symbol="👥"
          ></Box>
        </div>
        <div className="h-72 flex flex-col mt-24 items-center pt-12  text-center  w-screen    bg-space ">
          <div className={lili.className}>
            <div id={id} className="text-white font-thin text-3xl">
              Trusted by well-known projects
            </div>
          </div>
          <div className={rowdie.className}>
            <div className="text-white font-thin text-xl pt-4">
              These and other crypto projects have worked with us to get their
              token to the moon.
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex w-1/2 md:w-1/3 justify-between py-4 md:py-8">
              <Image
                src={babydoge}
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              ></Image>
              <Image
                src={milady}
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              ></Image>
              <Image
                src={pepe}
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              ></Image>
              <Image
                src={shiba}
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              ></Image>
              <Image
                src={floki}
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
