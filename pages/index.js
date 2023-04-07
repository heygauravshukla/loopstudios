import Head from "next/head";

import FeaturedHero from "@/components/FeaturedHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>loopstudios</title>
        <meta name="description" content="loopstudios landing page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
      </Head>

      <div className="bg-[url('/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat text-white relative min-h-screen">
        <div className="wrapper py-6">
          <Header />
        </div>
        <div className="wrapper absolute inset-0 grid place-items-center z-10">
          <Hero />
        </div>
      </div>

      <main>
        <FeaturedHero />
        <Showcase />
      </main>

      <Footer />
    </>
  )
}