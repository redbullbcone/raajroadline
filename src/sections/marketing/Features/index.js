import React from "react";
import Image from "next/image";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TabContentWidget from "./Component/TabContentWidget";
import TabNavWidget from "./Component/TabNavWidget";
import Feature from "./style";
// import featureShape2 from "image/marketing/l1-full-circle-shape.png";
// import featureShape1 from "image/marketing/l1-half-circle-shape.png";
const FeatureSection = ({ ...rest }) => {
  return (
    <Feature className="bg-blue-ribbon blue-background-sec" style={{backgroundImage: `url("image/mixed/home-blue-background.jpg")`}}>
      
      <Container>
        <Row>
          <Col xs="auto" className="col-xl-8 col-lg-10 feature-sec">
            <Feature.Box mb="35px">
              <Feature.Title className="mb-2 feature-title" as="h2" fontColor="#fff">
                The Complete Business 
              </Feature.Title>
              <Feature.TitleTwo className="mb-5 feature-title2" as="h2" fontColor="#fff">
                 Automation Platform
              </Feature.TitleTwo>

              
              <Feature.Text className="mt-8" fontColor="#fff">
              Our dashboard analytics enables anyone at any level of 
                <br className="d-none d-xs-block" /> marketing expertise to make confident decisions
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
        >
          <Feature.Tab>
            <Col className="col-xxl-3 col-lg-3 col-md-12 col-xs-10 col-12">
              <Feature.TabNavWrapper className="nav row ms-0 me-0 feature-tabs" as={Nav}>
                <Nav.Link
                  eventKey="first"
                  className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fa fa-chart-pie" text="Employee Monitoring" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                <Nav.Link
                  eventKey="second"
                  className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                   <TabNavWidget iconClass="far fa-flag" text="Marketplace" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                <Nav.Link
                  eventKey="third"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fas fa-chart-line" text="Social Media Monitoring" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                </Feature.TabNavWrapper>
            </Col>
            <Col xs="auto" className="col-xxl-9 col-lg-9 col-md-12 col-sm-12">
            <Tab.Content className="tab-content tab-content--feature">
              <Tab.Pane eventKey="first">
                <Row className="align-items-center tab-contents">
                  <Col
                    className="col-md-4 col-sm-4 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="Activity Tracking" text={'Always know how employees & freelancers are using the time you paid for'}/>
                  </Col>
                  <Col
                    className="col-md-4 col-sm-4 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="Daily email reports" text={"Verify that the person doing the work is the one you hired, don't pay extra for subcontractors"}/>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row className="tab-contents">
                  <Col
                    className="col-md-4 col-sm-4 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="As a Freelancer" text={' Sign up as a freelancer & use our platform to find the perfect job for you'}/>
                  </Col>
                  <Col
                    className="col-md-4 col-sm-4 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="As a Business " text={'Browse our marketplace to find amazing talents that are going  to help you tackle your projects'}/>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row className="tab-contents">
                  <Col
                    className="col-md-4 col-sm-4 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="Reports & Data" text={'Optimize your business with reports and analytics from all  of your social media channels'}/>
                  </Col>
                  <Col
                    className="col-md-4 col-sm-4 col-xs-9"
                    xs="auto"
                    
                  >
                    <TabContentWidget  title="Lorem Ipsum " text={'simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry standard'}/>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          </Feature.Tab>
        </Tab.Container>
      </Container>
    </Feature>
  )
}

export default FeatureSection
