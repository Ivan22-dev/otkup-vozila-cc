import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import njuskalo from "../../assets/images/features/njuskalo.png";
const Njuskalo = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <span style={{ zIndex: "990" }}>
            <img
              loading="lazy"
              width="410"
              height="134"
              src={njuskalo}
              alt="njuskalo-image"
              title="njuskalo"
              sizes="(max-width: 410px) 100vw, 410px"
              className="njuskalo"
            />
          </span>
        </Col>
        <Col className="mt-5">
          <Col>
            <span style={{ fontWeight: "bold", wordWrap: " break-word", width: "10rem" }}>
              Nalazimo se i na Njuškalu! Slobodno zavirite u našu trgovinu na Njuškalo portalu i provjerite što sve
              imamo u ponudi.
            </span>
          </Col>
          <Col>
            <Button
              color="warning"
              className="btn btn-outline-white mt-2 mr-3"
              style={{ zIndex: "990" }}
              onClick={() => window.open("https://www.njuskalo.hr/trgovina/seamood", "_blank")}
            >{`Idi na Njuškalo`}</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Njuskalo;
