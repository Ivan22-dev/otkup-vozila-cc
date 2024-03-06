import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Media, Form, Button } from "reactstrap";

const Footer = () => {
  const socials = [
    { icon: "mdi mdi-facebook", link: "https://www.facebook.com/profile.php?id=61557075301131" },
    { icon: "mdi mdi-instagram", link: "https://www.instagram.com/otkupcc/" },
  ];

  return (
    <React.Fragment>
      <footer className="bg-footer">
        <Container>
          <Row className="py-5">
            <Col lg={3}>
              <div className="mt-2">
                <h6 className="text-white f-12">Pronađite nas na ↓</h6>

                <div className="">
                  <ul className="list-inline footer-social mb-0">
                    {socials.map((social, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to={social.link} className="rounded" target="_blank">
                          <i className={social.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
