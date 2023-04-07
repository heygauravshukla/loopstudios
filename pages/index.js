import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>loopstudios</title>
        <meta name="description" content="loopstudios landing page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}