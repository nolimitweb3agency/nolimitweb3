import Image from "next/image";
import { Roboto } from "next/font/google";
import { Rowdies } from "next/font/google";

const rowdie = Rowdies({ weight: "400", subsets: ["latin"] });

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Card({ logo, title, price }) {
  return (
    <div className="flex flex-col h-[450px]  max-w-[320px] p-4 rounded-xl bg-[#343434]">
      <div className={roboto.className}>
        
        <div className="flex flex-col justify-center">
          <div className="bg-gray-300 h-60 w-full rounded-lg  justify-center items-center flex p-12">
            <Image src={logo}></Image>
          </div>
          <div className="h-[135px]">
          <div className="text-white py-2 p-4 text-base">{title}</div>
          <div className="text-white py-2 p-4 text-base">{price}</div></div>
        </div>
        
          <div className="w-full mt-auto rounded-lg hover:scale-105  bg-blue-600 h-12 flex justify-center cursor-pointer items-center text-white">
            Learn More
          </div>
    
      </div>
    </div>
  );
}
