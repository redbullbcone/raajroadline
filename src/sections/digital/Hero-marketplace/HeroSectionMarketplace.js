import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionMarketplace() {
    const goToMarketPlace = () => {
        var current_location = window.location;

        var final_url = "https://platform.mrkt365.com/marketplace/search";

        if (current_location.hostname.startsWith("localhost")) {
            final_url = "http://localhost:3000/marketplace/search";
        } else if (current_location.hostname.startsWith("qa")) {
            final_url = "https://qa.platform.mrkt365.com/marketplace/search";
        }

        window.open(final_url);
    };
    // just checking again

    return (
        <Hero className="demo-height">
            <Container>
                <Row>
                    <Col className="col-xl-7">
                        <Hero.Content className="text-center">
                            <Hero.Title as="h1" fontColor="#000">
                                <b>AI Powered </b> <br />Talent Marketplace
                            </Hero.Title>
                            <Hero.Text fontColor="#000">
                            Browse our<b> EXTENSIVE TALENT POOL</b> and get <b>PERSONALIZED</b>
                                <br className="d-none d-xs-block" />recommendations for<b> FREELANCERS, AGENCIES, </b>and <b>INTERNS.</b>
                            </Hero.Text>
                            <Hero.Button className="agency-btn1" as={Link} to="https://platform.mrkt365.com/register">
                                Find Talent
                            </Hero.Button>
                            <Hero.Button className="agency-btn2" as={Link} to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo?month=2022-07">
                                Book a Demo
                            </Hero.Button>
                        </Hero.Content>
                    </Col>
                    <Col className="col-xl-5 hero-right">
                        <div className="hero-image">
                        <img src="image/ai-market/hero-image.png" alt="ai hero image" className="w-100"></img>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Hero>
    );
}
