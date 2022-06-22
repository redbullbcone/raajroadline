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
    padding-top: 260px;
    padding-bottom: 195px;
  }

  @media(min-width:1400px){
    padding:249px 316px
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
`;

Hero.Content = styled(Box)`
.agency-btn1{
  background:#ff5722 !important;
  margin-right:27px;
}
.agency-btn2{
  background:#3183ff !important;
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
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media(min-width:1400px){
    font-size:21px;
    font-weight:400;
    line-height:30px;
  }

 
`;
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 25px;

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
  width: 180px;
  height: 57.37px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
  transition: 0.4s;
  border-radius: 10px!important;

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
