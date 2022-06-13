import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Content = styled(Box)`
  padding-top: 60px;
  padding-bottom: 55px;
  

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 75px;
  }

  @media (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
  @media (min-width: 1200px) {
    padding-top: 130px;
    padding-bottom: 135px;
  }

  @media(min-width:1400px){

  }

  h2{
    font-weight: 700;
font-size: 45px;
line-height: 62px;
letter-spacing: -1px;
width: 516px;
padding-right: 11px;
padding-top: 77px;

@media(min-width:992px){
  font-size:40px;
  line-height:60px;
}

@media(min-width:1400px){
  margin-bottom:20px;
}
  }


  .background2{
    padding-bottom:90px;
  }

  .right-side-para{
    left:91px;
    top: 40px;

    @media(min-width:992px){
      left: 69px;
    }

  }
  .left-para2{
    top: 113px!important;
  }

  .off-blue-background{
    background-color:#F4F9FC;
  }
`;
Content.Title = styled(Heading)`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  position: relative;
  @media (min-width: 768px) {
    font-weight: 700;
  font-size: 70px;
  line-height: 66px;
  }

  @media(min-width:992px){
    font-size: 40px ;
    line-height: 50px;
  }

  @media (min-width: 1024px) {
    font-weight: 700;
  font-size: 70px;
  line-height: 66px;
  width: 639px;

  }

  @media(min-width:1400px){
    font-size:60px;
  }
`;
Content.Subtitle = styled(Heading)`

`;
Content.Text = styled(Paragraph)`
 
width: 471px;
font-weight: 400;
font-size: 18px;
line-height: 32px;
opacity: 0.7;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media(min-width:992px){
    font-size:16px;
  }
  
`;
Content.Button = styled(Button)`
  color: #fff !important;
  background-color: #1974FF !important;
  border-radius: 10px !important;
  

`;

Content.Images = styled(Box)`
  display: flex;
  align-items: center;
  @media (min-width: 575px) {
    right: -15%;
  }
  @media (min-width: 768px) {
    right: -25%;
  }
  @media (min-width: 1200px) {
    right: -20%;
  }
`;

Content.ImageOne = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 40%;
  }
`;
Content.ImageOneInner = styled(Box)`
  transform-origin: top left;
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -60%;
    width: 200%;
    transform: skewX(15deg);
  }

  @media(min-width:992px){
    left: -86%;
  }
`;
Content.ImageTwo = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 40%;
  }
`;
Content.ImageTwoInner = styled(Box)`
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -28%;
    width: 200%;
    transform: skewX(15deg);
  }
  @media(min-width:992px){
    left: -42%;
  }
`;
Content.Imageup = styled(Box)`
width: 330px;
height: 577px;
overflow: hidden;
height:100%;
border-radius:10px;
right: 75px;
top: -18px;
`
Content.Imagedown = styled(Box)`
width: 330px;
height: 100%;
overflow: hidden;
height:100%;
border-radius:10px;
right: 109px;
top: 73px;
`
Content.Box = styled(Box)`
padding-bottom: 179px;

`;

export default Content;
