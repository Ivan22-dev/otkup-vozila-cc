import React, { useState } from 'react';
import { Container, Row } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";

const About = () => {
    const [data] = useState([
        { icon: "mdi mdi-monitor", title: "Web design", desc: "Aliquam tempor an tidunt liberonon feugiat quam risu tortor." },
        { icon: "mdi mdi-nfc-variant", title: "Development", desc: "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.", isLight: true },
        { icon: "mdi mdi-lightbulb-on-outline", title: "Branding", desc: "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.-" },
    ]);

    return (
        <React.Fragment>
            <section className="section" id="about">
                <Container>
                    <SectionTitle
                        title="About Agency"
                        subtitle="WHO WE ARE?"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />

                    <Row className="mt-5 pt-2">
                        <AboutBox data={data} />
                    </Row>
                </Container>
            </section>

            <BestSkills />
        </React.Fragment>
    );
};

export default About;
