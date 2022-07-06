import React from "react";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./style";

export default function ServicesSectionTwo() {
  return (
    <Service>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-5 col-md-5 col-xs-12 order-2 order-lg-1">
            <Service.Box className='earn-from-section' >
              <h1>Earn From <br /> <b>Freelancers</b></h1>
              <p>Our marketplace is a great opportunity to share with freelancers looking for a convenient and consistent way to get jobs. By referring them, not only are they rewarded with competitive paying jobs, but you are as well through commission. Immediately start getting rewarded the moment they land a job.</p>
              <button className="blue-button-affi">Learn More</button>
            </Service.Box>
          </Col>
          <Col xs="12" className="col-xl-7 col-lg-7 col-md-7 col-xs-12 order-1 order-lg-2" >
            <Service.Box>
              <Row>
                <Col xs="12" className="col-lg-6 pt-lg-7 mb-5 mb-lg-0">
                  <Service.Image>
                    <img src="image/home-startup/affiliate-image2.png" alt="content" className="w-100 "/>
                  </Service.Image>
                </Col>
                <Col xs="12" className="col-lg-6 mb-5 mb-lg-0">
                  <Service.Image>
                    <img src="image/home-startup/cheerful-young-women.png" alt="content" className="w-100 "/>
                  </Service.Image>
                </Col>
              </Row>
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
