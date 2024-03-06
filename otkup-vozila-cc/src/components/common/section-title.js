import React from "react";
import { Row, Col } from "reactstrap";

const SectionTitle = ({ title, subtitle, desc, isLight }) => {
  return (
    <React.Fragment>
      <Row>
        <Col lg="12" style={{ zIndex: "10" }}>
          <div className="header-title text-center">
            {subtitle && <p className="text-uppercase text-muted mb-2">{subtitle}</p>}
            <h2 className={isLight === true ? "text-uppercase text-white" : "text-uppercase"}>{title}</h2>
            <div className="title-border mt-3"></div>
            <p className={isLight === true ? "title-desc text-white-50 mt-3" : "title-desc text-muted mt-3"}>{desc}</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SectionTitle;
