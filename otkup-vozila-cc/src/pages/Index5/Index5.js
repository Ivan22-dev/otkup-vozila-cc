import React, { useState, useEffect, Suspense } from "react";
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import About from "../../components/About/about";
import Process from "../../components/Process/process";
import Footer from "../../components/Footer/footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Index5 = () => {
  const [navItems] = useState([
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "about", navheading: "About" },
    { id: 3, idnm: "contact", navheading: "Contact" },
  ]);
  const [pos, setPos] = useState(document.documentElement.scrollTop);
  const [imglight, setImglight] = useState(true);
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const scrollNavigation = () => {
      const scrollup = document.documentElement.scrollTop;
      if (scrollup > pos) {
        setNavClass("nav-sticky");
        setImglight(false);
      } else {
        setNavClass("");
        setImglight(true);
      }
    };

    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, [pos]);

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">Loading...</div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Suspense fallback={Loader()}>
        {/* Importing Navbar */}
        <NavbarPage navItems={navItems} navClass={navClass} imglight={imglight} />

        {/* Importing section */}
        <Section />

        {/* Importing about us */}
        <About />

        {/* Importing process */}
        <Process />

        {/* Importing get in touch */}
        <GetInTouch />

        {/* Importing footer */}
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Index5;
