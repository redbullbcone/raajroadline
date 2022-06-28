import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";
export default function ContentSectionTwo({ ...rest }) {
  return (
    <Content {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center back background2">
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-1 agencies-content-sec2"
          >
            {/* Section Title */}
            <Content.Box>
            <Content.Title as="h1">
                Why Work With us?
              </Content.Title>
              <Content.Title as="h2">
              <span className="blue-text">Sell</span> your services in <br /> our marketplace
              </Content.Title>
              <Content.Text>
              MRKT365 is the only resource you need to find the businesses prospects of a right company, freelancer or intern. With Reviews,Ratings and Verification, MRKT365 gives you the tools zyou need to hire with confidence. Get matched with our users directly or research yourself from a list of verified and reviewed options.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn"
                href="#"
                mt="40px"
              >
                Learn More
              </Content.Button>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-2"
          >
            <Content.Images>
              <Content.Imagedown>
                
                  <img
                    src="image/home-digital-agency/service1.png"
                    alt="content"
                  />
                
               
              </Content.Imagedown> 
               <Content.Imageup>
                  <img
                    src="image/home-digital-agency/service2.png"
                    alt="content"
                  />
              </Content.Imageup>
            </Content.Images>
          </Col>
        </Row>
      </Container>
      <div className="off-blue-background">
      <Container>
        <Row className="align-items-center justify-content-center background1">
        <Col
            xs="12"
            className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-1"
          >
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner>
                  <img
                    src="image/home-digital-agency/1.jpg"
                    alt="content"
                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo>
                <Content.ImageTwoInner>
                  <img
                    src="image/home-digital-agency/2.jpg"
                    alt="content"
                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para">
            <Content.Title as="h2">
            <span className="blue-text">Manage</span> your Team with our Employee Monitoring App
              </Content.Title>
              <Content.Text>
              Measure the productivity of freelancers you hire and your existing employees. Our services include an easy to install tracking program. All activities completed by your team can be monitored and documented through our employee tracker.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn"
                href="#"
                mt="40px"
              >
                Learn More
              </Content.Button>
            </Content.Box>
          </Col>
         
        </Row>
      </Container>
      </div>
        <Container>
        <Row className="align-items-center justify-content-center background2">
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-1"
          >
            {/* Section Title */}
            <Content.Box className="left-para2">
           
              <Content.Title as="h2">
              <span className="blue-text">Take advantage</span> of our Virtual Prepaid Card
              </Content.Title>
              <Content.Text>
              We have partnered with Visa and Amex to provide pre-paid virtual cards which you can use for online marketing, features, and its services without submitting your debit or credit card details. Spend only the money you’ve uploaded to your card and monitor how much you’re spending online.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn"
                href="#"
                mt="40px"
              >
                Learn More
              </Content.Button>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-2"
          >
              <img src="image/businesses/virtual-card.png" alt="virtual-card" className="w-100" />
            <Content.Images>
              {/* <Content.Imagedown>
                
                  <img
                    src="image/home-digital-agency/typing-hand.png"
                    alt="content"
                  />
                
               
              </Content.Imagedown> 
               <Content.Imageup>
                  <img
                    src="image/home-digital-agency/mobile-screen.png"
                    alt="content"
                  /> */}
              {/* </Content.Imageup> */}
            </Content.Images>
          </Col>
        </Row>
        </Container>
        <div className="off-blue-background">
        <Container>
        <Row className="align-items-center justify-content-center background1">
        <Col
            xs="12"
            className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-1"
          >
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner>
                  <img
                    src="image/home-digital-agency/22.png"
                    alt="content"
                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo>
                <Content.ImageTwoInner>
                  <img
                    src="image/home-digital-agency/33.png"
                    alt="content"
                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para">
            <Content.Title as="h2">
            <span className="blue-text">Hire Interns</span> from all over the globe
              </Content.Title>
              <Content.Text>
              Add young talent to your team. Find university-educated interns to work remotely on your projects. Our interns are ready to their trade hard work for experience Interns can be students, recent graduates, or professionals who want to kick start their careers with you from all over the world.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn"
                href="#"
                mt="40px"
              >
                Learn More
              </Content.Button>
            </Content.Box>
          </Col>
         
        </Row>
        </Container>
        </div>
    </Content>
  );
}
