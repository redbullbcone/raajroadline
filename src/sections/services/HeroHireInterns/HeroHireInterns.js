import React from 'react'
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from '~components'
import { Button } from "~styled";
import Hero from './style'

export default function HeroHireInterns(){
return(
<Hero overlay="image/home-services/hero-overlay.png" style={{backgroundImage: `url("image/home-services/hire-interns-bg.png")`}}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
        <Hero.Content className="hire-intern-hero">
          <Hero.Title as="h2" fontColor="#fff">Complete your Team with  <br className="d-none d-sm-block"/> Eager Virtual Interns</Hero.Title>
          <Hero.Text fontColor="#fff"> We Match Skilled Interns to your <br className="d-none d-sm-block" /> Organization to enable you to Complete <br className="d-none d-sm-block" />your projects Faster & Under Budget</Hero.Text>

          {/* Newsletter */}
          <Hero.Newsletter mt="40px">
            <Form className="hero-form d-flex justify-content-between flex-row">
              <Hero.Box className="d-flex">
                      {/* <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/> */}
                      <Button className="btn-primary text-white hero-btn1 business-btn1" textTransform="capitalized">Create an Internship</Button>
                      <Button className="btn-light-blue text-white hero-btn2 intern-hero-btn-blue business-btn1 " textTransform="capitalized">Book a Demo</Button>
                    
              </Hero.Box>
              {/* <Hero.NewsletterButton className="btn-torch-red" as={Link} to="/">Start for free</Hero.NewsletterButton> */}
            </Form>
            {/* <Hero.NewsletterText>Get latest templates right at your inbox</Hero.NewsletterText> */}
          </Hero.Newsletter>
          {/*/ .Newsletter */}
        </Hero.Content>
      </Col>
      {/*/ .Welcome Content Area */}
    </Row>
  </Container>
</Hero>

)
}