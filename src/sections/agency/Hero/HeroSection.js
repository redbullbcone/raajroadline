import React from 'react'
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from '~components'
import { Button } from "~styled";
import Hero from './style'

export default function HeroSection(){
return(
<Hero overlay="image/recruitment-agency/Ellipse.png" style={{backgroundImage: `url("image/recruitment-agency/affiliate-bg.png")`}}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-9 col-xl-9 col-lg-9 col-md-10">
        <Hero.Content className="business-hero">
          <Hero.Title as="h2" fontColor="#fff"><span>Connect</span> your Talent <br className="d-none d-sm-block"/>Pool to our <span>Global Market</span></Hero.Title>
          <Hero.Text fontColor="#fff"> Commission Rates <b>up to $1000</b><br />Access to an <b> Afiliate Dashboard</b><br className="d-none d-sm-block" />No <b>Deadline Limitations</b></Hero.Text>
           


          {/* Newsletter */}
          <Hero.Newsletter mt="40px">
            <Form className="hero-form d-flex justify-content-between flex-row">
              <Hero.Box className="d-flex">
                      {/* <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/> */}
                      <Button className="close" textTransform="capitalized">Become a Partner</Button>
                      {/* <Button className="close2 close2-btn" textTransform="capitalized">Book a Demo</Button> */}
                    
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