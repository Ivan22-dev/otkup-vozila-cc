import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    Button
} from "reactstrap";
import WhatsappButton from "../../components/buttons/whatsappButton";
import PhoneButton from '../../components/buttons/phoneButton';

// Importing Modal
import ModalSection from '../../components/common/ModalSection';

// Import Images
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

const Section = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const carouselRef = useRef(null);

    const items = [
        { id: 1, image: bg1 },
        { id: 2, image: bg2 },
        { id: 3, image: bg3 }
    ];


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const onExiting = () => {
        setAnimating(true);
    }

    const onExited = () => {
        setAnimating(false);
    }

    const childRef = useRef();

    return (
        <React.Fragment>
            <section className="home-section" id="home">
                <Carousel
                    ref={carouselRef}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    interval={false}
                    ride="carousel"
                    slide={true}
                >
                    {items.map(item => (
                        <CarouselItem
                            key={item.id}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
                            <div className="bg-overlay"></div>
                            <div className="home-center">
                                <div className="home-desc-center">
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col md="12">
                                                <div className="home-content text-white">
                                                    <div className="watch-video mt-5">
                                                    </div>
                                                    <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Otkup vozila CC</h5>
                                                    <h1 className="title mt-4 text-white text-uppercase">OTKUP RABLJENIH VOZILA </h1>
                                                    <div className="pt-4 mt-1">
                                                         <WhatsappButton phoneNumber="385957483524"/>
                                                        <PhoneButton phoneNumber="385957483524"/> 
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                    <CarouselControl direction="prev" onClickHandler={previous} />
                    <CarouselControl direction="next" onClickHandler={next} />
                </Carousel>

                {/* Render ModalSection Component for Modal */}
                {/* <ModalSection ref={childRef} channel='vimeo' videoId='99025203' /> */}
            </section>
        </React.Fragment>
    );
}

export default Section;
