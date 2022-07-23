import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InnerPromoShape from "~image/mixed/inner-banner-shape.png";
import Promo from './style'
 
export default function PromoSection({...rest}){
return(
<Promo backgroundColor="#1A75FF">
  <Container>
    <Row className="justify-content-center text-center">
      <Col className="col-xl-12">
        <Promo.Content>
          <Promo.Title fontColor="#fff" as="h2" mb="63px">Discover More Internship Opportunites </Promo.Title>

          <div className='promo-para text-white'>
            <p>
            Our internship platform connects businesses to students looking for valuable work experience to get ahead.
            <br />
            Work on a variety of projects that will accelerate your career growth and prepare you for your dream job.
            </p>        
          </div>

        </Promo.Content>
      </Col>
    </Row>
  </Container>
  <Promo.Shape>
    <img className="w-100" src="image/intern/green-half-circle.png" alt="inner shape" />
  </Promo.Shape>

  <div className='yellow-shape'>
    <img src="image/intern/yellow-shape.png" alt="inner shape"  />
  </div>

</Promo>

)
}