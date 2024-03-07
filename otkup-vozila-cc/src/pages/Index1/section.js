import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  NavItem,
  NavLink,
  Nav,
  CarouselIndicators,
} from "reactstrap";
import WhatsappButton from "../../components/buttons/whatsappButton";
import PhoneButton from "../../components/buttons/phoneButton";

// Importing Modal
import ModalSection from "../../components/common/ModalSection";

// Import Images
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import ViberButton from "../../components/buttons/viberButton";
import ScrollspyNav from "../../components/Navbar/scrollSpy";

const Section = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);

  const items = [
    { id: 1, image: bg1, text: "OTKUP RABLJENIH VOZILA", subtitle: "Otkup i isplata odmah" },
    { id: 2, image: bg2, text: "NAJBOLJE CIJENE", subtitle: "Radimo na području cijele Hrvatske" },
    { id: 3, image: bg3, text: "PROVJERENA SIGURNOST", subtitle: "Dostupni 0-24" },
  ];

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

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const childRef = useRef();
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   var e1 = document.getElementsByClassName("carousel-item");
  //   for (var i = 0; i < 3; i++) {
  //     if (i === 0) e1[i].style.backgroundImage = `url(${bg1})`;
  //     if (i === 1) e1[i].style.backgroundImage = `url(${bg2})`;
  //     if (i === 2) e1[i].style.backgroundImage = `url(${bg3})`;
  //   }
  // });

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
          enableTouch={true}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {items.map((item) => (
            <CarouselItem key={item.id} onExiting={onExiting} onExited={onExited}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div className="c"></div>
                <div className="home-center">
                  <div className="home-desc-center">
                    <Container style={{ padding: "2rem" }}>
                      <Row className="justify-content-center">
                        <Col md="12" style={{ zIndex: "998" }}>
                          <div className="home-content text-white">
                            <h3 style={{ textDecoration: "underline", textDecorationColor: "#fff" }}>
                              <a href={`tel:385957483524`} className="mt-4 text-white">
                                095 748 3524
                              </a>
                            </h3>
                            <h1 className="title mt-4 text-white text-uppercase">{item.text}</h1>
                            <h3 className="mt-4 text-white">{item.subtitle}</h3>
                            <div className="pt-4 mt-1">
                              <WhatsappButton phoneNumber="385957483524" />
                              <PhoneButton phoneNumber="385957483524" />
                              <ViberButton phoneNumber="385957483524" />
                            </div>
                            <div className="form-contact">
                              <ScrollspyNav scrollTargetIds={["contact"]}>
                                <Nav navbar className="ml-auto navbar-right">
                                  <NavItem key="3">
                                    <NavLink
                                      href={"#" + "contact"}
                                      className={item.navheading === "Home" ? "active" : ""}
                                    >
                                      <h6
                                        className="mt-4"
                                        style={{
                                          textDecoration: "underline",
                                          textDecorationColor: "#fff",
                                          textUnderlineOffset: "8px",
                                        }}
                                      >
                                        <a style={{ color: "#979797" }}>Ili nas kontaktirajte putem obrasca</a>
                                      </h6>
                                    </NavLink>
                                  </NavItem>
                                </Nav>
                              </ScrollspyNav>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
          <CarouselControl direction="prev" onClickHandler={previous} />
          <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
      </section>
    </React.Fragment>
  );
};

export default Section;
