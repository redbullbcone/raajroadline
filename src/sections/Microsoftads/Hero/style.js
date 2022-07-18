import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Hero = styled(Box)`
  padding-top: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 1024px) {
    padding-top: 180px;
  }

  @media (min-width: 1024px) {
    padding-top: 100px;
  }


  .hero-img1{
    position: relative;
    z-index: 99;
    display:none;

    @media(min-width:992px){
      display:block;
      left: -30px;
      width: 80% !important;
      height: 100%;
      top: -4px;
    }

    @media(min-width:1170px){
      left: 88px;
      width: 60% !important;
      height: 100%;
      top: -25px;
    }
    
    @media(min-width:1270px){
      left: 88px;
      width: 60% !important;
      height: 100%;
      top: -25px;
    }
    @media(min-width:1400px){
      left: 88px;
      top:-15px;
    }
  }
  .hero-img2{
    display:none;

    @media(min-width:992px){
      display:block;
      left: -61px;
      width: 50% !important;
      height: 100%;
      top: 50px;
      position: relative;
    }


    @media(min-width:1170px){
      width: 40% !important;
      height: 100%;
      top: 24px;
      position: relative;
      left: 71px;

    }
    @media(min-width:1270px){
      width: 40% !important;
      height: 100%;
      top: 24px;
      position: relative;
      left: 71px;
    }
    @media(min-width:1400px){
      left: 80px;
      top:53px;
    }

  }
  padding-bottom: 124px;
`;

Hero.Content = styled(Box)``;
Hero.Subtitle = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: normal;
  line-height: 1.4285;
  margin-bottom: 20px;
`;
Hero.Title = styled(Heading)`
  font-size: 45px;
  font-weight:700;
  letter-spacing:normal;
  line-height:50px;
  margin-bottom: 25px;

  span{
    color: #FF5722;
  }


  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 70px;
    font-weight:700;
    line-height: 70px;
    margin-top: -85px;
  }

  @media(min-width:1170px){
    font-size: 60px;
    font-weight: 700;
    line-height: 62px;
    margin-top: -85px;
  }

  @media(min-width:1400px){
    font-size: 70px;
    font-weight:700;
    margin-top: -85px;
  }

 
`;
Hero.Text = styled(Paragraph)`
font-weight: 400;
font-size: 18px;
line-height: 28px;
width: 100%;

@media(min-width:992px){
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  width: 521px;
}
@media(min-width:1170px){
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  width: 521px;
}
@media(min-width:1270px){
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  width: 521px;
}
@media(min-width:1400px){
    font-weight: 400;
    font-size: 21px;
    line-height: 32px;
    width: 521px;
}
`;

Hero.Buttons = styled(Box)`
  .btn-hero-affiliate {
    margin-right: 18px;
    border-radius:50px!important;
    width: 310px;
    box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);
    font-size:18px;
    background:#FF5722;
    color:#fff;

    @media(min-width:992px){
      width: 324px;
      font-size:18px;
    }
    @media(min-width:1170px){
      width: 324px;
      font-size:18px;
    }
    @media(min-width:1270px){
      width: 324px;
      font-size:18px;
    }
    @media(min-width:1400px){
      font-size:21px;
      width: 388px;

    }
  }

  .btn-affi-hero1 :hover{
    background: #f98c6a;
  }

  .btn-affi-hero2{
    background: #1A75FF;
    border-radius: 10px;
    width: 180px;
    color:#fff;
  }
  .btn-affi-hero2 :hover{
    box-shadow: 3px 12px 50px #a8c3ec;

  }
`;
Hero.Video = styled(Box)`

  
`;
Hero.Button = styled(Button)`
 
`;

export default Hero;
