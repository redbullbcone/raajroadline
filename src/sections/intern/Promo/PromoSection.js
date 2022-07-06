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
          <Promo.Title fontColor="#fff" as="h2" mb="63px">Discover Internship Opportunites </Promo.Title>

          <div className='promo-para text-white'>
            <p>
            With the help of the MRKT365 internship program, students can gain valuable experience. They'll be 
            <br />
            working on a variety of projects that accelerate their career growth and prepare them for what's ahead  
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