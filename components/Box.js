
import { Lilita_One } from "next/font/google";
const lili = Lilita_One({ weight: "400", subsets: ["latin"] });


export default function Box({title,subtitle}){
    return(
        <div className="bg-blue-200 w-full md:w-1/3 py-6 md:mx-4 md:py-8 my-4 md:my-8 px-12 rounded-xl">
            <div className={lili.className}>
                <div className="text-4xl text-blue-600 font-bold">{title}</div>
                <div className="text-md text-black font-thin">{subtitle}</div></div>
        </div>
    )
}