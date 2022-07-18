import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Hero = styled(Box)`
  padding-top: 125px;
  padding-bottom: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 0;
  @media (min-width: 768px) {
    padding-top: 145px;
    padding-bottom: 80px;
  }

  @media (min-width: 1024px) {
    padding-top: 150px;
    padding-bottom:150px;
    margin-bottom: -163px;

  }

  @media(min-width:1170px){
    padding-top: 150px;
    padding-bottom:0;
    margin-bottom: -163px;
  }

  @media(min-width:1400px){
    padding-top: 150px;
    padding-bottom:0;
    margin-bottom: 0;

  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
   
    position: absolute;
    z-index: -1;
  }

  .hero-right{
    display:none;

    @media(min-width:768px){
      display:block;
    }
  }
  .hero-image{
    position: relative;
    top: -153px;
   

    @media(min-width:768px){
      top: -132px;
      width: calc(100% + 65px);
    }

    @media(min-width:992px){
      top: -81px;
      width: calc(100% + 65px);
      left: -12px;
    }
    @media(min-width:1170px){
      top: -132px;
      width: calc(100% + 65px);
    }
    @media(min-width:1270px){
      top: -132px;
      width: calc(100% + 65px);

    }
    @media(min-width:1400px){
      top: -132px;
      width: calc(100% + 65px);

    }
  }
`;

Hero.Content = styled(Box)`
.agency-btn1{
  background:#ff5722 !important;
  margin-right:27px;
  position: relative;
  left: -15px;
  box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);

  &:hover {
    background: #f98c6a !important;
  }

  @media(min-width:992px){
  left: -38px;

  }

  @media(min-width:1170px){
  left: -75px;
  }


}
.agency-btn2{
  background:#3183ff !important;
  box-shadow: -8px 8px 50px rgba(26, 117, 255, 0.5) !important;
  position: relative;
  left: -32px;


  &:hover {
    background: #4e92f9 !important;
  }

}
.opac-word{
  opacity:1;
}
`;
Hero.Text = styled(Paragraph)`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 55px;
  text-align: left;

  b{
    color:#000;
    font-weight:700;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media(min-wdidth:992px){
    font-size: 16px;
    line-height: 32px;
  }

  @media(min-wdidth:1170px){
    font-size: 16px;
    line-height: 32px;
  }

  @media(min-wdidth:1270px){
    font-size: 16px;
    line-height: 32px; 
  }

  @media(min-width:1400px){
    font-weight: 500;
    font-size: 21px;
    line-height: 40px;
  }

 
`;
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 25px;
  text-align:left;

  b{
    color: #FF5722;
    font-weight:700;
  }

  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }
  @media(min-width:1400px){
    font-weight:700;
    font-size:70px;
  }


`;
Hero.Icon = styled(Box)`
  min-width: 66px;
  max-width: 66px;
  min-height: 66px;
  max-height: 66px;
  border-radius: 50%;
  box-shadow: -12px 12px 50px rgb(253 52 110 / 30%);
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  color: #fd346e;
  justify-content: center;
  margin-bottom: 38px;
  font-size: 21px;
`;

Hero.Button = styled(Button)`
  width: 150px;
  height: 57.37px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
  transition: 0.4s;
  border-radius: 50px!important;

  @media(min-width:992px){
    width: 180px;
  }

  @media(min-width:1400px){
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    width: 234px;
    height: 70px;
  }

  &:hover {
    
    
  }
  
`;

export default Hero;
