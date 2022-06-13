import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Promo = styled(Box)`
    padding-top: 60px;
    padding-bottom: 20px;

    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    @media (min-width:992px) {
        padding-top: 100px;
        padding-bottom: 110px;
    }
    .main-promo-sec{
        text-align: left;
    }
    .main-promo-sec h2{
        font-weight: 700;
        font-size: 45px;
        line-height: 54px;
        letter-spacing: -1px;
        margin-bottom:40px;
    }
    .main-promo-sec p{
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #FFFFFF;
        opacity: 0.7;
    }
    .main-box-counter{
        padding:100px 156px;
    }
    .pink-text-box{
        width: 1106px;
    background: #FF1A43;
    box-shadow: 0px 24px 50px rgb(96 1 211 / 20%);
    backdrop-filter: blur(34px);
    border-radius: 15px;
    padding: 31px 83px;
    height: 198px;
    justify-content:center;
    margin-bottom: 31px;
    
    }
    .main-pink-box{
        padding: 50px 134px;
    }
    .inner-box{
        width: 187px;
        text-align:center;

        padding-top:0;
        padding-bottom:0;
    }
    .inner-numb-box{
        padding-top:0;
        padding-bottom:0;
        font-weight: 500;
        font-size: 42px;
        line-height: 58px;
        color: #FFFFFF;
    }
    .inner-text{
        font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.7;
    }
    .vertical-line{
        opacity: 0.1;
        border: 2px solid #FFFFFF;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        position: relative;
        top: -75px;
        left: 85px;
    }
    .pink-main-heading{
        padding-bottom:0;
    }
    .main-box-counter3{
        padding-bottom:56px;
    }
    @media(min-width: 992px){
        .pink-main-heading{
         padding-bottom:0px !important;
     }
   }

   .map-box-counter{
    width: 1396px;
    height: 800.61px;
    position:relative;
   }
   .map-location{
    background: #1A75FF;
    border-radius: 15px;
    width: 250.76px;
   }

   .location1{
    position: absolute;
    left: 118px;
    top: 215px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
   }
   .location2{
    position: absolute;
    left: 574px;
    top: 215px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
   }

   .location3{
    position: absolute;
    right: 120px;
    top: 215px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
   }
   .location4{
    position: absolute;
    bottom: 146px;
    left: 327px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
   }
   .location5{
    position: absolute;
    bottom: 146px;
    right: 327px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
   }
   .map-icon{
    position: relative;
    top: -60px;
   }

   .map-location span{
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #fff;
   }

   .map-location p{
    font-weight: 500;
    font-size: 11px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
   }

   .map-details{
    position: relative;
    bottom: 30px;
   }

   .bottom-text p{
    position: absolute;
    bottom: 55px;
    left: 126px;
   }
`
Promo.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    margin-top: 15px;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 48px;
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

    @media (min-width:992px) {
        padding-top: 80px;
        padding-bottom: 60px;
    }

    &::before {
        content: "";
        background: rgba(36, 46, 111, 0.79);
    mix-blend-mode: multiply;
    opacity: 0.9;
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