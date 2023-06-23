import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });


export default function Card({logo, title,price}){
    return(
        <div className="flex flex-col max-w-[320px] py-4 ">
            <div className={roboto.className}>
            <div className="bg-[#F5FAFE] border border-black h-60 w-full rounded-lg  justify-center items-center flex p-12">
                <Image src={logo} ></Image>
            </div>
            <div className="text-black py-2 text-base">{title}</div>
            <div className="text-black py-2 text-base">{price}</div>
            <div className="w-full rounded-lg hover:scale-105 mt-8 bg-blue-600 h-12 flex justify-center cursor-pointer items-center text-white">Learn More</div>
        </div></div>
    )
}