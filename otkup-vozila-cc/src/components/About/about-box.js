import React from "react";
import { Col } from "reactstrap";
import WhatsappButton from "../buttons/whatsappButton";
import PhoneButton from "../buttons/phoneButton";

const AboutBox = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((dataItem, key) => (
        <Col lg="4" key={key}>
          <div
            className={
              dataItem.isLight === true
                ? "about-box box-shadow rounded text-center mt-4"
                : "about-box bg-light rounded text-center mt-4"
            }
          >
            <i className={dataItem.icon + " text-primary"}></i>
            <h5 className="f-18 mt-3">{dataItem.title}</h5>
            <div className="lighlight-border mt-3"></div>
            <p className="text-muted mt-3 mb-0">{dataItem.desc}</p>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default AboutBox;
