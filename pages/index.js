import Head from "next/head";
import Cards from "../components/CardSection/Cards";
import InputHero from "../components/InputHero";
import Navbar from "../components/Navbar";
import { Search } from "../components/Search";
import CTA from "../components/CTA";

export default function Home() {



  return (
    <div>
      <Head>
        <title>Medlabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="grid place-items-center h-90 text-3xl ">
        <div>
          MedLabs
          <Search />
        </div>
      </div>
      <TestList /> */}
      <InputHero />
      <Cards />


      <CTA />
    </div>
  );
}
