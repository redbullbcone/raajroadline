import React from 'react'
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from '~components'
import { Button } from "~styled";
import Hero from './style'

export default function HeroSection(){
return(
<Hero overlay="image/recruitment-agency/Ellipse.png" style={{backgroundImage: ``}}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-9 col-xl-9 col-lg-9 col-md-10">
        <Hero.Content className="business-hero">
          <Hero.Title as="h2" fontColor="#fff">MRKT365<br className="d-none d-sm-block"/><span>Affiliate Program</span></Hero.Title>
          <Hero.Text fontColor="#fff"> Choose the service that fits you <b>THE BEST.</b><br />Earn up to <b>$1000 PER REFERRAL.</b><br className="d-none d-sm-block" />It’s that<b> EASY.</b></Hero.Text>
           


          {/* Newsletter */}
          <Hero.Newsletter mt="40px">
            <Form className="hero-form d-flex justify-content-between flex-row">
              <Hero.Box className="d-flex">
                      {/* <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/> */}
                      <Button className="close" textTransform="capitalized">Apply Now</Button>
                      {/* <Button className="close2" textTransform="capitalized">Book a Demo</Button> */}
                    
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