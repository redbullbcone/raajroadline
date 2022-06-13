import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionMarketplace() {
  return (
    <Hero backgroundImage="image/home-agency/employee-monitoring-bgimg.png">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-9">
            <Hero.Content className="text-center">
              <Hero.Title as="h1" fontColor="#fff">
              Track & Improve Worker Productivity 
              </Hero.Title>
              <Hero.Text fontColor="#fff">
              Bring out the Best in your Remote Team with Proof of Work & <br className="d-none d-xs-block" />Productivity Tools that gets Work done.
              </Hero.Text>
              <Hero.Button className="agency-btn1" as={Link} to="/">
                Sign Up for Free
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
