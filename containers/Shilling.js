import Card from "../components/Card";

import tg from "../public/assets/tg.png";

import tw from "../public/assets/tw.png";
import { Rowdies } from "next/font/google";

const rowdie = Rowdies({ weight: "400", subsets: ["latin"] });


export default function Shilling() {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  justify-center  w-screen h-full ">
        <div className="flex flex-col items-start">
          <div className={rowdie.className}>
        <div className="text-white text-4xl py-8 font-bold ">Shilling</div></div>
        <div className="flex flex-wrap gap-4  justify-center  ">
          <Card
            logo={tw}
            title="10 Tweets for project promotion (Global)"
            price="$2,000"
          ></Card>
          <Card
            logo={tw}
            title="10 Tweets for Token Shill (Global)"
            price="$2,000"
          ></Card>
          <Card
            logo={tw}
            title="1 Tweet per 20 influencers (80K follow avg)"
            price="$5,000"
          ></Card>
          <Card
            logo={tg}
            title="10 Telegram Posts Token Shill (Global)"
            price="$3,000"
          ></Card>    
        </div>
      </div></div>
    </div>
  );
}
