import React from "react";
import ArtLineUp from "../Components/Home/ArtLineUp";
import Release from "../Components/Home/Release";
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
    </>
  );
};

export default Home;
