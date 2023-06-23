import Card from "../components/Card";
import cmc from "../public/assets/cmc.png";
import gecko from "../public/assets/gecko.png";
import etherscan from "../public/assets/etherscan.png";
import bscscan from "../public/assets/bscscan.png";
import mexc from "../public/assets/mexc.png";
import gate from "../public/assets/gate.png";
import kucoin from "../public/assets/kucoin.png";

import { Rowdies } from "next/font/google";

const rowdie = Rowdies({ weight: "400", subsets: ["latin"] });

export default function ListingServices({ id }) {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-[600px] sm:pt-[300px] md:pt-48 lg:pt-24 justify-center  w-screen h-full ">
        <div className={rowdie.className}>
          <div className="text-white text-4xl py-24 font-bold ">
            Our Services
          </div>
        </div>
        <div className="flex flex-col items-start py-12">
          <div className={rowdie.className}> 
          <div className="text-white text-4xl py-8 font-bold pl-20">
            Listing
          </div></div>
          <div id={id} className="flex flex-wrap gap-4  justify-center  ">
            <Card
              logo={cmc}
              title="CoinMarketCap fast-track listing service (Expedited) [1-12 hours]"
              price="$3,000"
            ></Card>
            <Card
              logo={gecko}
              title="CoinGecko fast-track listing service (Expedited) [12-24 hours]"
              price="$2,000"
            ></Card>
            <Card
              logo={etherscan}
              title="Etherscan fast-track listing service (Expedited) [12 hours]"
              price="$2,500"
            ></Card>
            <Card
              logo={bscscan}
              title="BscScan fast-track listing service (Expedited) [12 hours]"
              price="$1,500"
            ></Card>
            <Card
              logo={mexc}
              title="MEXC fast-track listing service (Expedited) [12 hours]"
              price="Please Contact Us for Price"
            ></Card>
            <Card
              logo={gate}
              title="GATE.IO fast-track listing service (Expedited) [12 hours]"
              price="Please Contact Us for Price"
            ></Card>
            <Card
              logo={kucoin}
              title="KuCoin fast-track listing service (Expedited) [12 hours]"
              price="Please Contact Us for Price"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
