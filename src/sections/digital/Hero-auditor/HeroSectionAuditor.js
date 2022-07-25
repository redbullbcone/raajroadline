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
              <b>Increase Site Traffic</b><br /> With our SEO Auditor
              </Hero.Title>
              <Hero.Text>
              <b>Automate</b> your marketing with our <b>AI Auditor.</b><br /> Discover tailored <b>Solutions</b> & recommended<b> Problem Solvers.</b><br />
              </Hero.Text>
             
              <Hero.Button className="agency-btn1" as={Link} to="https://platform.mrkt365.com/register">
               Start Now
              </Hero.Button>
              <Hero.Button className="agency-btn2" as={Link} to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo?month=2022-07">
                Book a Demo
              </Hero.Button>
            </Hero.Content>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
