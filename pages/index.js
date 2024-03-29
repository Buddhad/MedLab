import Head from "next/head";
import Cards from "../components/CardSection/Cards";
import InputHero from "../components/InputHero";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Medlabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InputHero />
      <Cards />
      <CTA />
    </div>
  );
}
