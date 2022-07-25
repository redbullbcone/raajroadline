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
                  <b>Read About How </b>our Tracker Helps Businesses Stay Ahead
                  </Content.Title>
                  <div className="pink-line"></div>

                  <Content.Subtitle as="h6" mb="72px" className="subtitle-sec">
                  Case study: Healthy Pass mobile web app development<br />
                  </Content.Subtitle>



                  {/* <Content.List></Content.List> */}
                  <div className="list" >
                    <div className="listitem1">
                      <p>Increased Daily Users by 310%</p>
                    </div>
                    <div className="listitem2" >
                    <p>Production deadline was met</p>
                    </div>
                    <div className="listitem3" >
                      <p>Project cost reduced by 27%</p>
                    </div>
                    <div className="listitem4">
                      <p>Reduced reporting time by 50%</p>
                    </div>
                  </div>
                </Content.Box>
              </Col>
              {/*/ .about-us Content */}
              <Col xs="12" className="col-lg-6 col-md-6 col-xs-12">
                <Content.ImageTwo mb="40px" className="img-sec" >
                  <img src="image/employee/screen1.png" alt="content" className="w-100 image2"/>
                </Content.ImageTwo>
              
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center background-sec">
            <Col xs="12" className="col-lg-6 col-md-6 col-xs-12">
              <div className="background-right-sub-sec">
              <Content.Title as="h2" mb="30px" mbXL="50px" className="background-title">
              Project Background
                </Content.Title>
                <hr className="blue-line"></hr>
              <Content.Text mb="30px" ptXL="30px">
              Healthy Pass is a COVID 19 screening tool used to maintain live records & analytics of visitors and employees. The company signed up for MRKT365 in December 2020 searching for a web developer. Their project goal was to create a mobile web app that would connect to an existing encrypted database. They also required an image reader feature that could scan QR codes. As an early-stage startup, they were looking to not break the bank on development costs.
              </Content.Text>
              </div> 
            </Col>

            <Col xs="12" className="col-lg-6 col-md-6 col-xs-12">
              <Content.Box className="EM-box-sec">
                <Content.ImageOne mb="40px">
                  <img
                    src="image/home-agency/background-image-1.png"
                    alt="content"
                    className="w-100 image-left"
                  />
                </Content.ImageOne>
              </Content.Box>
            </Col>
          </Row>

          
        </Container>
        </Content.InnerBlock>
    </Content>
  );
}
