import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";
export default function ContentSectionThree({ ...rest }) {
  return (
    <Content {...rest}>
      <Container>
        <Row className="back">
        <Col
            xs="12"
            className="col-xl-12 col-lg-12 col-md-12 col-xs-12 order-lg-1  text-center"
          >
            <div className="ai-head-section">
            <Content.Title as="h1">
               Find clarity when you need it most
            </Content.Title>
            </div>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1"
          >
            {/* Section Title */}
            <Content.Box className="ai-left-para-sec">
            
              <Content.Title as="h2">
              <b>AI</b> Auditor
              </Content.Title>
              <Content.Text>
              Our marketplace is a great opportunity to share with freelancers looking for a convenient and consistent way to get jobs. By referring them, not only are they rewarded with competitive paying jobs, but you are as well through commission. Immediately start getting rewarded the moment they land a job.
              </Content.Text>
             
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-1 order-lg-2"
          >
             <video loop autoPlay className='cc-video'>
              <source
                src="video/brain.mp4"
                type="video/mp4"
              />
            </video>
          </Col>
        </Row>
      </Container>

      <Container>
      <Row className="align-items-center justify-content-center main-section2">
        <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-1 order-lg-1"
          >
            <Content.Images className="ai-image2">
                  <img
                    src="image/home-digital-agency/stats-screen.png"
                    alt="content"
                    className="screen1 w-100"
                  />
            </Content.Images>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ai-para-sec2"
          >
            {/* Section Title */}
            <Content.Box className=" colored-bg ai-right-para">
            <Content.Title as="h2" className="ai-head2">
            Use <b>Smart Tools</b> for <br /> Stong <b>Results</b>
              </Content.Title>
              <Content.Text>
              Get an overview of your business’s marketing strategy with our easy-to-understand dashboards. We will translate your data so you know where you stand and help you plan ahead.
                 
              </Content.Text>
              
            </Content.Box>
          </Col>
         
        </Row>
      </Container>

      <div className="cyan-background">
      <Container>
       <Row className="align-items-center justify-content-center">
        
        <Col
          xs="12"
          className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1 main-para-sec2"
        >
          {/* Section Title */}
          <Content.Box className="right-side-para">
          <Content.Title as="h2" className="tilt-head">
          Get <b>Matched</b> to<br /> an <b>Expert</b>
            </Content.Title>
            <Content.Text className="ai-para3">
            Our AI will create a short list of candidates for you to choose from based on your requirements. We conduct an extensive KYC & AML screening with both automatic & manual verifications before our vendors are listed.
               
            </Content.Text>
            
          </Content.Box>
        </Col>
        <Col
          xs="12"
          className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-2 order-lg-2"
        >
          <Content.Images>
             <Content.ImageOne>
              <Content.ImageOneInner className="ai-skew-image1">
                <img
                  src="image/home-digital-agency/expert-1.png"
                  alt="content"
                />
              </Content.ImageOneInner>
             
            </Content.ImageOne>
            <Content.ImageTwo>
              <Content.ImageTwoInner className="ai-skew-image2">
                <img
                  src="image/home-digital-agency/expert-2.png"
                  alt="content"
                />
              </Content.ImageTwoInner>
            </Content.ImageTwo>
          </Content.Images>
        </Col>
       
      </Row>
      </Container>
      </div>
      
      <Container>
       <Row className="align-items-center justify-content-center ">
        
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para ai-last-para-colored">
            <Content.Title as="h2">
            <b>Track</b> your <br />Marketing Campaigns, <br />Freelancers and Employees
              </Content.Title>
              <Content.Text >
              Watch your revenue grow while outsourcing costs to reduce your expenses. Our platform allows you to add vendors chosen by our AI or your existing employees working from home.
                 
              </Content.Text>
              
            </Content.Box>
          </Col>

          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-1 order-lg-1"
          >
            <Content.Images className="ai-main-last-image">
                  <img
                    className="ai-last-sec-image w-100"
                    src="image/home-digital-agency/track-marketing-campaigns.jpg"
                    alt="content"
                  />
            </Content.Images>
          </Col>
         
        </Row>
      </Container>
      
       
       
    </Content>
  );
}
