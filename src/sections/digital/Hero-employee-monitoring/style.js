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
    padding-top: 100px;
    padding-bottom: 60px;
  }
  @media (min-width: 992px) {
    padding-top: 120px;
    padding-bottom: 80px;
  }
  @media (min-width: 1170px) {
    padding-top: 180px;
    padding-bottom: 120px;
  }
  @media (min-width: 1270px) {
    padding-top: 220px;
    padding-bottom: 160px;
  }
  @media (min-width: 1400px) {
    padding-top: 240px;
    padding-bottom: 190px;
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
  margin-right:16px;
}
.agency-btn2{
  background:#3183ff !important;
}
.opac-word{
  opacity:1;
}
`;
Hero.Text = styled(Paragraph)`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.619;
  margin-bottom: 55px;
  opacity: 1.0;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 992px) {
    font-size: 16px;
  }
  @media (min-width: 1170px) {
    font-size: 18px;
  }
`;
Hero.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1;
  margin-bottom: 20px;
  @media (min-width: 480px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 992px) {
    font-size: 54px;
  }
  @media (min-width: 1170px) {
    font-size: 48px;
  }
  @media (min-width: 1270px) {
    font-size: 54px;
  }
  @media (min-width: 1400px) {
    font-size: 60px;
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

  &:hover {
    
    
  }
  
`;

export default Hero;
