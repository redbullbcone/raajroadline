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
       
        <h2>We are <b>Microsoft Ads</b><br />Partners</h2>
        <p>In recent years Microsoft has become an integral marketing funnel for many businesses. As such, MRKT365 decided to partner with Microsoft to provide businesses with smarter marketing services. Our partnership enables us to source Microsoft-certified experts to our marketplace, scan Microsoft Ads accounts to deliver advanced reporting with AI recommendations, and earn businesses a cashback with Microsoft Ads when used with our VPC.

</p>

        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center" >
      <div className='d-flex section1'>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card1">
       
        <h2><b>Unlock more revenue</b><br />with AI</h2>
        <hr></hr>
        <p>Expand the possibilities of <b>Microsoft Ads</b> by integrating it with our <b>AI Platform</b> or <b>Talent Marketplace.</b> Increase your reach with brand new audiences that are relevant to your business. Link your existing <b>Microsoft Ads</b> account or create a new one with us and <b>Receive a $250 ad credit.</b> Sign up for free and start advertising with any budget.</p>

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
        <h2><b>Find</b> Certified <br /> <b>Microsoft</b> Ads <br />Specialists</h2>
        <p>Start your marketing with Microsoft Ads the right way. Find dozens of Microsoft-certified experts at various price points in our marketplace that will help your revenue grow. Receive AI recommendations of vendors that fit your specific needs. Track their work with our monitoring app and rest assured that the vendors you hire are doing the work.</p>
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex alt-card2 main-container2">
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card3">
       <h2><b>Scan</b> your Account to get<br/><b>AI recommendations</b></h2>
       <p>Make sure your Microsoft Ads account is optimized for all your marketing campaigns and needs through our AI scans. Receive actionable AI marketing recommendations and a short list of candidates to boost your marketing campaigns. Use our data to skip the learning curve when starting new marketing campaigns.</p>
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
        <h2>Earn<b> Cashback</b> with<br /> <b>Microsoft Ads</b></h2>
        <p>Apply for a virtual prepaid card and earn cashback on all pay-per-click ad spend including Microsoft Ads, Google Ads, and Facebook Ads. Easily manage all of your marketing expenses and budget effectively without overpaying for unwanted subscription services.</p>
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex main-section3" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 ">
        <Content.Box className="txt-card5">
        <h2><b>Free</b> Monthly<br />Reporting<br /></h2>
        <p>Receive monthly reports to further optimize your marketing campaigns. Discover how to get over marketing roadblocks. Find which campaigns are performing exceptionally well and replicate the results for underperforming campaigns. Use the reports to effectively create better and more effective marketing strategies that save you time, money, and generate more sales!</p>
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
       
        <h2>Easy transfer <b>PPC</b><br />data to<b> Microsoft</b></h2>
        <p>Import existing campaigns with ease. If you're already using another product like Google Ads or Facebook Ads, it's easy to transfer that campaign into Microsoft Advertising.</p>

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