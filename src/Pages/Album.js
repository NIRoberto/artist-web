import React from "react";
import All from "../Components/Album/All";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SubNav from "../Components/SubNav";

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
