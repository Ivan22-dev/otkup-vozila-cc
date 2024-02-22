import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";

// Import Images
import img1 from "../../assets/images/users/img-1.jpg";
import img2 from "../../assets/images/users/img-2.jpg";
import img3 from "../../assets/images/users/img-3.jpg";

const Clients = () => {
    const [items] = useState([
        { id: 1, image: img1, title: "Jennifer Shapiro", subtitle: "Frontend", desc: "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
        { id: 2, image: img2, title: "Brandon Carney", subtitle: "Designer", desc: "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
        { id: 3, image: img3, title: "William Mooneyhan", subtitle: "Developer", desc: "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words." },
    ]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const onExiting = () => {
        setAnimating(true);
    };

    const onExited = () => {
        setAnimating(false);
    };

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const carouselIndicators = document.getElementsByClassName("carousel-indicators")[0];
        const imgElements = [];
        items.forEach((item, index) => {
            const img = document.createElement('img');
            img.className = "testi-img img-fluid rounded mx-auto d-block";
            img.src = item.image;
            imgElements.push(img);
            carouselIndicators.children[index].appendChild(img);
        });
        return () => {
            imgElements.forEach((img, index) => {
                carouselIndicators.children[index].removeChild(img);
            });
        };
    }, [items]);

    const slides = items.map((item, key) => (
        <CarouselItem
            key={key + 1}
            onExiting={onExiting}
            onExited={onExited}
        >
            <div className="testimonial-box text-center mt-4">
                <div className="testimonial-title p-2 rounded">
                    <p className=" text-white mt-4">{item.desc}</p>
                </div>
                <i className="mdi mdi-format-quote-close text-primary display-3"></i>
                <h5 className="text-white f-18">{item.title}</h5>
                <p className="text-white-50 mb-0">{item.subtitle}</p>
            </div>
        </CarouselItem>
    ));

    return (
        <React.Fragment>
            <section className="section bg-testimonial" id="testimonial">
                <div className="bg-overlay"></div>
                <Container>
                    <SectionTitle
                        title="TESTIMONIALS"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                        isLight={true}
                    />
                    <Row className="mt-5 pt-2">
                        <Col lg={12}>
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                {/* Render Slides Variable(Which Contains Carousel Items) */}
                                {slides}
                                <CarouselControl direction="prev" onClickHandler={previous}>
                                    <span className="carousel-control-prev-icon"></span>
                                    <span className="sr-only">Previous</span>
                                </CarouselControl>
                                <CarouselControl direction="next" onClickHandler={next}>
                                    <span className="carousel-control-next-icon"></span>
                                    <span className="sr-only">Next</span>
                                </CarouselControl>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Clients;
