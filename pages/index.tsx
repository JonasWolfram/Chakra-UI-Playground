import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import WithSubnavigation from "../components/NavBar/WithSubnavigation";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <WithSubnavigation />
    </div>
  );
};

export default Home;
