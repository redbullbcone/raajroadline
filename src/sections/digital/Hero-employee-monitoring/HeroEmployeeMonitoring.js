import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionMarketplace() {
  return (
    <Hero>
      <Container>
        <Row>
            <Hero.Content className="left">
              <Hero.Title as="h1" fontColor="#000">
              <b>Employee Monitoring</b><br /> Software 
              </Hero.Title>
              <Hero.Text fontColor="#000">
              Improve remote team productivity with employee tracking software


              </Hero.Text>
              <Hero.Button className="agency-btn1" as={Link} to="/">
                Start Now
              </Hero.Button>
              <Hero.Button className="agency-btn2" as={Link} to="/">
                Book a Demo
              </Hero.Button>
            </Hero.Content>
        </Row>
      </Container>
    </Hero>
  );
}
