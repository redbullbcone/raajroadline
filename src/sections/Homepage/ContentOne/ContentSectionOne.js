import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionOne({heading,content},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff" className='business-sec-altcards'>
  <Container>
  <h2 className='top-head  business-content-sec'>{heading}</h2>
  </Container>

   {content.map(row =>{
     
     return(
       <div className={`${row.bgclass}`}>
    <Container>
    <Row className={`${row.newclass} justify-content-center white-image ${(row.imagePosition == 'right') ? 'row d-flex flex-row-reverse'  : ''} `}>
      <Col xs="10" className="col-xl-5 col-lg-5 col-md-5 col-xs-5">
        <div className="gif-ImageGroup">
        <ImageGroup imageclass={row.imageclass} imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0" />
        <ImageGroup gifimageclass={row.gifimageclass} gifimageSrc={row.gifsrc} gifimageAlt={row.gifalt} mb="60px" mbLG="0" />
        </div>
      </Col>
      <Col className="col-xl-2 col-lg-1 col-md-1 col-xs-1"></Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-5 col-xl-5  col-lg-5  col-md-5 col-xs-5 business-altcard">
        <Content.Title as="h2">{row.title}</Content.Title>
        <div className='d-flex'><span className='orange-tick'><img src="image/homepage/Done.svg" /></span><Content.Text>{row.text1}</Content.Text></div>
        <div className='d-flex'><span className='orange-tick'><img src="image/homepage/Done.svg" /></span><Content.Text>{row.text2}</Content.Text></div>
        <div className='d-flex'><span className='orange-tick'><img src="image/homepage/Done.svg" /></span><Content.Text>{row.text3}</Content.Text></div>
        <Button className="blue-close" textTransform="capitalized">Learn More</Button>
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




