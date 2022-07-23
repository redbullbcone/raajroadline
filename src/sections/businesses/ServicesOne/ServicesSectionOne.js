import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import ServiceData  from "~data/startup/service"
import Service from './style'
import SectionTitle from './Components/SectionTitle'
import  ServicesCard from "./Components/Card"
export default function ServicesSectionOne({content, title}){
return(
<Service className="custom-background discover-tl business-sec1">
  <Container>
    <Row className="justify-content-center ">
      <Col className="col-xl-12 text-center service-section recruitment-agency-section">
        <SectionTitle 
        // subTitle="Our Services" 
        title={title}
        titleProps={{mb:"40px", mbLG:"75px"}}
        // subTitleProps={{mb:"10px", className:"subline"}}
        />
      </Col>
    </Row>
    <Row className="justify-content-center aos-init aos-animate homepage-provide-feature" data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true">
      {/* Single Services */}
      {content.map(({ title,title2, bgImageClass, icon, image, text2, text3, text,cardbg,whiteImage,whiteImageClass,id,linkPage,  }) => {
              return (
              <Col xs="h2" className="col-xl-4 col-lg-4 col-sm-6 col-xs-8" key={id}>
                <ServicesCard 
                  title={title}
                  title2={title2}
                  bgImageClass={bgImageClass}
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
      {/*/ .Single Services */}
    </Row>
  </Container>
</Service>

)
}