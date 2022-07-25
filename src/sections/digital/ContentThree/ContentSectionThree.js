import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";
export default function ContentSectionThree({ ...rest }) {
  return (
    <Content {...rest}>
      <Container className="smart-repo-sec">
        <Row className="back">
        <Col
            xs="12"
            className="col-xl-12 col-lg-12 col-md-12 col-xs-12 order-lg-1  text-center"
          >
            <div className="ai-head-section">
            <Content.Title as="h1">
               Find <b>clarity</b> when you need it most
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
              <b>Smart</b> Reporting
              </Content.Title>
              <Content.Text>
              Find proven opportunities to boost website traffic used by thousands of businesses on search engines like Google and Bing. Scan your website for free to find technical SEO, social media, & PPC marketing opportunities with our AI auditor. Then turn opportunities into actionable results.
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

      <Container className="smart-repo-sec use-Smarter">
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
            Use <b>Smarter Tools</b> for <br /> Stonger <b>Results</b>
              </Content.Title>
              <Content.Text>
              Get an overview of your business’s marketing strategy with our easy-to-understand dashboards. We will translate your data so you know where you stand and find more ways to drive more sales.
                 
              </Content.Text>
              
            </Content.Box>
          </Col>
         
        </Row>
      </Container>

      <div className="cyan-background">
      <Container className="smart-repo-sec get-match">
       <Row className="align-items-center justify-content-center">
        
        <Col
          xs="12"
          className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1 main-para-sec2"
        >
          {/* Section Title */}
          <Content.Box className="right-side-para">
          <Content.Title as="h2" className="tilt-head">
          Get <b>Matched</b> with<br /> Verified <b>Experts</b>
            </Content.Title>
            <Content.Text className="ai-para3">
            Based on your requirements, our platform generates a short list of candidates based on AI recommendations. All experts are screened through an advanced KYC & AML screening and verification before our vendors are shown.
               
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
      
      <Container className="smart-repo-sec">
       <Row className="align-items-center justify-content-center ">
        
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para ai-last-para-colored">
            <Content.Title as="h2">
            <b>Visualize</b> data <br />Track Performance
              </Content.Title>
              <Content.Text >
              Get an instant overview of results and who to attribute them to in your team. Increase team productivity when hiring freelancers or assigning tasks to employees.
                 
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
