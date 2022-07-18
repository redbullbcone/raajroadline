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
        <Hero>
            <Container>
                <Row>
                    <Col className="col-xl-6">
                        <Hero.Content className="text-center">
                            <Hero.Title as="h1" fontColor="#000">
                                <b>AI Powered </b> <br />Marketplace
                            </Hero.Title>
                            <Hero.Text fontColor="#000">
                                Get <b>CONNECTED</b> to <b>GlOBAL FREELANCERS, AGENCIES,</b>
                                <br className="d-none d-xs-block" />& <b>INTERNS.</b> Find <b>EXPERIENCED PROFESSIONALS</b> & 
                                <br className="d-none d-xs-block" /><b>ORGANIZATION</b> to Help you Finish any Job at Hand.
                                hand.
                            </Hero.Text>
                            <Hero.Button className="agency-btn1" onClick={goToMarketPlace}>
                                Find Talent
                            </Hero.Button>
                            <Hero.Button className="agency-btn2" as={Link} to="/">
                                Book a Demo
                            </Hero.Button>
                        </Hero.Content>
                    </Col>
                    <Col className="col-xl-6 hero-right">
                        <div className="hero-image">
                        <img src="image/ai-market/hero-image.png" alt="ai hero image" className="w-100"></img>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Hero>
    );
}
