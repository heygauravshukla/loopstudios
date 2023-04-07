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

      <div>
        <div>
          <Header />
        </div>
        <div>
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