import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Importing Modal
import ModalSection from '../../components/common/ModalSection';
import Video from "./Video";

const Section = () => {
    const callModal = () => {
        // Accessing child component method through useRef hook
        childRef.current.openModal();
    };

    // Create a ref to access child component method
    const childRef = React.useRef();

    return (
        <React.Fragment>
            <section className="home-half bg-home-video bg-primary" id="home">
                <Video />
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={12}>
                                    <div className="home-content text-white">
                                        <div className="watch-video mt-5">
                                            <Link onClick={callModal} to="#" className="video-play-icon-trigger text-white">
                                                <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                            </Link>
                                        </div>
                                        <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                                        <h1 className="title mt-4 text-white text-uppercase">We're Giving Design <br /> Solution & Idea.</h1>
                                        <div className="pt-4 mt-1">
                                            <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                            <Link to="#" className="btn btn-primary ml-1 mt-2">Purchase Now</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* Render ModalSection Component for Modal */}
                            <ModalSection ref={childRef} channel='vimeo' videoId='99025203' />
                        </Container>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Section;
