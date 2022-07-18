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
              <b>Track & Improve</b><br />Team Productivity 
              </Hero.Title>
              <Hero.Text fontColor="#000">
              Bring out the <b>Best</b> in your <b>Remote Team</b> with <b>Proof of Work</b> & <br className="d-none d-xs-block" /><b>Productivity Tools</b> that gets <b>Work done.</b>
              </Hero.Text>
              {/* <Hero.Button className="agency-btn1" as={Link} to="/">
                Sign Up for Free
              </Hero.Button>
              <Hero.Button className="agency-btn2" as={Link} to="/">
                Book a Demo
              </Hero.Button> */}
            </Hero.Content>
        </Row>
      </Container>
    </Hero>
  );
}
