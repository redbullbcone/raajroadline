import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";

export default function ContentSectionOne() {
  return (
    <Content>
      <Container>
        <Content.InnerBlock>
          <Row className="justify-content-center">
            {/* about-us Content */}
            <Col xs="12" className="col-lg-7 col-md-6 col-xs-10">
              <Content.Box>
                {/* <Content.Subtitle as="h6" mb="40px" fontColor="#fd346e">
                  About us
                </Content.Subtitle> */}
                <Content.Title as="h2" mb="30px" mbXL="50px">
                We <span className="blue-txt">Pay</span> Affiliates <span className="blue-txt">More</span>
                </Content.Title>
                <Content.ImageOne mb="40px">
                  <img
                    src="image/home-digital-agency/young-business.png"
                    alt="content"
                    className="w-100"
                  />
                </Content.ImageOne>
              </Content.Box>
            </Col>
            {/*/ .about-us Content */}
            <Col xs="12" className="col-lg-4 offset-xl-1 col-md-6 col-xs-10">
              {/* <Content.Subtitle as="h6" mb="30px" fontColor="#fd346e">
                Our customer
              </Content.Subtitle> */}
              {/* <Content.Text mb="40px" mbXL="60px">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy
              </Content.Text> */}
              <Content.ImageTwo mb="40px">
                <img src="image/recruitment-agency/hand-shaking.png" alt="content" className="w-100"/>
              </Content.ImageTwo>
              <Content.Text mb="30px" ptXL="30px">
              MRKT365 is going to help your Recruitment<br /> Agency to <b>EARN MORE. INTEGRATE YOUR <br />TALENT POOL </b>into our marketplace and <br /> earn commission while the freelancers are <br />getting jobs. Use our <b>MARKETPLACE TO <br />HIRE TALENTS </b>for your clients and earn a <br /><b>50% </b>of our service fee up to $1000. 
              </Content.Text>
            </Col>
          </Row>
        </Content.InnerBlock>
      </Container>
    </Content>
  );
}
