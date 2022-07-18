import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import About from "./style";

export default function AboutusSection() {
  return (
    <About className="resp-affiliate">

      <Container>
        <Row className="align-items-center justify-content-center justify-content-lg-start section-affiliate-alt">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-5 col-xs-12">
            <About.Box className="second-sec">
                  <h1><b>Hire Interns</b> to Fill in<br />the Gaps</h1>
                  <p>Hire diverse early-career talent with MRKT365 from around the world with virtual internships. Our marketplace enables organizations to work with remote interns from global universities Want to focus your time on quality, and not quantity? Use our video interview features to digitally screen interns before the actual interview. Find the most engaged interns with MRKT365!</p>
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
                       src="image/marketplace/image1.png"
                       alt="content"
                     />
                   </div>

               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner">
                     <img
                       src="image/marketplace/image2.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
          </Col>
   
     
        </Row>
      </Container>
      
    </About>
  );
}
