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
              <h1>Earn with <br /> <b>Freelancers</b></h1>
              <p>Share our marketplace to contacts in your network looking for part-time or full-time freelance work. Earn commissions each time your referral gets paid for a job, it’s a win-win. Introduce your contacts to a job marketplace with freelance jobs of all sizes across multiple industries.</p>
              <a href="/freelancers" className="blue-button-affi">Learn More</a>
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
