import React from "react";
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

// Import Section Title
import SectionTitle from "../common/section-title";

// Import Images
import map from "../../assets/images/features/map.png";

const GetInTouch = () => {
  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <SectionTitle title="Kako do nas" desc="" />
          <Row className="mt-5 pt-2">
            <Col lg={5}>
              <div className="contact-info">
                <div style={{ backgroundImage: `url(${map})`, backgroundRepeat: "no-repeat" }}>
                  <Media>
                    <i className="mdi mdi-map-marker text-primary h4"></i>
                    <Media body className=" ml-4">
                      <a className="text-muted">
                        Put Duge Njive II 14, 21212 Kaštel Sućurac
                        <br />
                        Splitsko-dalmatinska, Hrvatska
                      </a>
                    </Media>
                  </Media>

                  <Media className="mt-4">
                    <i className="mdi mdi-phone text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        <p className="text-muted" style={{ margin: "0" }}>
                          Nazovi na:
                        </p>
                        <a className="text-muted" href="tel:385957483524">
                          091 501 6957
                        </a>
                      </p>
                    </Media>
                  </Media>

                  <Media className="media mt-4">
                    <i className="mdi mdi-calendar-clock text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">Svaki dan 0-24</p>
                    </Media>
                  </Media>

                  <Media className="media mt-4">
                    <i className="mdi mdi-email text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">Email: otkupvozilacc@gmail.com</p>
                    </Media>
                  </Media>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="custom-form">
                <div id="message"></div>
                <AvForm name="contact-form" id="contact-form">
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Ime i prezime"
                          errorMessage="Unesite ime i prezime"
                          validate={{ required: { value: true } }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          errorMessage="Unesite mail"
                          validate={{
                            required: { value: true },
                            email: { value: true },
                          }}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="number"
                          id="number"
                          type="number"
                          className="form-control"
                          placeholder="Vaš broj"
                          errorMessage="Unesite Vaš broj"
                          validate={{
                            required: { value: true },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="5"
                          className="form-control"
                          placeholder="Poruka"
                        ></textarea>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <div className="mt-3">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          value="Send Message"
                        />
                        <div id="simple-msg"></div>
                      </div>
                    </Col>
                  </Row>
                </AvForm>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default GetInTouch;
