import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionAuditor() {
  return (
    <Hero backgroundImage="image/home-digital-agency/auditor-header.png">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-9">
            <Hero.Content className="text-center">
              <Hero.Title as="h1" fontColor="#000">
              All your Marketing Data in  <br /> One Dashboard
              </Hero.Title>
             
              <Hero.Button className="agency-btn1" as={Link} to="/">
               Start Now
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
