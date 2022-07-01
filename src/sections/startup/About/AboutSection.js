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
                  <h1>Earn from<br /><b>Businesses</b></h1>
                  <p>Top of the list of dreams for many small firms and solo professionals is to win lucrative work with big corporate clients. A few decent projects can keep your business very healthy.</p>
                  <Button className="button-affiliate"> Learn More</Button>

              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
      <div className="section-affiliate2">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-lg-start section-affiliate-alt">
          <Col xs="12" className="col-xl-6 col-lg-5 col-md-5 col-xs-12">
            <About.Box className="second-sec">
                  <h1>Earn from<br /><b>Businesses</b></h1>
                  <p>Top of the list of dreams for many small firms and solo professionals is to win lucrative work with big corporate clients. A few decent projects can keep your business very healthy.</p>
                  <Button className="button-affiliate"> Learn More</Button>

              {/* <About.Title as="h2"> <SuperTag value=""/> </About.Title> */}

              {/* <About.Text> <SuperTag value=""/> </About.Text> */}
            </About.Box>
          </Col>
          <Col className="col-xl-6 col-lg-7 col-md-7 col-xs-12">
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
                       src="image/home-digital-agency/glad-african-office-affiliate.png"
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
              <img src="image/home-startup/affiliates-3.jpg" alt="content" className="w-100"/>
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-6 col-md-6">
            <About.Box>
              {/* Section Title */}
              <About.Content className="para-background-color2">
                <SectionTitle
                  // subTitle="About us"
                  title="Earn from our VPC"
                  text="Our VPC helps users track their marketing expenses which increases efficient use of resources and prevents overspending. Refer users that will benefit from using a VPC and get rewarded for it. Earn on each dollar spent when your referral uses their VPC."
                  // subTitleProps={{
                  //   mb: "10px",
                  //   className: "subline",
                  //   fontColor: "#5034fc",
                  // }}
                  titleProps={{ mb: "10px", as: "h2" }}
                  mb="69px"
                />
                  <Button className="button-affiliate"> Learn More</Button>

              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        
        </Row>
      </Container>
      
    </About>
  );
}
