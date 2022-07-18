import React from 'react'
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from '~components'
import { Button } from "~styled";
import Hero from './style'

export default function HeroHireInterns(){
return(
<Hero overlay="image/hire-interns/Ellipse.png">
  <Container>
    <Row  className="align-items-center justify-content-center justify-content-md-start">
      <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
        <Hero.Content className="hire-intern-hero">
          <Hero.Title as="h2" fontColor="#000"><b>Complete</b> your Team   <br className="d-none d-sm-block"/>with <b>Eager Virtual</b> <br className="d-none d-sm-block"/>Interns</Hero.Title>
          <Hero.Text fontColor="#000">We Match <b>SKILLED INTERNS</b> to your Organization to enable <br className="d-none d-sm-block" />you to Complete your projects <b>FASTER & UNDER BUDGET</b></Hero.Text>
          <Hero.Newsletter mt="40px">
            <Form className="hero-form d-flex justify-content-between flex-row">
              <Hero.Box className="d-flex">
                      <Button className="btn-primary text-white hero-btn1 business-btn1" textTransform="capitalized">Create an Internship</Button>
                      <Button className="btn-light-blue text-white hero-btn2 intern-hero-btn-blue business-btn1 " textTransform="capitalized">Book a Demo</Button>
                    
              </Hero.Box>
            </Form>
          </Hero.Newsletter>
        </Hero.Content>
      </Col>
    </Row>
  </Container>
</Hero>

)
}