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
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-1 agencies-content-sec2"
          >
            {/* Section Title */}
            <Content.Box>
            <Content.Title as="h1">
                Why Work With Us?
              </Content.Title>
              <Content.Title as="h2">
              <span className="blue-text">Expand</span> your client base with <br /> our <span className="blue-text">Marketplace</span>
              </Content.Title>
              <Content.Text>
              Create a free business listing on our platform and start selling your services online to a whole new audience. Add multiple service packages and get paid in US dollars. Get matched to projects or browse our job board. Easily connect with new customers and reach your next revenue goal with MRKT365.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn blue-close"
                href="#"
                mt="20px"
              >
                Learn More
              </Content.Button>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-2"
          >
            <Content.Images>
              <Content.Imagedown>
                
                  <img
                    src="image/home-digital-agency/service1.png"
                    alt="content"
                    className="image1 w-100"
                  />
                
               
              </Content.Imagedown> 
               <Content.Imageup>
                  <img
                    src="image/home-digital-agency/service2.png"
                    alt="content"
                    className="image2 w-100"
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
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-1"
          >
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner>
                  <img
                    src="image/home-digital-agency/1.jpg"
                    alt="content"
                    className="image3"
                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo>
                <Content.ImageTwoInner>
                  <img
                    src="image/home-digital-agency/2.jpg"
                    alt="content"
                    className="image4"

                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para">
            <Content.Title as="h2">
            <b className="blue-text">Manage</b> your remote Team <br /> with <b className="blue-text">confidence<br /></b>
              </Content.Title>
              <Content.Text>
              Increase the productivity of the freelancers you hire and your existing employees with our task monitoring app. Our easy-to-use monitoring app tracks time spent on tasks and automatically adds a work journal for each worker for your future approval.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn blue-close"
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
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-1"
          >
            {/* Section Title */}
            <Content.Box className="left-para2">
           
              <Content.Title as="h2">
              <span className="blue-text">Earn instant ROI</span> on <br /> Marketing Campaigns
              </Content.Title>
              <Content.Text>
              We have partnered with Visa, Amex, & US Bank to provide reloadable prepaid virtual credit cards to businesses, managers, marketing agencies & their clients. Earn up to 1.5% cashback on ad spend from all cards under your account. Regain control of your marketing budget or the marketing accounts you manage.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn blue-close"
                href="#"
                mt="40px"
              >
                Learn More
              </Content.Button>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-2"
          >    
          <div className="virtual-card">
              <img src="image/businesses/virtual-card.png" alt="virtual-card" className="w-100" />
          </div>
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
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-1"
          >
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner>
                  {/* <img
                    src="image/home-digital-agency/22.png"
                    alt="content"
                    className="image5"

                  /> */}
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo className="imgtwodown">
                <Content.ImageTwoInner>
                  {/* <img
                    src="image/home-digital-agency/33.png"
                    alt="content"
                    className="image6"

                  /> */}
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para">
            <Content.Title as="h2">
            <span className="blue-text">Hire Virtual Interns</span> to<br /> Fill in the Gaps
              </Content.Title>
              <Content.Text>
              Add young talent to your team to accelerate your projects. Find university-educated interns to work with your team remotely. Discover interns that are ready to trade hard work for experience. Interns can be students, recent graduates, or professionals who want to kick start their careers.
                 
              </Content.Text>
              <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn blue-close"
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
