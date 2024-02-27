import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";
import PhoneButton from "../../components/buttons/phoneButton";
import WhatsappButton from "../../components/buttons/whatsappButton";
const Process = () => {
  const processes = [
    { id: "01", desc: "Detaljno slikajte svoje vozilo izvana, te unutrašnjost vozila." },
    { id: "02", desc: "Kratka povijest vozila. Kilometri i servisi." },
    { id: "03", desc: "Slanje navedenog na Whatsapp, Viber ili nas jednostavno kontaktirajte." },
  ];

  return (
    <React.Fragment>
      <section className="bg-progress section">
        <div className="bg-overlay"></div>
        <Container>
          <SectionTitle
            title="KAKO SAZNATI CIJENU"
            // desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
            isLight={true}
          />
          <Row className="mt-5 pt-2 justify-content-center">
            <ProcessBox processes={processes} />
          </Row>
          <Row className="mt-5 pt-2 justify-content-center">
            <div style={{ zIndex: "990" }}>
              <WhatsappButton phoneNumber="385957483524" />
              <PhoneButton phoneNumber="385957483524" />
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
