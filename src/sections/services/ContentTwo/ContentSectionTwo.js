import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionTwo({content},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff">

   {content.map(row =>{

    return(
    <Container>
    <Row className={`align-items-center justify-content-space-between white-image ${(row.imagePosition == 'right') ? 'row d-flex flex-row-reverse' : ''} `}>
      <Col xs="10" className="col-xl-6 col-lg-5 col-md-6 col-xs-8 ">
        <ImageGroup imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0"/>
      </Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-4 col-xl-5 offset-xl-1 col-lg-6 offset-lg-1 col-md-8 col-xs-9 business-altcard hire-intern-card">
        <Content.Title as="h2">{row.title}<br /></Content.Title>
        <Content.Text>{row.text}<br /><br />{row.text2}<br /><br />{row.text3}</Content.Text>
        {/* <Content.Button></Content.Button> */}
      </Col>
      
    </Row>
    </Container>
    )
   })
   
   
   }
    

  
</Content>

</>
  )
  }




