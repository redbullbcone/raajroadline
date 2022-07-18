import React, { useRef } from 'react'
import Slider from "react-slick"
import TestiomialCard from './Component/Card'
import Testimonial from './style'
import TestimonialData from '~data/startup/testimonial'
import { Container, Row, Col } from 'react-bootstrap'
export default function   TestimonialSection(){
return(
<Testimonial backgroundColor="#fff">
  <Container>
    <Row className="align-items-center justify-content-center ">
      <Col xs="12" className="col-lg-12 col-xl-12 col-xxl-12 text-center">
        <Testimonial.Box >
          <Testimonial.Title fontColor="#262729" as="h2">Why be an Affiliate?</Testimonial.Title>
          <Testimonial.Content>
        <p className="affiliate-para">The MRKT365 Partner Program is an easy way to increase your earnings. No matter who you refer, you will be compensated equally. However, the more you refer, the more you earn! Earn from Freelancers, Businesses, and VPC users or as an HR agency.</p>
        </Testimonial.Content>
        </Testimonial.Box> 
      </Col>
    </Row>
  </Container>
</Testimonial>

)
}