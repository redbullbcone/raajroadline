import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionOne({heading},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff" className='business-sec-altcards'>
    <b><h2 className='top-head text-center business-content-sec'>{heading}</h2></b>
      <div>
        <Container>
          <Row className="align-items-center justify-content-center white-image first-business-sec">
            <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 ">
              <ImageGroup imageclass="w-100" imageSrc="image/marketing/screen1.png" imageAlt="" mb="60px" mbLG="0"/>
            </Col>
            {/* <Col className="col-md-1"></Col> */}
            {/* Content Widgets */}
            <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard">
              <div className='business-text-sec'>
              <Content.Title as="h2">Hire <b>World-Class </b><br />Talent</Content.Title>
              <Content.Text>Our talent marketplace is populated by top freelancers, agencies, and interns at all price points. Avoid middlemen. We ensure that the people you hire are the ones doing the project. Receive AI recommendations when hiring. Our network offers flexible engagements from hourly, to fixed price, to full-time work.</Content.Text>
              <Button className="blue-close" textTransform="capitalized">Learn More</Button>
              {/* <Content.Button></Content.Button> */}
              </div>
            </Col>
          </Row>
        </Container>

        <div className='video-sec business-video'>
<Container>
  <Row className="align-items-center justify-content-center white-image">
  
    {/* Content Widgets */}
    <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard video-card-text">
      <Content.Title as="h2"><b>Take Advantage</b> of our<br/>
Virtual Prepaid Cards</Content.Title>
      <Content.Text>Take control of your budget and use it more efficiently. Receive a cashback when using our virtual prepaid cards. We have partnered with US Bank and Visa to provide our clients with prepaid virtual cards for their online marketing needs instead of using their personal credit cards. Hand out virtual prepaid cards to your managers & decision makers while controlling their spending.</Content.Text>
      <Button className="blue-close blueclose-btn" textTransform="capitalized">Learn More</Button>
      {/* <Content.Button></Content.Button> */}
    </Col>
    {/* <Col className="col-md-2"></Col> */}

    <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 ">
      {/* <video loop autoPlay className='cc-video'>
        <source
          src="video/mrkt-cc.mp4"
          type="video/mp4"
        />
      </video> */}
      <ImageGroup imageclass="vpc-image" imageSrc="image/businesses/virtual-card.png" imageAlt="" mb="60px" mbLG="0"/>


    </Col>
  </Row>
</Container>
        </div>

        <Container>
          <Row className="align-items-center justify-content-center white-image first-business-sec">
            <Col xs="10" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 ">
            <video loop autoPlay className='cc-video'>
              <source
                src="video/brain.mp4"
                type="video/mp4"
              />
            </video>
            </Col>
            <Col className="col-md-1"></Col>
            {/* Content Widgets */}
            <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard">
              <div className='business-text-sec'>
              <Content.Title as="h2">Get <b>Faster, Smarter</b><br /><b> AI Marketing </b>solutions</Content.Title>
              <Content.Text>Our AI Auditor delivers objective insights into your business's marketing campaigns. Use AI to quickly identify on-site SEO, technical SEO, SEM, and social media marketing issues holding you back. Get connected to freelancers and agencies based on your unique needs. Take your business to the next level.</Content.Text>
              <Button className="blue-close blueclose-btn" textTransform="capitalized">Learn More</Button>
              {/* <Content.Button></Content.Button> */}
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    
    
</Content>

</>
  )
  }
