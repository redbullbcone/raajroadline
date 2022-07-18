import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import CountUp from "react-countup";
import Counter from './style'
import LazyLoad from "react-lazyload";
import { SuperTag } from "~components";

export default function CounterSection() {
  return (
      <Counter className="d-flex flex-column align-items-center">
         <h2 className="get-started-heading col-md-6 col-lg-8">We Ensure that who you hire <br />is the one doing the job</h2>
        <Container>
            <Row className="row justify-content-center text-center">
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  {/* <Counter.Single>s */}
                  <Counter.Text className="d-flex flex-column counter-card align-items-center">
                    <img className="counter-icons" src="image/home-services/count.png" alt="content" />
                    <h5>Profile</h5>
                    <p>We get our vendors <br />to create an extensive<br /> profile.</p>
                    </Counter.Text>
                 
                  {/* </Counter.Single> */}
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                    <Counter.Text className="d-flex flex-column counter-card align-items-center">
                    <img className="counter-icons" src="image/home-services/count2.png" alt="content" />
                    <h5>Video Interview</h5>
                    <p>Vendors attend a video<br /> interview for verification <br />purpuses.</p>
                    </Counter.Text>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Text className="d-flex flex-column counter-card align-items-center">
                  <img className="counter-icons" src="image/home-services/count3.png" alt="content" />
                  <h5>Freelancer Verification</h5>
                    <p>Our vendors are KYC <br />and AML verified by <br />a third party.</p>
                    </Counter.Text>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Text className="d-flex flex-column counter-card align-items-center">
                  <img className="counter-icons" src="image/home-services/count4.png" alt="content" />
                  <h5>MRKT365 Verification</h5>
                    <p>
                    We review all vendors profiles <br />before letting our AI suggest<br /> them to you.
                    </p>
                    </Counter.Text>
                </LazyLoad>
              </Col>
            </Row>
        </Container>
      </Counter>
  )
}
