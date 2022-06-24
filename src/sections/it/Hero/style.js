import styled from 'styled-components';
import { Box, Heading,Button, Paragraph } from '~styled';

const Hero = styled(Box)`
    overflow:hidden;
    padding-top: 125px;
    position: relative;
    padding-bottom:70px;
    @media (min-width:768px) {
        padding-top: 115px;
        padding-bottom: 110px;
    }

    @media (min-width:992px){
        padding-top: 185px;
        padding-bottom: 180px;
    }

    @media (min-width:1200px) {
        padding-top: 220px;
        height:975px;
    }

    .orange-text{
        color:#FF5722;

    }

`
Hero.Title = styled(Heading)`
    font-size: 38px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 1.2068;
    margin-bottom: 21px;
    color: #25373f;
    @media (min-width:768px) {
      font-size: 48px;
    }

    @media (min-width:992px) {
        font-size: 45px;
        font-weight: 700;
    }

    @media (min-width:1170px){
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
    }
    @media (min-width:1400px){
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
    }
`
Hero.Subtitle = styled(Heading)`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    margin-bottom: 28px;
`
Hero.Text = styled(Paragraph)`
    font-size: 21px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 34px;
    margin-top: 56px;
`


Hero.Button = styled(Button) `
    width: 266px;
    height: 56px;
    margin-bottom: 20px;
    margin-right: 15px;
    border-radius:50px;
    box-shadow: -8px 8px 50px rgb(255 87 34 / 50%);
    font-size:21px;

`
Hero.BtnGroup = styled(Box)`
    padding-top: 15px;
    margin-bottom: -20px;

    @media (min-width:992px) {
        padding-top: 28px;
    }
`

Hero.Box = styled(Box)``


export default Hero;