import { Lilita_One } from "next/font/google";
const lili = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function Box({ title, subtitle, symbol }) {
  return (
    <div className="bg-[#FCFFA7] w-full md:w-1/3 hover:scale-110 py-6 md:mx-4 md:py-8 my-4 md:my-8 px-12 rounded-xl">
      <div className={lili.className}>
        <div className="flex w-full justify-between">
          <div className="text-4xl text-[#1D31FF] font-bold">{title}</div>
          <div className="text-3xl">{symbol}</div>
        </div>
        <div className="text-md text-black font-thin">{subtitle}</div>
      </div>
    </div>
  );
}
