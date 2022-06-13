import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "./style";
import Video from "~components/VideoModal";
import { Link } from "~components";

export default function HeroSection({headerimage,headerimage2,herotitle,herotitle2,imageClass},{ ...rest }) {
  return (
    <Hero {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content>
             
              <Hero.Title as="h2">
              {herotitle}<br />
              {herotitle2}
              </Hero.Title>
              <Hero.Text>
              <p>Reach a <b>wider, high-value audience</b> on the <b>fastest growing search </b>network Receive a<b>$250 USD free ad credit.</b>  Get<b> monthly free recommendation reports</b></p>
              
             
              </Hero.Text>
              <Hero.Buttons mt="30px" mtLG="50px">
                <Hero.Button
                  className="btn-hero-affiliate btn-affi-hero1"
                  to="/"
                  as={Link}
                >
                  Receive your $250 credit now!
                </Hero.Button>
                {/* <Hero.Button className="btn-hero-affiliate btn-affi-hero2" to="/" as={Link}>
                  Book a Demo
                </Hero.Button> */}
              </Hero.Buttons>
            </Hero.Content>
          </Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-xs-11 order-1 order-lg-2"
          >
            <Hero.Video
              className={`welcome-img welcome-img--l9 video-box ${imageClass} d-flex`}
              mb="30px"
              mbLG="0"
            >
              <img
                src={headerimage}
                // src="image/home-startup/header-image.jpg"
                alt="content"
                className="w-100 hero-img1"
              />
               <img
                src={headerimage2}
                // src="image/home-startup/header-image.jpg"
                alt="content"
                className="w-100 hero-img2"
              />
              {/* Video Button */}
              {/* <Video id="LWZ7iytIA6k" className="video-btn">
                <i className="fa fa-play" />
              </Video> */}
            </Hero.Video>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
