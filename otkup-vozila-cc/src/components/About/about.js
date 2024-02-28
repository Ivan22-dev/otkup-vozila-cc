import React, { useState } from "react";
import { Container, Row } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";
import WhatsappButton from "../buttons/whatsappButton";
import PhoneButton from "../buttons/phoneButton";

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
          <SectionTitle title="OTKUP SVIH VRSTA VOZILA" />

          <Row className="mt-5 pt-2">
            <AboutBox data={data} />
          </Row>
        </Container>
        <Row className="text-center justify-content-center overflow-hidden">
          <WhatsappButton phoneNumber={"385957483524"} />
          <PhoneButton phoneNumber={"385957483524"} />
        </Row>
      </section>

      {/* <BestSkills /> */}
    </React.Fragment>
  );
};

export default About;
