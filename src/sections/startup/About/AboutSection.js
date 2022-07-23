import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import About from "./style";

export default function AboutusSection() {
  return (
    <About className="resp-affiliate">
      <Container>
        <Row className="align-items-center justify-content-center g-0 section-affiliate">
          <Col xs="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
            <About.Image className="affi-image">
              <img src="image/home-startup/affiliates-1.jpg" alt="content" className="w-100"/>
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
            <About.Box>
              {/* Section Title */}

              <About.Content className="para-background-color1">
                  <h1>Earn with<br /><b>Businesses</b></h1>
                  <p>Drive businesses to our platform and earn when they hire freelancers or sell their services online. Reward business owners while rewarding yourself by introducing them to MRKT365.</p>
                  <Button className="blue-button-affi"> Learn More</Button>

              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
      <div className="section-affiliate2">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-lg-start section-affiliate-alt">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-5 col-xs-12">
            <About.Box className="second-sec">
                  <h1>Become a<br /><b>21st-Century Recruiter</b></h1>
                  <p>Earn more doing what you have already been doing but in a more innovative way. Send ready-made promotional material and links to your network and start earning money. Stop struggling to collect your commissions, let us handle transactions while you watch your income grow through our affiliate dashboard.</p>
                  <Button className="blue-button-affi"> Learn More</Button>

              {/* <About.Title as="h2"> <SuperTag value=""/> </About.Title> */}

              {/* <About.Text> <SuperTag value=""/> </About.Text> */}
            </About.Box>
          </Col>
          <Col className="col-xl-6 col-lg-6 col-md-7 col-xs-12">
            <div className="tilt-image-sec">
               <div className="ImageOne">
                   <div className="ImageOneInner">
                     <img
                       src="image/home-digital-agency/cheerful-young-affiliate.png"
                       alt="content"
                     />
                   </div>

               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner">
                     <img
                       src="image/home-digital-agency/expert-1.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
          </Col>
   
     
        </Row>
      </Container>
      </div> 
      <Container>
        <Row className="align-items-center justify-content-center g-0 section-affiliate">
        <Col xs="12" className="col-xxl-6 col-lg-6 col-md-6">
            <About.Image className="affi-image">
              <img src="image/home-digital-agency/VCC.png" alt="content" className=" affi-image2"/>
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-6 col-md-6">
            <About.Box>
              {/* Section Title */}
              <About.Content className="para-background-color2">
                
                  <h1>Earn from<b> Virtual Card transactions</b></h1>
                  <p>Earn a percentage of all transactions when you refer a new cardholder to our virtual prepaid card program. We offer Virtual Prepaid Cards to clients to help them regain control of their marketing budgets. Our cards provide a cashback and are used like regular credit cards.</p>
                 
                  <Button className="blue-button-affi"> Learn More</Button>

              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        
        </Row>
      </Container>
      
    </About>
  );
}
