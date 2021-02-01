import React from "react";
import All from "../Components/artist/All";
import SubNav from "../Components/artist/SubNav";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

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
