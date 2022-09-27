import React from "react";
import "./../../Assets/css/Xyshma-Defaults.css";

// GENERAL PURPOSE COMPONENTS
import MainNav from "./../../Components/Navbar/Index";
import Footer from "./../../Components/Footer/Footer";

// HOME PAGE COMPONENTS
import Header from "./Header";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Header />
        <WhyUs />
        <Services />
        <Portfolio />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
