import Head from "next/head";
import { Inter } from "next/font/google";
import Title from "@/components/languageSelect/Title";
import Characters from "@/components/languageSelect/Characters";
import Callout from "@/components/languageSelect/Callout";
import Footer from "@/components/languageSelect/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Make Studios demo</title>
        <meta name="description" content="demo for Make Studios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Callout />
      <Characters />
      <Footer />
    </>
  );
}
