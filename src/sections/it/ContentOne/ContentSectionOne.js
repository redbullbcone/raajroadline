import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import Progressbar from './Components/Progressbar'
export default function ContentSectionOne(){
return(
<Content>
  <Container>
    <Row className="align-items-center justify-content-center" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box mb="65px" className="txt-card1">
        <SectionTitle title="Stand Out" text="Building an amazing profile is your most valuable resource. Present yourself the best way possible so business have a strong reason to go after you. Share your career experience, define your skills and use your portfolio to show examples of your work and to draw more attention to your profile!"
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 ">
        <Content.Image className="image-card1">
          <img src="image/it-services/standout.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <Col  className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1">
        <Content.Image className="image-card2">
          <img src="image/it-services/dashboard.png"  alt="content" className="w-100 resp-image"/>
        </Content.Image>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ">
        <Content.Box mb="65px" className="txt-card2">
        <SectionTitle title="Your Dashboard" text="Have everything you need to find, create, and launch successful projects in one dashboard. Simple and interactive while being fully customizable, build the perfect dashboard by simply linking our third-party integrations. Never miss out on great career opportunities again."
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box mb="65px" className="txt-card3">
        <SectionTitle title="Receive Invites" text="Immediately be notified about any job opportunities from clients eager to work with you. Easily view the terms and conditions of every project to make sure both parties' expectations are aligned and met. Have the freedom to choose which projects to work on, on your terms."
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2">
        <Content.Image className="image-card3">
          <img src="image/it-services/invites.png"  alt="content" className="w-100 resp-image"/>
        </Content.Image>
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1">
        <Content.Image className="image-card4">
          <img src="image/it-services/get-paid.png"  alt="content" className="w-100 resp-image"/>
        </Content.Image>
      </Col>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ">
        <Content.Box mb="65px" className="txt-card4">
        <SectionTitle title="Get Paid Securely" text="Rest assured that all payments are securely transferred to your account. We handle all billing and invoicing directly with clients, so you can focus on more important tasks. Get paid on time, every time!"
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box mb="65px" className="txt-card5">
        <SectionTitle title="Proof of Work" text="Your work hours are automatically tracked to make sure you are paid accordingly to the effort and time spent on the project. Keep the clients constantly updated while meeting their expectations. Never be underpaid again and be properly compensated for your work!"
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2">
        <Content.Image className="image-card5">
          <img src="image/it-services/proof.png"  alt="content" className="w-100 resp-image"/>
        </Content.Image>
      </Col>
    </Row>

  </Container>
</Content>
)
}