import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Video from '~components/VideoModal'
import herol5Img from "~image/home-agency/hero-l5-bg.jpg";
import herol5ImgOverlay from "~image/home-agency/hero-bg-overlay.png";
 import Hero from "./style"
export default function HeroSection(){
return(
<Hero backgroundImage={herol5Img.src} backgroundOverlay={herol5ImgOverlay.src}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      <Col className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-xs-11 order-2 order-lg-1">
        <Hero.Content mb="40px" mbMD="40px" mt="30px" mtLG="0">
        {/* <Hero.Subtitle as="h3" fontColor="#fee856" mb="28px">Try our 14 days free trial</Hero.Subtitle> */}
        <Hero.Title as="h1" fontColor="#fff">Connect your Talent Pool to our Global Market</Hero.Title>
          <Hero.Text>  Commission Rates <b> up to $1000 </b> <br className="d-none d-sm-block" />
          Access to an<b> Afiliate Dashboard </b><br className="d-none d-sm-block" /> No <b>Deadline Limitations</b></Hero.Text>
          <Button href='/' className=" btn btn-primary text-white recruitment-button" > Become an Intern </Button>
          {/* <Hero.Video mt="40px">
            <Video id="LWZ7iytIA6k" className="video-block">
              <i className="fa fa-play" />
              <span className="btn-text">Watch 1 min video testimony from<br className="d-none d-xs-block" /> our satisfied customers</span>
            </Video>
          </Hero.Video> */}
        </Hero.Content>
      </Col>
    </Row>
  </Container>
</Hero>
)
}