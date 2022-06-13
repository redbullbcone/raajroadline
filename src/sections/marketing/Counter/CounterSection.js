import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import CountUp from "react-countup";
import Counter from './style'
import LazyLoad from "react-lazyload";
import { SuperTag } from "~components";

export default function CounterSection() {
  return (
      <Counter>
         <h2 className="partners-logo-heading">Our Partners</h2>
        <Container>
            <Row className="row justify-content-center text-center">
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                  <Counter.Text>
                    <img src="image/marketing/jp-morgan.jpg" alt="shape1" className="partner-logo" />
                    </Counter.Text>
                 
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                    <Counter.Text>
                    <img src="image/marketing/us-bank.jpg" alt="shape1" className="partner-logo" />
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                  <Counter.Text>
                    <img src="image/marketing/logo3.jpg" alt="shape1" className="partner-logo" />
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
            </Row>

        </Container>
      

<Container>
   <Row className="row justify-content-center text-center">
     <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
       <LazyLoad>
         <Counter.Single>
         <Counter.Text>
           <img src="image/marketing/visa.jpg" alt="shape1" className="partner-logo" />
           </Counter.Text>
        
         </Counter.Single>
       </LazyLoad>
     </Col>
     <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
       <LazyLoad>
         <Counter.Single>
           <Counter.Text>
           <img src="image/marketing/google-new.jpg" alt="shape1" className="partner-logo new-partner-logo" />
           </Counter.Text>
         </Counter.Single>
       </LazyLoad>
     </Col>
     <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
       <LazyLoad>
         <Counter.Single>
         <Counter.Text>
           <img src="image/marketing/microsoft-new.jpg" alt="shape1" className="partner-logo new-partner-logo" />
           </Counter.Text>
         </Counter.Single>
       </LazyLoad>
     </Col>
   </Row>

</Container>

</Counter>
  )
}
