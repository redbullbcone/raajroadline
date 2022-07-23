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
        title="Get Projects "
        title2="Done Faster"
        text="We offer end-to-end solutions to get the job done to a high standard & meet your deadline."
        // subTitleProps={{mb:"27px"}}
        // titleProps={{mb:"10px",as:"h2"}}
        // mb="20px"
         />
        <button className='button-service-sec'>Join as a business</button>

      </Col>
      {ServiceData.map(({ title,title2,title3, icon, image, text2, text3, text,cardbg,whiteImage,whiteImageClass,id,linkPage,  }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-10"
                  key={id}
                >
                <ServicesCard 
                  title={title}
                  title2={title2}
                  title3={title3}
                  text={text}
                  text2={text2}
                  text3={text3}
                  icon={icon}
                  image={image}
                  linkPage={linkPage}
                  cardbg={cardbg}
                  whiteImage={whiteImage}
                  whiteImageClass={whiteImageClass}
                  
                />
                
              </Col>
              )
            })}
    </Row>
  </Container>
</Service>

)
}