import React, { useState, useEffect, Suspense } from "react";

const NavbarPage = React.lazy(() => import("../../components/Navbar/Navbar_Page"));
const Section = React.lazy(() => import("./section"));
const About = React.lazy(() => import("../../components/About/about"));
const Process = React.lazy(() => import("../../components/Process/process"));
const Footer = React.lazy(() => import("../../components/Footer/footer"));
const GetInTouch = React.lazy(() => import("../../components/GetInTouch/GetInTouch"));

const Index4 = () => {
  const [navItems, setNavItems] = useState([
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "about", navheading: "About" },
    { id: 3, idnm: "contact", navheading: "Contact" },
  ]);
  const [scrollPosition, setScrollPosition] = useState(document.documentElement.scrollTop);
  const [imglight, setImgLight] = useState(true);
  const [navClass, setNavClass] = useState("");

  const scrollNavigation = () => {
    const scrollup = document.documentElement.scrollTop;
    if (scrollup > scrollPosition) {
      setNavClass("nav-sticky");
      setImgLight(false);
    } else {
      setNavClass("");
      setImgLight(true);
    }
    setScrollPosition(scrollup);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, [scrollPosition]);

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
        <NavbarPage style={{ maxWidth: "100%" }} navItems={navItems} navClass={navClass} imglight={imglight} />

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

export default Index4;
