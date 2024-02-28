import React, { useState, useEffect, Suspense } from "react";
import Njuskalo from "../../components/Njuskalo/Njuskalo";

const NavbarPage = React.lazy(() => import("../../components/Navbar/Navbar_Page"));
const Section = React.lazy(() => import("./section"));
const About = React.lazy(() => import("../../components/About/about"));
const Process = React.lazy(() => import("../../components/Process/process"));
const Footer = React.lazy(() => import("../../components/Footer/footer"));
const GetInTouch = React.lazy(() => import("../../components/GetInTouch/GetInTouch"));

const Index1 = () => {
  const [navItems] = useState([
    { id: 1, idnm: "home", navheading: "Početna" },
    { id: 2, idnm: "about", navheading: "O nama" },
    { id: 3, idnm: "contact", navheading: "Kontakt" },
  ]);
  const [imglight, setImgLight] = useState(true);
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const scrollNavigation = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavClass("nav-sticky");
        setImgLight(false);
      } else {
        setNavClass("");
        setImgLight(true);
      }
    };

    window.addEventListener("scroll", scrollNavigation);

    return () => {
      window.removeEventListener("scroll", scrollNavigation);
    };
  }, []);

  const Loader = () => (
    <div id="preloader">
      <div id="status">
        <div className="spinner">Loading...</div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        {/* Importing Navbar */}
        <NavbarPage navItems={navItems} navClass={navClass} imglight={imglight} />

        {/* Importing section */}
        <Section />

        {/* Importing about us */}
        <About />

        {/* Importing process */}
        <Process />

        {/* <Njuskalo /> */}

        {/* Importing get in touch */}
        <GetInTouch />

        {/* Importing footer */}
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Index1;
