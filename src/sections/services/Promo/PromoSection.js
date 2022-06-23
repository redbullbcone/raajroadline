import React from 'react'
import Promo from './style'
import { Col, Container, Row } from 'react-bootstrap'
 
export default function PromoSection({...rest}){
return(
<Promo>
    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center">
        <Promo.InnerWrapper style={{backgroundImage: `url("image/home-services/promo-l4-img.png")`}}>
         <Container>
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
           <Col className="col-md-7 intern-promo-sec">
           <Promo.Title as="h2" fontColor="#fff" >Why Create an Internship<br /> with Us?</Promo.Title>
            <Promo.Text fontColor="#fff">We are world leaders in providing virtual internships to<br className="d-none d-sm-block" /> companies and we partner with leading international<br className="d-none d-sm-block" />  universities to source the best candidates for you.
             
            </Promo.Text>
           </Col>
            {/* <Promo.Button className="btn-torch-red"  as="a"  href="#"  sizeX="180px" sizeY="56px" mt="20px">Booking</Promo.Button> */}
         </Container>
        </Promo.InnerWrapper>
      </Col>
    </Row>
  
</Promo>

)
}