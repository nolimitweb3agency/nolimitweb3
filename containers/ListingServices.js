import Card from "../components/Card";
import cmc from "../public/assets/cmc.png";
import gecko from "../public/assets/gecko.png";
import etherscan from "../public/assets/etherscan.png";
import bscscan from "../public/assets/bscscan.png";

export default function ListingServices({id}) {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  justify-center  w-screen h-full ">
        <div id={id} className="text-black text-4xl py-8 font-bold ">Our Services</div>

        <div className="flex flex-col items-start">
        <div className="text-black text-4xl py-8 font-bold ">Listing</div>
        <div className="flex flex-wrap gap-4  justify-center  ">
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
        </div>
      </div></div>
    </div>
  );
}
