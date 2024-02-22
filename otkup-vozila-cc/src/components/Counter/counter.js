import React from 'react';
import { Container, Row, Col } from "reactstrap";

// Import CounterBox
import CounterBox from "./counter-box";

// Import Images
import img2 from "../../assets/images/features/img-2.jpg";

const Counter = () => {
    const counters1 = [
        { icon: "mdi mdi-heart", title: "Happy Clients", end: 485 },
        { icon: "mdi mdi-layers", title: "Projects Completed", end: 536 }
    ];

    const counters2 = [
        { icon: "mdi mdi-cloud-download", title: "Files Downloaded", end: 1662 },
        { icon: "mdi mdi-code-not-equal-variant", title: "Lines Of Code", end: 14652 }
    ];

    return (
        <React.Fragment>
            <section className="section bg-light">
                <Container>
                    <Row className="vertical-content">
                        <Col lg={6}>
                            <div className="counter-box">
                                <Col lg={12}>
                                    <h4>Our Achievements</h4>
                                    <p className="text-muted mt-2">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>

                                    <div className="mt-4">
                                        <Row id="counter">
                                            <CounterBox counters={counters1} />
                                        </Row>

                                        <Row>
                                            <CounterBox counters={counters2} />
                                        </Row>
                                    </div>

                                </Col>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="img">
                                <img src={img2} className="img-fluid box-shadow-lg rounded" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Counter;
