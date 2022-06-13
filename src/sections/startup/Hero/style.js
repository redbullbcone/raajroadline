import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Hero = styled(Box)`
  padding-top: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    padding-top: 70px;
  }
  @media (min-width: 992px) {
    padding-top: 70px;
  }
  @media (min-width: 1170px) {
    padding-top: 70px;
  }
  @media (min-width: 1270px) {
    padding-top: 100px;
  }
  @media (min-width: 1400px) {
    padding-top: 100px;
  }
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
font-size: 21px;
font-weight:700;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 25px;
  @media (min-width: 480px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
  @media (min-width: 1170px) {
    font-size: 50px;
  }
  @media (min-width: 1270px) {
    font-size: 60px;
  }
  @media (min-width: 1400px) {
    font-size: 70px;
  }
`;
Hero.Text = styled(Paragraph)`
  font-size: 21px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  margin-bottom: 0;
`;

Hero.Buttons = styled(Box)`
  .btn-hero-affiliate {
    margin-right: 18px;
    border-radius:10px!important;
  }
  .btn-affi-hero1{
    background: #FF5722;
    border-radius: 10px;
    width: 180px; 
    color:#fff;
    font-size:16px;
  }


  .btn-affi-hero2{
    background: #1A75FF;
    border-radius: 10px;
    width: 180px;
    color:#fff;
    font-size:16px;
  }
 
`;
Hero.Video = styled(Box)`

  .box-shadow{
    box-shadow: 0 10px 56px rgba(0, 0, 0, 0.2);
  }
  
  border-radius: 25px;
  @media (min-width: 1024px) {
    margin-left: 30px;
  }

  @media (min-width: 1600px) {
    margin-left: 67px !important;
  }

  .video-btn {
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    background-color: #5034fc;
    border-color: #5034fc;
    color: #fff;
    box-shadow: 0 0 0 0.2rem rgb(106 82 252 / 50%);
    outline: none;
    border-radius: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
  }
`;
Hero.Button = styled(Button)`
  min-width: 130px;
  height: 50px;
  font-size: 16px;
  transition: 0.4s;
  border-radius: 500px !important;
  &.btn-1 {
    box-shadow: -12px 12px 50px rgb(96 1 211 / 30%) !important;
    &:hover {
      box-shadow: -12px 12px 50px rgb(96 1 211 / 0%) !important;
    }
  }
  @media (min-width: 576px) {
    min-width: 180px;
    height: 56px;
    font-size: 15px;
  }
`;

export default Hero;
