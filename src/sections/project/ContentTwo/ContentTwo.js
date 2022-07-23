import React from 'react'
import Content from './style'
import { Link, SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';
export default function ContentSectionTwo(){

return(
<Content backgrounColor="#fff">
  {/* <Content.ContentShape>
    <img src="image/intern/l2-content-2-shape.png" alt="content"/>
  </Content.ContentShape> */}
    <Content.Block>
    <div className='DotShape'>
    <img src="image/intern/light-green-Dot.png" alt="content" className="w-100"/>
   </div>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-lg-start backcolor2">
    {/* <img src="image/project-management/orange-dot.png" alt="content"/> */}
   
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-12">
        <Content.Image>
           <img src="image/intern/International-Reach.png" className='international-image' />
        </Content.Image>
      </Col>
      <Col className='col-xl-1 col-lg-1 col-md-1 col-xs-0'></Col> 
      <Col xs="12" className="col-xl-5 col-lg-5 col-md-5 col-xs-12">
        <Content.Box>
          <Content.Title as="h2"> <SuperTag value="International Reach"/> </Content.Title>
          <Content.Text> <SuperTag value="Get great exposure by working with top companies from around the world. Expand your mentorship opportunities in your dream industry. Gain more skills by working in new markets. Work on a variety of projects that will accelerate your international career growth."/> </Content.Text>
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
            <Content.Title as="h2"> <SuperTag value="Graduate to a freelancer"/> </Content.Title>
            <Content.Text> <SuperTag value="Turn your hard work and experience into a new side hustle! Complete your internship and become a freelancer with MRKT365. Use your newfound skills to work with larger companies while earning money as an entrepreneur."/> </Content.Text>
          </Content.Box>
        </Col>
        <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2 col-12">
          <Content.Image className='interns-3-image'>
            <img src="image/intern/freelancer.png" />
          </Content.Image>
        </Col>    
      </Row>
    </Container>
  </div>
  </Content.Block>  
</Content>
)
}