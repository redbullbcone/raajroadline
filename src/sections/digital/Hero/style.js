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
    padding-top: 226px;
    padding-bottom: 264px;
  }

  .black-text{
    color:#000;
  }



  &::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background:white;
    opacity: 0.5;
    position: absolute;
    z-index: -1;
  }
`;

Hero.Content = styled(Box)`
.agency-btn1{

  background:#ff5722 !important;
  margin-right:20px;
  box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);
  transition: 0.5s all ease;

  @media(min-width:992px){
  margin-right:43px;
  }

  @media(min-width:1400px){
    margin-right:69px;
  }


}

.agency-btn1 :hover{
  background: #f98c6a !important;
}
.agency-btn2{
  background:#1A75FF !important;
  box-shadow: -8px 8px 50px rgba(26, 117, 255, 0.5);
  transition: 0.5s all ease;
}

.agency-btn2 :hover{
  background: #4e92f9 !important;
}
.opac-word{
  opacity:1;
}
`;
Hero.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.619;
  margin-bottom: 55px;
  opacity: 0.7;
  text-align:left;
  @media (min-width: 768px) {
    font-size: 18px;
    text-align:left;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    text-align:left;
  }

  @media (min-width: 1170px) {
    font-size: 16px;
    text-align:left;

  }
  
  @media (min-width: 1400px) {
    font-size: 21px;
    text-align:left;

  }
  

`;
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 25px;
  text-align:left;


  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }

  @media (min-width: 1170px){
    font-size:60px;
    font-weight:700;
    line-height:72px;
  }

  @media (min-width: 1400px){
    font-size:70px;
    font-weight:700;
    line-height:72px;
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
  width: 127px;
  height: 45.37px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
  transition: 0.4s;
  border-radius: 50px!important;

  @media (min-width: 1024px) {
    width: 180px;
    height: 57.37px;

  }
  @media (min-width: 1170px) {
    width: 160px;
    height: 50.37px;

  }
  @media (min-width: 1400px) {
    width: 180px;
    height: 57.37px;

  }
  
`;

export default Hero;
