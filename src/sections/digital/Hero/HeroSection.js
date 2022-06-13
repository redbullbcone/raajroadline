import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSection() {
  return (
    <Hero backgroundImage="image/home-digital-agency/hero-l7-bg.png">
      <Container>
        <Row className="align-items-center justify-content-center agencie-hero">
          <Col className="col-xl-9">
            <Hero.Content className="text-center">
              <Hero.Title as="h1" fontColor="#fff">
              Optimize and Scale <br /> your business
              </Hero.Title>
              <Hero.Text fontColor="#fff">
              Sell your <b className="opac-word">SERVICES </b>| Monitor your <b className="opac-word">EMPLOYEES</b> |
                <br className="d-none d-xs-block" /> Take advantage of our <b className="opac-word">VIRTUAL PREPAID CARD </b>| <br className="d-none d-xs-block" /> Hire Interns from <b className="opac-word">ALL OVER THE GLOBE</b>
              </Hero.Text>
              <Hero.Button className="agency-btn1" as={Link} to="/">
                Get Started
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
