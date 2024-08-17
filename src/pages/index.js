
import Features from "@/components/features";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import GetStarted from "@/components/getStarted";
import Head from "next/head";



export default function Home(){
  return (
    <>
      <Header/>
      <Head>
        <title>DailyDSA</title>
        <link rel="icon" href="/dsalogo.png" />
      </Head>
      <main className="space-y-40 mb-40">
        <HeroSection/>
        <Features/>
        <Stats/>
        <GetStarted/>
        <Testimonials/>
      </main>
      <Footer/>
    </>
  )
}

