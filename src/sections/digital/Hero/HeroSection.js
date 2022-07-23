import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSection() {
  return (
    <Hero className='demo-height'>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start row">
          <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10 col">
            <Hero.Content>
              <Hero.Title as="h1" fontColor="#FC6536">
              Optimize and Scale <br /><span className="black-text"> your agency</span>
              </Hero.Title>
              <Hero.Text fontColor="#000">
              Sell your <b className="opac-word">SERVICES </b>online | Hire specialized <b className="opac-word">FREELANCERS</b> |
                <br className="d-none d-xs-block" /> Monitor your <b className="opac-word">EMPLOYEES</b> | Let us become <b className="opac-word">YOUR NEW FAVORITE SITE</b>
              </Hero.Text>
              <Hero.Button className="agency-btn1" as={Link} to="/">
              Join as an Agency
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
