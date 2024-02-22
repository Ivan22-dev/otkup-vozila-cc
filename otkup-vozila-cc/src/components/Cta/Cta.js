import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Cta = () => {
    return (
        <React.Fragment>
            <section className="section bg-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2 className="text-white text-center">Become a part of Xeril business community today</h2>
                                <p className="text-white text-center mt-3">Molestias excepturi sint occaecati cupiditate non provident</p>
                                <div className="text-center mt-4">
                                    <Link to="#" className="btn btn-primary mt-2">Get Started</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Cta;
