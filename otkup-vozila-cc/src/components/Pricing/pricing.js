import React from 'react';
import { Container, Row } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";

// Import PricingBox component
import PricingBox from './pricing-box';

const Pricing = () => {
    const pricings = [
        { title: "Classic", price: 27, duration: "Week",
            features: [
                { title: "Customized Plans" },
                { title: "Billing Report" },
                { title: "Access to Asana" },
            ]
        },
        { title: "Popular", price: 79, duration: "Month", isNew: true,
            features: [
                { title: "Customized Plans" },
                { title: "Billing Report" },
                { title: "Access to Asana" },
            ]
        },
        { title: "Ultimate", price: 99, duration: "Years",
            features: [
                { title: "Customized Plans" },
                { title: "Billing Report" },
                { title: "Access to Asana" },
            ]
        },
    ];

    return (
        <section className="section bg-light" id="pricing">
            <Container>
                <SectionTitle
                    title="OUR PRICING"
                    subtitle="OFFERS"
                    desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                />
                <Row className="mt-5 pt-2">
                    <PricingBox pricings={pricings} />
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
