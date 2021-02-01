import React from "react";
import ContactPage from "../Components/contact/contact";
import SubNav from "../Components/contact/SubNav";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

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
