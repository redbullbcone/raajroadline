import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Feature from './style'
import SectionTitle from './Components/SectionTitle'
import CounterBlock from './Components/CounterBlock'
export default function FeatureSection(){
return(
<Feature backgroundColor="#fff">
  <Container>
    <Row>
      <Col className="col-xl-12 col-lg-12 text-center">
        <Feature.Box>
          <SectionTitle title="Our" title2="Support" titleProps={{mb:"33px"}}/>
        </Feature.Box>
      </Col>
    </Row>
    {/* <Row>
      <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
        <Feature.Box>
          <Feature.Text mrLG="30px">
            Business advisory service advises current and future businesses
            prospects of a client, with the aim of advancing their business or
            company. This service is used by all types of businesses and would
            involve examining the legal, tax, finance, market and risks factors
            involved to start up a business.
          </Feature.Text>
        </Feature.Box>
      </Col>
      <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
        <Feature.Box>
          <Feature.Text mrLG="30px">
            Business advisory service advises current and future businesses
            prospects of a client, with the aim of advancing their business or
            company. This service is used by all types of businesses and would
            involve examining the legal, tax, finance, market and risks factors
            involved to start up a business.
          </Feature.Text>
        </Feature.Box>
      </Col>
    </Row> */}
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-lg-6 col-md-12">
        <Feature.Image mb="30px">
          <img className="w-100" src="image/it-services/feature-l3-image.png" alt="it-service"/>
        </Feature.Image>
      </Col>
      <Col className="col-lg-6 col-md-12">
        <Feature.Box>
          {/* <Feature.Contentlist mbLG="65px" mb="30px">
            <Feature.List>Multi-page sites and one-page sites</Feature.List>
            <Feature.List>Built with Bootstrap 5</Feature.List>
            <Feature.List>Free updates and support</Feature.List>
          </Feature.Contentlist> */}
          <CounterBlock mt="50px"/>
        </Feature.Box>
      </Col>
    </Row>
  </Container>
</Feature>

)
}