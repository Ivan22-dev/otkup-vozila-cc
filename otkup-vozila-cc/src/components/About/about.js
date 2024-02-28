import React, { useState } from "react";
import { Container, Row } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";

const About = () => {
  const [data] = useState([
    {
      icon: "mdi mdi-phone",
      title: "Dostupni 0-24",
      desc: "Uvijek nas možete kontaktirati. Dostupni smo svaki dan, cijeli dan! ",
    },
    {
      icon: "mdi mdi-map",
      title: "Cijela Hrvatska",
      desc: "Otkup svih vrsta vozila radimo po teritoriju cijele Hrvatske!",
      isLight: true,
    },
    {
      icon: "mdi mdi-car",
      title: "Dolazak odmah",
      desc: "Po Vašem pozivu i dogovoru oko cijene odmah se upućujemo prema Vama, gdje god se Vi nalazili!",
    },
    // {
    //   icon: "mdi mdi-cash",
    //   title: "Isplata odmah",
    //   desc: "Isplatu Vašeg vozila vršimo odmah nakon pregleda vozila!",
    // },
  ]);

  return (
    <React.Fragment>
      <section className="section" id="about">
        <Container>
          <SectionTitle
            title="O nama"
            subtitle="TKO SMO MI?"
            desc="Comfort Cars je tvrtka koja se bavi uvozom i prodajom rabljenih vozila iz EU"
          />

          <Row className="mt-5 pt-2">
            <AboutBox data={data} />
          </Row>
        </Container>
      </section>

      {/* <BestSkills /> */}
    </React.Fragment>
  );
};

export default About;
