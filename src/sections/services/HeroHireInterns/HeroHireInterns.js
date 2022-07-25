import React from 'react'
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from '~components'
import { Button } from "~styled";
import Hero from './style'

export default function HeroHireInterns(){
return(
<Hero overlay="image/hire-interns/Ellipse.png" className='demo-height comple-YOur-sec'>
  <Container>
    <Row  className="align-items-center justify-content-center justify-content-md-start">
      <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
        <Hero.Content className="hire-intern-hero">
          <Hero.Title as="h2" fontColor="#000">Hire <b>Virtual Interns</b><br className="d-none d-sm-block"/> to <b>Complete</b> your team</Hero.Title>
          <Hero.Text fontColor="#000">Complete your team by<b> HIRING EAGER INTERNS</b> to complete  <br className="d-none d-sm-block" />your projects faster and under budget</Hero.Text>
          <Hero.Newsletter mt="40px">
            <Form className="hero-form d-flex justify-content-between flex-row">
              <Hero.Box className="d-flex">
                      <Button as={Link} to="https://platform.mrkt365.com/register" className="btn-primary text-white hero-btn1 business-btn1" textTransform="capitalized">Create an Internship</Button>
                      <Button as={Link} to={"https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo?month=2022-07"} className="btn-light-blue text-white hero-btn2 intern-hero-btn-blue business-btn1 " textTransform="capitalized">Book a Demo</Button>
                    
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