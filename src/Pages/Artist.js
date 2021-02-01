import React from "react";
import All from "../Components/artist/All";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SubNav from "../Components/SubNav";

const Artist = () => {
  return (
    <div>
      <NavBar />
      <SubNav />
      <All />
      <Footer />
    </div>
  );
};

export default Artist;
