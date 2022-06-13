import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionOne({heading,content},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff" className='business-sec-altcards'>
  
    <h2 className='top-head text-center business-content-sec'>{heading}</h2>

   {content.map(row =>{

    return(
    <div className={`${row.bgclass}`}>
    <Container>
    <Row className={`${row.newclass} align-items-center justify-content-center white-image ${(row.imagePosition == 'right') ? 'row d-flex flex-row-reverse'  : ''} `}>
      <Col xs="10" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 ">
        <ImageGroup imageclass={row.imageclass} imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0"/>
      </Col>
      <Col className="col-md-1"></Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 business-altcard">
        <Content.Title as="h2">{row.title}</Content.Title>
        <Content.Text>{row.text}</Content.Text>
        <Button className="btn-light-blue business-btn text-white ContentOne-btn" textTransform="capitalized">Learn More</Button>
        {/* <Content.Button></Content.Button> */}
      </Col>
      
    </Row>
    </Container>
    </div>
    )
   })
   
   
   }
    

  
</Content>

</>
  )
  }




