import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import Content from "./style"
import ImageGroup from './Components/ImageGroup';

export default function ContentVideoSectionOne({...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff" className='business-sec-altcards'>
<div>
        <div className='manage'>
        <Container>
          <Row className="justify-content-center white-image first-business-sec">
            <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard">
              <div className='business-text-sec'>
              <Content.Title as="h2"><b>Manage </b>your team with <br />our <b>Employee Monitoring</b> App</Content.Title>
              <Content.Text>Time is money. Get up-to-date productivity insights into tasks performed by the employees, freelancers, and agencies you hire. The MRKT365 Time Tracking app puts you back in control of your cost of labor. Start saving thousands on contractor and payroll costs.</Content.Text>
              <Button className="blue-close" textTransform="capitalized">Learn More</Button>
              {/* <Content.Button></Content.Button> */}
              </div>
            </Col>
            
            {/* <Col className="col-md-1"></Col> */}
            {/* Content Widgets */}
            <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 ">
              <ImageGroup imageclass="" imageSrc="image/marketing/screen2.png" imageAlt="" mb="60px" mbLG="0"/>
            </Col>
          </Row>
        </Container>
        </div>

        <div className='hire-virtual'>
        <Container>
          <Row className="justify-content-center white-image first-business-sec">
            <Col xs="10" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 ">
              <ImageGroup imageclass="" imageSrc="image/marketing/business-5.png" imageAlt="" mb="60px" mbLG="0"/>
            </Col>
            <Col className="col-md-1"></Col>
            {/* Content Widgets */}
            <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard">
              <div className='business-text-sec'>
              <Content.Title as="h2"><b>Hire Virtual Interns</b><br />from around the <b>Globe</b></Content.Title>
              <Content.Text>Add young talent to your team to boost understaffed projects. Find university-educated interns to work remotely on specified tasks. Our interns are ready to trade their hard work for experience. Interns can be international students, recent graduates, or professionals who want to kickstart their careers by helping your company.</Content.Text>
              <Button className="blue-close" textTransform="capitalized">Learn More</Button>
              {/* <Content.Button></Content.Button> */}
              </div>
            </Col>
          </Row>
        </Container>
        </div>
</div>
</Content>

</>
  )
  }




