import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../containers/Hero'
import ListingServices from '../../containers/ListingServices'
import TrendingServices from '../../containers/TrendingServices'
import SentimentBoost from '../../containers/Sentiment'
import Development from '../../containers/Development'
import Shilling from '../../containers/Shilling'
import Verification from '../../containers/Verification'
import Footer from '../../containers/Footer'
import Tweets from '../../containers/Tweets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className="flex max-w-full min-h-screen flex-col bg-cover bg-gradient-to-r from-[#111111] from-20% via-[#222222] via-40% to-[#333333] to-90%"    >
     <Hero id="#clients"></Hero>
     <Tweets></Tweets>
     <ListingServices id="#services"></ListingServices>
     <TrendingServices></TrendingServices>
     <SentimentBoost></SentimentBoost>
     <Shilling></Shilling>
     <Development></Development>
     <Verification></Verification>
     <Footer></Footer>
    </main>
  )
}
