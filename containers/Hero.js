import { Indie_Flower } from "next/font/google";
import Box from "../components/Box";

const indie = Indie_Flower({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex-col flex items-center text-xl pt-16 md:pt-36  md:justify-start  w-screen h-screen   ">
        <div className={indie.className}>
          <div className="text-black text-center text-4xl sm:text-6xl md:px-0 px-16">
            We will make your token go viral 🚀
          </div>
        </div>

        <div className={indie.className}>
          <div className="text-center  text-black text-xl sm:text-2xl px-4  pt-8">
            Welcome to Marketing — The #1 crypto marketing agency known for
            aggressive crypto shill campaigns.
          </div>
        </div>
        <div className="md:flex w-full md:px-24 justify-center pt-4 px-4 md:justify-between ">
          
          <Box title="$48M" subtitle="Average market cap at ATH of our clients"></Box>
          <Box title="3800%" subtitle="Average price growth rate across our clients"></Box>
          <Box title="17x" subtitle="Increase in client's community members on average"></Box>
        </div>
      </div>
    </div>
  );
}
