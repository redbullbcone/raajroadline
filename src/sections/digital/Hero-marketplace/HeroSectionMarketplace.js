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
        <Hero backgroundImage="image/home-digital-agency/marketplace-bgimg.jpg">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col className="col-xl-9">
                        <Hero.Content className="text-center">
                            <Hero.Title as="h1" fontColor="#fff">
                                AI Powered Marketplace
                            </Hero.Title>
                            <Hero.Text fontColor="#fff">
                                Get connected to Global Freelancers, Agencies, & Interns.{" "}
                                <br className="d-none d-xs-block" /> Find experienced professionals and organizations
                                to help <br className="d-none d-xs-block" /> Hire Interns from you finish any job at
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
                </Row>
            </Container>
        </Hero>
    );
}
