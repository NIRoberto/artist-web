import React from "react";
import All from "../Components/Album/All";
import SubNav from "../Components/Album/SubNav";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Album = () => {
  return (
    <div>
      <NavBar />
      <SubNav />
      <All />
      <Footer />
    </div>
  );
};

export default Album;
