import Card from "../components/Card";
import cmc from "../public/assets/cmc.png";
import gecko from "../public/assets/gecko.png";
import cry from "../public/assets/cry.png";
import tw from "../public/assets/tw.png";
import dex from "../public/assets/dex.png";


export default function TrendingServices() {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  justify-center  w-screen h-full ">

        <div className="flex flex-col items-start">
        <div className="text-black text-4xl py-8 font-bold pl-24">Trending</div>
        <div className="flex flex-wrap gap-4  justify-center  ">
          <Card
            logo={tw}
            title="Twitter word or hashtag trending service (Worlwide) [4 hours minimum]"
            price="$5,500"
          ></Card>
          <Card
            logo={gecko}
            title="CoinGecko trending service (Search bar) [Top 1-5] [1 or 24 hours]"
            price="$150"
          ></Card>
           <Card
            logo={gecko}
            title="CoinGecko trending service (Most viewed) [Top 1-5] [48 hours]"
            price="$1,500"
          ></Card>
          <Card
            logo={cmc}
            title="CoinMarketCap trending service (Most viewed) [Top 1-3 or 1-6] [48 hours]"
            price="$2,500"
          ></Card>
          <Card
            logo={cmc}
            title="CoinMarketCap trending service (Search bar) [Top 1-30] [24 hours]"
            price="$5,000"
          ></Card>
          <Card
            logo={cmc}
            title="CoinMarketCap trending service (Price prediction) [Top 1-6]"
            price="$21,500"
          ></Card>
          <Card
            logo={cry}
            title="Crypto.com trending service (Search bar) [Top 1-5] [24 hours]"
            price="$400"
          ></Card>
          <Card
            logo={dex}
            title="DexTools trending service (ETH, BSC, POLY, FTM, AVAX) [Top 1-10 or 1-3] [24 hours]"
            price="$6,000"
          ></Card>
         
        </div>
      </div></div>
    </div>
  );
}
