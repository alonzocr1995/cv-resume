import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Background from "../components/Background";
import ContactMe from "../components/ContactMe/ContactMe";
import HomeTop from "../components/Home/HomeTop";
import Porfolio from "../components/Porfolio/Porfolio";
const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Porfolio - Luis Alonzo Ramirez</title>
        <meta name="description" content="I build things for the web" />
      </Head>
      <Background />
      <HomeTop />
      <AboutMe />
      <Porfolio />
      <ContactMe />
    </Fragment>
  );
};

export default Home;
