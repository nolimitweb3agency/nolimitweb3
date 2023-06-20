import Card from "../components/Card";
import cmc from "../public/assets/cmc.png";
import gecko from "../public/assets/gecko.png";
import etherscan from "../public/assets/etherscan.png";
import dexs from "../public/assets/dexss.png";
import tw from "../public/assets/tw.png";


export default function SentimentBoost() {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  justify-center  w-screen h-full ">

        <div className="flex flex-col items-start">
        <div className="text-black text-4xl py-8 font-bold ">Sentiment Boost</div>
        <div className="flex flex-wrap gap-4  justify-center  ">
          <Card
            logo={cmc}
            title="CoinMarketCap community voting upvotes (95% Good sentiment result)"
            price="$400"
          ></Card>
          <Card
            logo={gecko}
            title="CoinGecko community voting upvotes (95% Good sentiment result)"
            price="$400"
          ></Card>
          <Card
            logo={dexs}
            title="DEX Screener upvotes (Rocket, fire, poop or red flag emojis)"
            price="$9"
          ></Card>
          <Card
            logo={tw}
            title="Targeted crypto likes, retweets or followers for Twitter (NFT or crypto related)"
            price="$4"
          ></Card>
        </div>
      </div></div>
    </div>
  );
}
