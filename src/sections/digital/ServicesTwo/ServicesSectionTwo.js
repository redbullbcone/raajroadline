import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./Components/Card";
import Service from "./style";

export default function ServicesSectionTwo() {
  return (
    <Service>
      <Container>
        <Row>
          <Col xs="12" className="col-xl-5 col-lg-6 col-md-9 col-xs-10 order-2 order-lg-1 main-employee-monitiring" >
            <Service.Title as="h2" mb="40px" className="employe-monitoring-sec">
            Feel Confident Knowledge that Everyone is Working on
            the Right Tasks
            </Service.Title>
           <Service.Text>
           Our employee monitoring software is included with all businesses
          accounts to manage freelancers and employees.
           </Service.Text>
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 offset-xxl-1 col-xl-7 col-lg-6 col-md-11 order-1 order-lg-2 service-card-left-section"
          >
            <Service.Box mlXL="35px" mb="20px" mbLG="0px" className='service-card-left-section-inner'>
              <ServiceCard
                image="image/home-digital-agency/employee-monitoring-1.svg"
                title="Computer Activity Tracking"
                text="Always know how employees & freelancers are using the time you paid for."
                mb="25px"
              />
              <ServiceCard
                image="image/home-digital-agency/employee-monitoring-2.svg"
                title="Verify your Experts"
                text="Verify that the person doing the work is the one you hired, don't pay extra for subcontractors."
                mb="25px"
              />
              <ServiceCard
                image="image/home-digital-agency/employee-monitoring-3.svg"
                title="Budget with Confidence"
                text="Know how much you are being billed by freelancers."
                mb="25px"
              />
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
