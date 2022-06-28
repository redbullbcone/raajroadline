import React from 'react'
import Content from './style'
import { SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContentSectionOne(){

return(
<Content>
  
    <Content.Inner className='backcolor'>
    <Container>
    <Content.SectionShape>
      <img src="image/intern/orange-Dot.png" alt="content" className="w-100"/>
    </Content.SectionShape>
    <Row className="align-items-center justify-content-center justify-content-lg-start convenience">
      <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
        <Content.TextBlock>
          <Content.Title as="h2"> <SuperTag value="Convenience"/> </Content.Title>
          <Content.Text> <SuperTag value="We make it easy for students to find internships from top companies. We give you the opportunity to work remotely which makes it easier to reconcile your studies with an internship that is going to give you valuable experience and a certificate of completion at the end."/> </Content.Text>
        </Content.TextBlock>
      </Col>
      <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2">
        <Content.Image>
          <img src="image/intern/Convenience.png" className='w-100'/>
        </Content.Image>
      </Col>
    </Row>
    </Container>
    </Content.Inner>
</Content>
)
}