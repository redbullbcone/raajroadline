import React from 'react'
import Promo from './style'
import { Col, Container, Row } from 'react-bootstrap'
 
export default function PromoSection({...rest}){
return(
<Promo>
    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center">
           <Promo.Title as="h2" className="text-center" mb="40px">Reaching over 1 billion <br /> people globally</Promo.Title>
        <Promo className="map-box-counter" style={{backgroundImage: `url("image/microsoft-ads/world-map.png")`}}>
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
           <div className=" map-location location1">
           <div className="map-icon">
             <img src="image/microsoft-ads/icon1.svg" className="icon"/>
           </div>
           <div className='map-details'>
           <span>600M</span>
           <p>
              Devices with Edge <br />
              installed globally*
          </p>
           </div>
           </div>

           <div className="map-location location2">
           <div className="map-icon">
             <img src="image/microsoft-ads/icon2.svg" className="icon"/>
           </div>
           <div className='map-details'>
           <span>719M</span>
           <p>
              Monthly unique<br />
              searchers globally**
           </p>
           </div>
           </div>

           <div className="map-location location3">
           <div className="map-icon">
             <img src="image/microsoft-ads/icon3.svg" className="icon"/>
           </div>
           <div className='map-details'>
           <span>484M</span>
           <p>
              Monthly unique<br />
              visitors globally**
           </p>
           </div>
           </div>

           <div className="map-location location4">
           <div className="map-icon">
             <img src="image/microsoft-ads/icon4.svg" className="icon"/>
           </div>
           <div className='map-details'>
           <span>108M</span>
           <p>
              Monthly unique <br />
              visitors globally**
           </p>
           </div>
           </div>

           <div className="map-location location5">
           <div className="map-icon">
             <img src="image/microsoft-ads/icon5.svg" className="icon"/>
           </div>
           <div className='map-details'>
           <span>69M</span>
           <p>
            Xbox live monthly<br />
            unique usersglobally**
           </p>
           </div>
           </div>

           <div className="bottom-text">
           <p>
             * Microsoft Internal Data <br />
             ** comScore, March 2021
           </p>
           </div>
        </Promo>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center">
        <Promo className="main-box-counter3">
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
           <Col className="col-md-12 promo-sec2">
           <Promo.Title as="h2" fontsize="56px" className="text-center pink-main-heading">Microsoft Advertising is expanding in EMEA in 2021</Promo.Title>
           </Col>
            {/* <Promo.Button className="btn-torch-red"  as="a"  href="#"  sizeX="180px" sizeY="56px" mt="20px">Booking</Promo.Button> */}
        </Promo>
        
      </Col>
      <Col className="main-pink-box">
      <Col className=' d-flex pink-text-box'>
          <Promo className="col-md-3 inner-box">
            <Promo className='inner-numb-box'>29</Promo>
            <Promo.Text className="inner-text">New markets launching in 2021</Promo.Text>
            <div className="vertical-line"></div>
          </Promo>
          <Promo className="col-md-3 inner-box">
            <Promo className='inner-numb-box'>19</Promo>
            <Promo.Text className="inner-text">New <br />languages</Promo.Text>
            <div className="vertical-line"></div>


          </Promo>
          <Promo className="col-md-3 inner-box">
            <Promo className='inner-numb-box'>41 M<sup>*</sup></Promo>
            <Promo.Text className="inner-text">People to <br />reach</Promo.Text>
            <div className="vertical-line"></div>


          </Promo>
          <Promo className="col-md-3 inner-box">
            <Promo className='inner-numb-box'>400 M<sup>*</sup></Promo>
            <Promo.Text className="inner-text">Monthly search <br />results to advertise on</Promo.Text>

          </Promo>
         </Col>
         <Promo.Text className="bottom-text">*Comscore qSearch (custom) data for Bing and Microsoft Search Sites, September 2020</Promo.Text>
         </Col>    
    </Row>

 
    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center">
        <Promo.InnerWrapper className="main-box-counter" style={{backgroundImage: `url("image/microsoft-ads/microsoft-section-bg-image.png")`}}>
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
           <Col className="col-md-12 main-promo-sec">
           <Promo.Title as="h2" fontColor="#fff" className="text-center">MRKT365 and Microsoft Partnership</Promo.Title>
            <Promo.Text fontColor="#fff" className="text-center">Microsoft has become an integral part of many organizations around the world. As such, MRKT365 has decided to partner up with them to provide your business with better marketing services. With this partnership, you will now find Microsoft-certified experts at our marketplace, make use of Microsoft Advertising, scan your Microsoft Account for AI recommendations, or get cashback from your Microsoft account expenses with our VPC.
             
            </Promo.Text>
           </Col>
            {/* <Promo.Button className="btn-torch-red"  as="a"  href="#"  sizeX="180px" sizeY="56px" mt="20px">Booking</Promo.Button> */}
        </Promo.InnerWrapper>
      </Col>
    </Row>
  
</Promo>

)
}