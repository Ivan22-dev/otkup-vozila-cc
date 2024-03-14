import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";
import PhoneButton from "../../components/buttons/phoneButton";
import WhatsappButton from "../../components/buttons/whatsappButton";
import ViberButton from "../buttons/viberButton";
const Process = () => {
  const processes = [
    {
      id: "01",
      desc: "Detaljno slikajte svoje vozilo izvana, te unutrašnjost vozila.",
    },
    { id: "02", desc: ". Kontaktirajte nas, recite nam sve o vozilu i pošaljite nam fotografije." },
    { id: "03", desc: "Nakon dogovora o cijeni otkupa vozila, odmah se upućujemo prema Vama." },
  ];

  return (
    <React.Fragment>
      <section className="bg-progress section">
        <div className="bg-overlay"></div>
        <Container>
          <SectionTitle title="OTKUP U 3 KORAKA" isLight={true} />
          <Row className="pt-2 justify-content-center">
            <ProcessBox processes={processes} />
          </Row>
          <Row className="mt-5 pt-2">
            <div style={{ zIndex: "990", display: "flex", justifyContent: "center" }}>
              <WhatsappButton phoneNumber="385915016957" />
              <PhoneButton phoneNumber="385915016957" />
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
