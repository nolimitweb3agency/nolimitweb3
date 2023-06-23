import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../containers/Hero'
import Projects from '../../containers/Projects'
import ListingServices from '../../containers/ListingServices'
import TrendingServices from '../../containers/TrendingServices'
import SentimentBoost from '../../containers/Sentiment'
import Development from '../../containers/Development'
import Shilling from '../../containers/Shilling'
import Verification from '../../containers/Verification'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className="flex max-w-full min-h-screen flex-col bg-cover bg-[#E4FFFE]"    >
     <Hero id="#clients"></Hero>
     <ListingServices id="#services"></ListingServices>
     <TrendingServices></TrendingServices>
     <SentimentBoost></SentimentBoost>
     <Shilling></Shilling>
     <Development></Development>
     <Verification></Verification>
    </main>
  )
}
