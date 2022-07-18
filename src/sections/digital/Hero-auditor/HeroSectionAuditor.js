import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionAuditor() {
  return (
    <Hero backgroundImage="image/home-digital-agency/ai-auditor-hero.png">
      <Container>
        <Row>
          <Col>
            <Hero.Content>
              <Hero.Title as="h1" fontColor="#000">
              <b>All your Marketing</b><br /> Data in One Dashboard
              </Hero.Title>
              <Hero.Text>
              Use our <b>POWERFUL TOOLS</b> to get an overview of your<br /> business's marketing strategy & let our AI match you<br /> with <b>AMAZING TALENTS</b>
              </Hero.Text>
             
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
