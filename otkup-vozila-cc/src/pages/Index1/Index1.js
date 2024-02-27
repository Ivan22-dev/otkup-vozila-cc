import React, { useState, useEffect, Suspense } from "react";
import Njuskalo from "../../components/Njuskalo/Njuskalo";

const NavbarPage = React.lazy(() => import("../../components/Navbar/Navbar_Page"));
const Section = React.lazy(() => import("./section"));
const About = React.lazy(() => import("../../components/About/about"));
const Process = React.lazy(() => import("../../components/Process/process"));
const Portfolio = React.lazy(() => import("../../components/Portfolio/portfolio"));
const Counter = React.lazy(() => import("../../components/Counter/counter"));
const OurTeam = React.lazy(() => import("../../components/Team/our-team"));
const Footer = React.lazy(() => import("../../components/Footer/footer"));
const Testimonials = React.lazy(() => import("../../components/Testimonials/testimonials"));
const Pricing = React.lazy(() => import("../../components/Pricing/pricing"));
const Blog = React.lazy(() => import("../../components/Blog/blog"));
const Cta = React.lazy(() => import("../../components/Cta/Cta"));
const GetInTouch = React.lazy(() => import("../../components/GetInTouch/GetInTouch"));

const Index1 = () => {
  const [navItems] = useState([
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "about", navheading: "About" },
    { id: 3, idnm: "portfolio", navheading: "Portfolio" },
    { id: 4, idnm: "team", navheading: "Team" },
    { id: 5, idnm: "testimonial", navheading: "Testimonial" },
    { id: 6, idnm: "pricing", navheading: "Pricing" },
    { id: 7, idnm: "blog", navheading: "Blog" },
    { id: 8, idnm: "contact", navheading: "Contact" },
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

        <Njuskalo />
        {/* Importing portfolio */}
        <Portfolio />

        {/* Importing counter */}
        <Counter />

        {/* Importing team */}
        <OurTeam />

        {/* Importing testimonials */}
        <Testimonials />

        {/* Importing pricing */}
        <Pricing />

        {/* Importing blog */}
        <Blog />

        {/* Importing cta */}
        <Cta />

        {/* Importing get in touch */}
        <GetInTouch />

        {/* Importing footer */}
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Index1;
