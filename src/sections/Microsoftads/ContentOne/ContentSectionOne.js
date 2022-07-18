import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function   ContentSectionOne(){
return(
<Content>
  <Container>

    <Row className="align-items-center justify-content-center" >
      <div className='d-flex section0'>
      <Col xs="12" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 order-1 order-lg-1 ">
        <Content.Image className="image-card">
          <img src="image/microsoft-ads/image1.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
        
      </Col>
      <Col className='col-lg-1 col-md-1'></Col>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ">
        <Content.Box className="txt-card">
       
        <h2><b>MRKT365 </b>&<b> Microsoft</b><br />Partnership</h2>
        <p>Microsoft has become an integral part of many organizations around the world. As such, MRKT365 has decided to partner up with them to provide your business with better marketing services. With this partnership, you will now find Microsoft-certified experts at our marketplace, make use of Microsoft Advertising, scan your Microsoft Account for AI recommendations, or get cashback from your Microsoft account expenses with our VPC.</p>

        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center" >
      <div className='d-flex section1'>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card1">
       
        <h2><b>Make Connections</b> with<br />MRKT365’s Platform</h2>
        <hr></hr>
        <p>Make use of <b>MICROSOFT ADVERTISING</b> by complementing it with <b>MRKT365’S PLATFORM</b> and bring your marketing to the next level. <b>INCREASE YOUR REACH</b> towards audiences that are relevant to your business. Link your Microsft account now with <b>MRTK365 FOR FREE.</b> To help you get started. <b>RECEIVE A $250 USD FREE AD CREDIT</b> when you create a new account.</p>

        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 ">
        <Content.Image className="image-card1">
          <img src="image/microsoft-ads/image2.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <div className=" d-flex main-container">
      <Col  className="col-xl-6 col-lg-6 col-md-6 col-xs-7 order-1 order-lg-1">
        <Content.Image className="image-card2">
          <img src="image/microsoft-ads/image3.png"  alt="content" className="resp-image main-img1 w-100"/>
        </Content.Image>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-5 order-2 order-lg-2 ">
        <Content.Box className="text-card2">
        <h2><b>Find</b> Microsoft Ads <br /> <b>Specialists</b> in our <br />Marketplace</h2>
        <p>Start your journey with Microsoft Advertising the right way. Find many Microsoft-certified experts at various price points in our marketplace that can help your business grow. Receive AI recommendations of vendors we find fitting your specific needs. Track their work through our monitoring tools and be assured that the vendors you hire are the ones doing the work.</p>
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex alt-card2 main-container2">
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card3">
       <h2><b>Scan</b> your Account & get<br/><b>AI recommendations</b></h2>
       <p>Make sure your Microsoft Advertising platform is optimized for all your marketing campaigns and needs through our AI scans. Receive AI recommendations for changes and a short list of candidates to choose from based on your needs. Let us break it down for you to clearly show where opportunities are hidden.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2">
        <Content.Image className="image-card3">
          <img src="image/microsoft-ads/stats.png"  alt="content" className="resp-image main-img2 w-100"/>
        </Content.Image>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <div className=" d-flex main-container">
      <Col  className="col-xl-6 col-lg-6 col-md-6 col-xs-7 order-1 order-lg-1">
        <Content.Image className="image-card7">
          <img src="image/microsoft-ads/image5.png"  alt="content" className="resp-image main-img1 w-100"/>
        </Content.Image>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-5 order-2 order-lg-2 ">
        <Content.Box className="text-card2">
        <h2>Earn<b>Cashback</b> on<br /> <b>Microsoft Adds</b><br />with our <b>Virtual </b><br /><b>Prepaid Cards</b></h2>
        <p>Apply for our virtual prepaid cards and earn cashback on all pay-per-click ad spend including Microsoft Ads, Google Ads, and Facebook Ads. Easily manage all your marketing expenses and budget effectively without overpaying for unwanted subscription services.</p>
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex main-section3" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card5">
        <h2><b>Free</b> Monthly<br />Recommendation<br /><b>Reports</b></h2>
        <p>Receive monthly recommendation reports to further optimize your marketing campaigns. Know exactly where and what is hindering your marketing efforts. Or find which campaigns are performing exceptionally well to replicate it to underperforming or future campaigns. Alongside recommendations, use the reports to effectively create better and more effective marketing strategies.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2">
        <Content.Image className="image-card5">
          <img src="image/microsoft-ads/image6.png"  alt="content" className="resp-image main-img5 w-100"/>
        </Content.Image>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center" >
      <div className='d-flex section6'>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ">
        <Content.Box className="txt-card6">
       
        <h2>Easy to <b>Connect</b> to<br />your <b>Google</b> and <br /> <b>Facebook</b>accounts</h2>
        <p>Have all your marketing platforms integrated into one place. Easily connect and manage marketing campaigns from your Google and Facebook accounts through the Microsoft platform. Get an overall better view and understanding of your campaigns to know what is and is not working.</p>

        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1 ">
        <Content.Image className="image-card1">
          <img src="image/microsoft-ads/image7.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
        
      </Col>
      </div>
    </Row>

  </Container>
</Content>
)
}