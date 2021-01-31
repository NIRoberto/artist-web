import React from "react";
import Footer from "../Components/Footer";
import ArtLineUp from "../Components/Home/ArtLineUp";
import Release from "../Components/Home/Release";
import Spotlight from "../Components/Home/Spotlight";
import TrendingAlbum from "../Components/Home/TrendingAlbum";
import NavBar from "../Components/NavBar";
import SubNav from "../Components/SubNav";

const Home = () => {
  return (
    <>
      <NavBar />
      <SubNav />
      <ArtLineUp />
      <Release />
      <TrendingAlbum />
      <Spotlight />
      <Footer />
    </>
  );
};

export default Home;
