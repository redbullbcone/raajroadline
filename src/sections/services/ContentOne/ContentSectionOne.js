import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionOne({heading},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff" className='business-sec-altcards'>
    <h2 className='top-head text-center business-content-sec'>{heading}</h2>
      <div>
        <Container>
          <Row className="align-items-center justify-content-center white-image first-business-sec">
            <Col xs="10" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 ">
              <ImageGroup imageclass="" imageSrc="image/marketing/pic.png" imageAlt="" mb="60px" mbLG="0"/>
            </Col>
            <Col className="col-md-1"></Col>
            {/* Content Widgets */}
            <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard">
              <div className='business-text-sec'>
              <Content.Title as="h2">We <b>Ensure</b> that the <br />freelancers you <b>Hire</b> are<br />the Ones <b>Doing</b> the Project</Content.Title>
              <Content.Text>Our mission is to create a marketplace with top vendors at all price points. Domestic agencies often outsource their contracts overseas. We cut out the middle man for you and deliver the freelancers you need at the rate you want! We review all freelancers’ profiles before letting our AI suggest them to you.</Content.Text>
              <Button className="blue-close blueclose-btn" textTransform="capitalized">Learn More</Button>
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
      <Content.Title as="h2">Take <b>Advantage</b> of our<br /> <b>Virtual Prepaid cards</b></Content.Title>
      <Content.Text>Take control of your budget, use it more efficiently, and receive a cashbacl with our virtual prepaid cards. We have partnered with US Bank and Visa to provide our clients prepaid virtual cards to use towards their online marketing without submitting their main debit or credit card details. Hand out virtual prepaid cards to your decision makers while monitoring their spend.</Content.Text>
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
      <ImageGroup imageclass="" imageSrc="image/businesses/virtual-card.png" imageAlt="" mb="60px" mbLG="0"/>


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
              <Content.Title as="h2">Get <b>Intelligent Solutions</b><br />with our <b>AI Auditor</b></Content.Title>
              <Content.Text>We trained our AI to deliver objective insights into your business's marketing campaigns. The AI Auditor will quickly identify on-site SEO, technical SEO, Adwords, and social media marketing issues. Finally, the AI will recommend to you the right freelancers to choose from to meet and exceed your specific needs.</Content.Text>
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




