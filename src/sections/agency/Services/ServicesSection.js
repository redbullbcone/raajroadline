import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesCard from './Components/Card'
import ServiceData from "~data/agency/Service"
import SectionTitle from './Components/SectionTitle'
import Service from './style'
export default function ServiceSection(){
return(
<Service backgroundColor="#f3f4f6">
  <Container>
    <Row className="row justify-content-center">
      <Col xs="12" className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-10">
      <SectionTitle
        // subTitle="Our Services" 
        title="For Businesses"
        text="We have end-to-end solutions that can keep up with you and your standards"
        // subTitleProps={{mb:"27px"}}
        // titleProps={{mb:"10px",as:"h2"}}
        // mb="20px"
         />
        <button className='button-service-sec'>Become a Client</button>

      </Col>
      {ServiceData.map(({ title,title2, icon, image, id, iconColor }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-10"
                  key={id}
                >
                <ServicesCard
                  title={title}
                  title2={title2}
                  icon={icon}
                  image={image}
                  to="/"
                  iconBackground={iconColor}
                />
                
              </Col>
              )
            })}
    </Row>
  </Container>
</Service>

)
}