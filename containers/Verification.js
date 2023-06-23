import Card from "../components/Card";
import cmc from "../public/assets/cmc.png";
import tiktok from "../public/assets/tiktok.png";
import tg from "../public/assets/tg.png";
import insta from "../public/assets/insta.png";
import tw from "../public/assets/tw.png";


export default function Verification() {
  return (
    <div classname="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  justify-center  w-screen h-full ">
        <div className="flex flex-col items-start">
        <div className="text-black text-4xl py-8 font-bold ">Verification</div>
        <div className="flex flex-wrap gap-4  justify-center  ">
          <Card
            logo={insta}
            title="Instagram verification service (Blue tick/checkmark badge) [No login] [2-3 weeks]"
            price="$4,000"
          ></Card>
          <Card
            logo={tiktok}
            title="TikTok verification service (Blue tick/checkmark badge) [No login] [2-3 weeks]"
            price="$4,000"
          ></Card>
          <Card
            logo={tw}
            title="Twitter verification service (Blue tick/checkmark badge) [No login] [ in 24 hours]"
            price="$10,000"
          ></Card>
          
        </div>
      </div></div>
    </div>
  );
}
