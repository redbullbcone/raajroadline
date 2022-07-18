import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function   ContentSectionOne(){
return(
<Content>
  <Container>
    <Row className="align-items-center justify-content-center" >
      <div className='d-flex section1'>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card1">
       
        <h2>Pay <b>Securely &</b> <br />Discretely</h2>
        <p>Virtual cards are a secure way to pay online without using your personal credit card. Create cards easily on our platform for yourself, employees, agencies, and freelancers you would like to work with.</p>

        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 ">
        <Content.Image className="image-card1">
          <img src="image/VPC/secure-card.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <div className=" d-flex main-container">
      <Col  className="col-xl-6 col-lg-6 col-md-6 col-xs-7 order-1 order-lg-1">
        <Content.Image className="image-card2">
          <img src="image/VPC/pie-screen.png"  alt="content" className="resp-image main-img1 w-100"/>
        </Content.Image>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-5 order-2 order-lg-2 ">
        <Content.Box className="text-card2">
        <h2>Budget <b>Effectively</b></h2>
        <p>Easily deposit your marketing budget across multiple cards and stop overpaying for services that you did not plan for. Take control of your finances and get more for your hard-earned money.</p>
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex alt-card2 main-container">
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card3">
       <h2><b>Earn Cashback</b><br/>on marketing</h2>
       <p>Immediately be notified about any job opportunities from clients eager to work with you. Easily view the terms and conditions of every project to make sure both parties' expectations are aligned and met. Have the freedom to choose which projects to work on, on your terms.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2">
        <Content.Image className="image-card3">
          <img src="image/VPC/cashback.png"  alt="content" className="resp-image main-img2 w-100"/>
        </Content.Image>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
    <div className=" d-flex main-container fourth-sec">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1">
        <Content.Image className="image-card4">
          <img src="image/VPC/two-card.png"  alt="content" className="resp-image main-img4 w-100"/>
          {/* <div className='cellphone-video'>
          <video loop autoPlay>
            <source
              src="video/Payoneer.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}
        </Content.Image>
      </Col>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ">
        <Content.Box className="txt-card4">
        <h2><b>Assign cards</b> to <br /> your clients</h2>
        <p>Grow your agency by creating refillable virtual prepaid cards for your clients. Earn Cashback on your collective agency ad spend. Our cards work on both existing and new Google Ads, Bing Ads, and Facebook marketing client accounts.</p>
        </Content.Box>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex main-section3" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card5">
        <h2><span className='blue-h3'>Reloadable </span>Virtual Cards</h2>
        <p>Our cards are refilled and re-used until they expire. Monitor your card balance on our platform. Our system makes it easy to request and refill cards. Refill multiple cards with our platform simultaneously. If you have questions or concerns our virtual card customer support team will help answer your questions and concerns.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2">
        <Content.Image className="image-card5">
          <img src="image/VPC/visa-card.png"  alt="content" className="resp-image main-img5 w-100"/>
        </Content.Image>
      </Col>
    </div>
    </Row>

  </Container>
</Content>
)
}