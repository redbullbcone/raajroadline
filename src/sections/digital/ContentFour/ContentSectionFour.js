import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";

export default function ContentSectionFour () {
  return (
    <Content>
        <Content.InnerBlock>
        <div class="main-box">
          <Container>
            <Row className="justify-content-center tracker-sec" >
              {/* about-us Content */}
              <Col xs="12" className="col-lg-6 col-md-6 col-xs-12">
                <Content.Box className="EM-content-sec2">
                  
                  <Content.Title as="h2" mb="30px" mbXL="50px">
                  See How our Tracker Helps Businesses Stay Ahead
                  </Content.Title>
                  <div className="pink-line"></div>

                  <Content.Subtitle as="h6" mb="72px" className="subtitle-sec">
                  Case study: How Healthy Pass Improved Efficiency and<br /> Customer Service with MRKT365
                  </Content.Subtitle>



                  {/* <Content.List></Content.List> */}
                  <div className="list" >
                    <div className="listitem1">
                      <p>Increased Daily Users by 310%</p>
                    </div>
                    <div className="listitem2" >
                    <p>Platform went into Production 3 Months Earlier</p>
                    </div>
                    <div className="listitem3" >
                      <p>Reduced Project Cost by 27%</p>
                    </div>
                    <div className="listitem4">
                      <p>Cut Admin Supervision Time in Half</p>
                    </div>
                  </div>
                </Content.Box>
              </Col>
              {/*/ .about-us Content */}
              <Col xs="12" className="col-lg-6 col-md-6 col-xs-12">
                <Content.ImageTwo mb="40px" className="img-sec" >
                  <img src="image/home-agency/working-people.png" alt="content" className="w-100 image2"/>
                </Content.ImageTwo>
              
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center background-sec">
            {/* about-us Content */}
            <Col xs="12" className="col-lg-7 col-md-7 col-xs-12">
              <Content.Box className="EM-box-sec">
                {/* <Content.Subtitle as="h6" mb="40px" fontColor="#fd346e">
                  About us
                </Content.Subtitle> */}
                <Content.Title as="h2" mb="30px" mbXL="50px" className="background-title">
                  Background
                </Content.Title>
                <Content.ImageOne mb="40px">
                  <img
                    src="image/home-agency/background-image-1.png"
                    alt="content"
                    className="w-100 image-left"
                  />
                </Content.ImageOne>
              </Content.Box>
            </Col>
            {/*/ .about-us Content */}
            <Col xs="12" className="col-lg-1 col-md-1 col-xs-12"></Col>
            <Col xs="12" className="col-lg-4 col-md-4 col-xs-12">
              <div className="background-right-sub-sec">
              <Content.Text mb="30px" ptXL="30px">
              Healthy Pass is a COVID 19 screening tool used to maintain live records & analytics of your visitors and employees. The company signed up for MRKT365 in December 2020 to hire a web developer. Healthy Pass was looking for a developer who could build a mobile web app that would connect with an encrypted database. They also needed an optical reader feature that could scan QR codes. They came to us as an early-stage startup looking not to break the bank on development costs.
              </Content.Text>
              <Content.ImageTwo mb="40px">
                <img src="image/home-agency/background-image-2.png" alt="content" className="w-100 image-right"/>
              </Content.ImageTwo>
              </div> 
            </Col>
          </Row>
        </Container>
        </Content.InnerBlock>
    </Content>
  );
}
