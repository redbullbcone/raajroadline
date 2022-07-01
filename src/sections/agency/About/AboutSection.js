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
          <img className="w-100" src="image/recruitment-agency/graph.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content  mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="para1">
          <h1> <b>High Commission</b> <br /> Rates With No Deadline</h1>
          <p>Start earning immediately when your freelancers take up a project. Feel zero pressure knowing there is no deadline to your earnings until you reach the $1,000 mark. All that matters is how many freelancers you are able to sign up to the marketplace.</p>
        </About.Content>
      </Col>
    </Row>

    <Row className="align-items-center section-cards section2">
      
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card2">
          <h1>Be provided with <br /><b>Marketing Material</b></h1>
          <p>Get access to complete marketing material to help you promote, track, and create reports of everything affiliated-related. From various customizable banners to automated reports, have the freedom to fit them to your agency’s needs.</p>
        </About.Content>    
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Image className="image2">
          <img className="w-100" src="image/recruitment-agency/social-cubes.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
    </Row>

    <Row className="align-items-center section-cards">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Image className="image-about-1">
          <img className="w-100" src="image/recruitment-agency/screen1.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card3">
        <h1><b>Manage Freelancers</b><br />with our Employee<br />Monitoring App</h1>
          <p>Every freelancer that gets hired can be monitored with our easy to install tracking program. All completed activities are documented creating a great opportunity to measure productivity. This helps your client keep track of finished tasks and acts as proof of work for freelancers.</p>
        </About.Content>
      </Col>
    </Row>
    {/*/ .about-us Content */}
  </Container>
</About>

)
}
