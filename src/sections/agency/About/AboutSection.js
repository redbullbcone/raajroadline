import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components';
import About from './style'
import SectionTitle from './Components/SectionTitle'
import Video from '~components/VideoModal';
export default function AboutSection(){
return(
<About>
  <Container>
    <Row className="align-items-center section-cards ">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Image className="recruitment-image1">
          <img className="w-100" src="image/home-agency/recruitment-agencies-3.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content className='about-text-card2' mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            // subTitle="Watch video" 
            title="High Commission <br> Rates With No Deadline"
            text="Start earning immediately when your freelancers take up a project. Feel zero pressure knowing there is no deadline to your earnings until you reach the $1,000 mark. All that matters is how many freelancers you are able to sign up to the marketplace."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
    </Row>

    <Row className="align-items-center section-cards">
      
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Be provided with <br> Marketing Material"
            text="Get access to complete marketing material to help you promote, track, and create reports of everything affiliated-related. From various customizable banners to automated reports, have the freedom to fit them to your agency’s needs."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Image className="image2">
          <img className="w-100" src="image/home-agency/recruitment-agencies-4.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
    </Row>

    <Row className="align-items-center section-cards">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Image className="image-about-1">
          <img className="w-100" src="image/home-agency/recruitment-agencies-5.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card3">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Manage Freelancers <br> with our Employee <br> Monitoring App"
            text="Every freelancer that gets hired can be monitored with our easy to install tracking program. All completed activities are documented creating a great opportunity to measure productivity. This helps your client keep track of finished tasks and acts as proof of work for freelancers."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
    </Row>
    {/*/ .about-us Content */}
  </Container>
</About>

)
}
