import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Promo = styled(Box)`
    padding-top: 60px;
    padding-bottom: 20px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    @media (min-width:1024px) {
        padding-top: 100px;
        padding-bottom: 110px;
    }
    .intern-promo-sec{
        text-align: left;

        @media (min-width:992px) {
            margin-left:0;
         }

        @media (min-width:1170px) {
            margin-left:90px;
         }

        @media (min-width:1400px) {
           margin-left:90px;
        }

    }
`
Promo.Title = styled(Heading)`
    font-size: 48px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    margin-top: 15px;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
        font-size: 36px;
        font-weight:400px;
      }
    
    @media (min-width:1024px) {
      font-size: 36px;
    }

    @media (min-width:1170px) {
        font-size: 46px;
        margin-bottom:32px;
    }

    @media (min-width:1400px) {
        font-size: 48px;
        margin-bottom:32px;
    }
`
Promo.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
     
`
Promo.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
`

Promo.InnerWrapper = styled(Box)`
 position: relative;
    z-index: 1;
    padding-top: 50px;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    background-position: center;
    background-size: cover;
    

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 80px;
        padding-left: 110px;
        padding-right: 100px;
    }

    @media (min-width:1024px) {
        padding-top: 80px;
        padding-bottom: 60px;
    }

    &::before {
        content: "";
        background-color: #adadad;
        mix-blend-mode: multiply;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        
        z-index: -1;
    }
`

Promo.Button = styled(Button)`
    color:#fff!important;
    border-color: #ff4b60;
    background-color: #ff4b60;
    box-shadow:0 20px 20px rgb(255 75 96 / 30%);
    border-radius:500px;
   
    &:hover{
        box-shadow:0 20px 20px rgb(255 75 96 / 0%);
        color:#fff!important;

    }
`
Promo.Box = styled(Box)``


export default Promo;