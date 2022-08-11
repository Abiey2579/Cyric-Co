import React from "react";
import "./../../Assets/css/Xyshma-Defaults.css";

// CUSTOM COMPONENTS
import MainNav from "./../../Components/Navbar/Index";
import Header from "./Header";
import Services from "./Services";
// import Members from "./Members";
import Footer from "./../../Components/Footer/Footer";
import WhyUs from "./WhyUs";
import Mission from "./Mission";

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Header />
        <WhyUs />
        <Services />
        {/* <Members /> */}
        <Mission />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
