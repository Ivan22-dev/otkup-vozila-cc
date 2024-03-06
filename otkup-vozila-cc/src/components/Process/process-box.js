import React from "react";
import { Col } from "reactstrap";

const ProcessBox = ({ processes }) => {
  return (
    <>
      {processes.map((process, key) => (
        <Col
          key={key}
          lg={3}
          xs={9}
          md={4}
          className={process.id !== "04" ? "progress-border" : ""}
          style={{ zIndex: "10" }}
        >
          <div className="text-center">
            <div className="progress-count text-white mt-4">
              <h3>{process.id}</h3>
            </div>

            <div className="progress-content bg-white mt-5 rounded p-4">
              <h5 className="f-18">{process.title}</h5>
              <p className="text-muted mb-0">{process.desc}</p>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default ProcessBox;
