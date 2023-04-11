import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedHero from "@/components/FeaturedHero";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>loopstudios</title>
        <meta name="description" content="loopstudios landing page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
      </Head>

      <div className={styles.intro}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        <div className={styles.heroWrapper}>
          <Hero />
        </div>
      </div>

      <main className={styles.main}>
        <FeaturedHero />
        <Showcase />
      </main>

      <Footer />
    </>
  )
}