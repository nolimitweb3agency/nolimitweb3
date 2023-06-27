import Card from "../components/Card";

import ws from "../public/assets/ws.png";

import sol from "../public/assets/sol.png";
import {Rowdies } from "next/font/google";

const rowdie = Rowdies({ weight: "400", subsets: ["latin"] });


export default function Development() {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  justify-center  w-screen h-full ">

        <div className="flex flex-col items-start">
          <div className={rowdie.className}>
        <div className="text-white text-4xl py-8 font-bold ">Development</div></div>
        <div className="flex flex-wrap gap-4  justify-center  ">
          <Card
            logo={sol}
            title="Solidity smart contract development (BEP20 / ERC20) (Fork / Add custom) [2-5 days]"
            price="$1,700"
          ></Card>
          <Card
            logo={sol}
            title="Solidity smart contract development service (BEP20 / ERC20) (Fully custom) [2-5 days]"
            price="$3,600"
          ></Card>
          <Card
            logo={ws}
            title="Crypto website design & development service (Landing page)"
            price="$1,500"
          ></Card>
          <Card
            logo={ws}
            title="Crypto website design & development service (2 pages)"
            price="$2,300"
          ></Card>
          
        </div>
      </div></div>
    </div>
  );
}
