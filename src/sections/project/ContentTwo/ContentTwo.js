import React from 'react'
import Content from './style'
import { Link, SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';
export default function ContentSectionTwo(){

return(
<Content backgrounColor="#fff">
  {/* <Content.ContentShape>
    <img src="image/project-management/l2-content-2-shape.png" alt="content"/>
  </Content.ContentShape> */}
    <Content.Block>
    <div className='DotShape'>
      <img src="image/intern/light-green-Dot.png" alt="content" className="w-100"/>
   </div>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-lg-start backcolor2">
    {/* <img src="image/project-management/orange-dot.png" alt="content"/> */}
   
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <Content.Image>
           <img src="image/project-management/interns-2.jpg" className='international-image' />
        </Content.Image>
      </Col>
      <Col className='col-xl-1 col-lg-1 col-md-1 col-xs-0'></Col> 
      <Col xs="12" className="col-xl-5 col-lg-5 col-md-5 col-xs-12">
        <Content.Box>
          <Content.Title as="h2"> <SuperTag value="International Reach"/> </Content.Title>
          <Content.Text> <SuperTag value="Get global exposure working for top companies around the world that will give you mentorship and knowledge in your field of choice while you improve and learn new skills. Work on a variety of projects that will accelerate your career growth and prepare you for the future."/> </Content.Text>
        </Content.Box>
      </Col>

    </Row>
  </Container>
  <div className='blueBackground'>
    <div className='DotShape'>
      <img src="image/intern/voilet.png" alt="content" className="w-100"/>
    </div>
  
  
    <Container>
      <Row className="align-items-center justify-content-center justify-content-lg-start backcolor3">
      <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
          <Content.Box className='become-a-freelancer-box'>
            <Content.Title as="h2"> <SuperTag value="Become a <br> freelancer"/> </Content.Title>
            <Content.Text> <SuperTag value="We make it easy for students to find internships from top companies. We give you the opportunity to work remotely which makes it easier to reconcile your studies with an internship that is going to give you valuable experience and a certificate of completion at the end."/> </Content.Text>
          </Content.Box>
        </Col>
        <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2">
          <Content.Image className='interns-3-image'>
            <img src="image/project-management/interns-3.png" />
          </Content.Image>
        </Col>    
      </Row>
    </Container>
  </div>
  </Content.Block>  
</Content>
)
}