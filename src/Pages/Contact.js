import React from "react";
import ContactPage from "../Components/contact/contact";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SubNav from "../Components/SubNav";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <SubNav />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
