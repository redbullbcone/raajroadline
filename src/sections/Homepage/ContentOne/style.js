import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
    padding-bottom:80px;
    margin-top: 116px;
   .business-btn{
       border-radius:10px !important;

       @media(min-width:992px){
        width: 143px;
        height: 46px !important;
        font-size: 13px;
       }
   }
   .home-section-1 {
        padding-top:0px;
        padding-bottom:100px;
   }
   .home-section-2 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-3 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-4 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-5 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-6 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .gif-ImageGroup {
        position:relative;
        width: 85%;
        top: 55px;
        @media (min-width:768px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:992px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1170px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1270px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1400px) {
            width: 100%;
            top: 0px;
        }
    }
    .gif-ImageGroup .bigImage {
        position:absolute;
        z-index:99;
        top:0px;
        left:0px;
    }
    .gif-ImageGroup .dotImage {
        position:absolute;
        z-index:90;
        top:0px;
        left:0px;
    }
    .business-altcard {
        align-items: center !important;
    }
    .home-section-1 .business-altcard {
        padding-top:200px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:80px;
        }
        @media (min-width:1170px) {
            padding-top:120px;
        }
        @media (min-width:1270px) {
            padding-top:120px;
        }
        @media (min-width:1400px) {
            padding-top:160px;
        }
        @media (min-width:1600px) {
            padding-top:160px;
        }
        @media (min-width:1820px) {
            padding-top:180px;
        }
    }
    .home-section-2 .business-altcard {
        padding-top:260px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:80px;
        }
        @media (min-width:1170px) {
            padding-top:160px;
        }
        @media (min-width:1270px) {
            padding-top:160px;
        }
        @media (min-width:1400px) {
            padding-top:220px;
        }
        @media (min-width:1600px) {
            padding-top:220px;
        }
        @media (min-width:1820px) {
            padding-top:220px;
        }
    }
    .home-section-3 .business-altcard {
        padding-top:200px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:150px;
        }
        @media (min-width:1170px) {
            padding-top:150px;
        }
        @media (min-width:1270px) {
            padding-top:150px;
        }
        @media (min-width:1400px) {
            padding-top:150px;
        }
        @media (min-width:1600px) {
            padding-top:150px;
        }
        @media (min-width:1820px) {
            padding-top:150px;
        }
    }
    .home-section-4 .business-altcard {
        padding-top:200px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:150px;
        }
        @media (min-width:1170px) {
            padding-top:150px;
        }
        @media (min-width:1270px) {
            padding-top:150px;
        }
        @media (min-width:1400px) {
            padding-top:150px;
        }
        @media (min-width:1600px) {
            padding-top:150px;
        }
        @media (min-width:1820px) {
            padding-top:150px;
        }
    }
    .home-section-5 .business-altcard {
        padding-top:230px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:180px;
        }
        @media (min-width:1170px) {
            padding-top:180px;
        }
        @media (min-width:1270px) {
            padding-top:180px;
        }
        @media (min-width:1400px) {
            padding-top:180px;
        }
        @media (min-width:1600px) {
            padding-top:180px;
        }
        @media (min-width:1820px) {
            padding-top:180px;
        }
    }
    .home-section-6 .business-altcard {
        padding-top:200px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:80px;
        }
        @media (min-width:1170px) {
            padding-top:180px;
        }
        @media (min-width:1270px) {
            padding-top:180px;
        }
        @media (min-width:1400px) {
            padding-top:180px;
        }
        @media (min-width:1600px) {
            padding-top:180px;
        }
        @media (min-width:1820px) {
            padding-top:180px;
        }
    }
    .top-head {
        font-weight: 700;
        line-height: 60px;
        font-size: 60px;
        margin-bottom: 117px;
        position: relative;
        top: 52px;
        padding-top:20px;
        @media (min-width:1270px){
            font-size:50px;
        }
        @media (min-width:1400px) {
            ont-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-size: 70px;
            line-height: 66px;
            letter-spacing: -2px;
        }
    }

    .main-bg-color .flex-row-reverse.row{
        padding: 26px 0;
        margin-bottom: 20px;
    }
    .blue-background{
        background: #F6FBFF;
        padding-bottom:26px;
    }
    .flex-row-reverse.row .business-altcard{
        margin-left: 0px;
    }
    .white-back{
        background:#fff !important;
    }
    .off-blue{
        background: #F6FBFF !important;
        padding: 35px 0px !important;
        margin-bottom: 100px !important;
    }
    .business-last-sec{
        margin-bottom:101px;
    }
    .white-background{
        padding-bottom:45px;
    }
    .main-white-sec{
        margin-top: -120px
        @media (min-width:1170px){
            margin-top: -120px;
            padding-bottom:45px;
        }
    }
    @media (min-width:992px){
        .main-white-sec{
        margin-top: -120px;
        padding-bottom:45px;
        }
    }
    .orange-tick{
        margin-right: 15px;
        @media(min-width:1400px){
            height:35px;
            width:35px;
        }
    }
    .ContentOne-btn{
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        width:auto;
        border-radius:50px !important;
        margin-top:81px;
    }
    .blue-close {
        border: 2px solid #1A75FF;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        color: #2a2833;
        padding: 14px 0;
        border-radius: 50px ;
        position: relative;
        overflow:hidden;
        transition:1s all ease;
        z-index:1;
        margin-top:50px;
        width:150px;
        box-shadow:0px 0px 30px #96bcf6;
    }
    .blue-close:hover {
        background:#1A75FF;
        color:#ffffff;
    }
    .blue-close::before{
        width:100%;
        height:100%;  
    }
    .blueclose-btn::before {
        background:#1A75FF;
        content:"";
        position:absolute;
        top: 0;
        left: 0;
        transition: all 0.5s ease;   
        width:0;
        z-index:-1;
    }
    .blueclose-btn::after {
        background:#1A75FF;
        height:100%;
        content:"";
        position:absolute;
        top: 0;
        right: 0;
        transition: all 0.5s ease;   
        width:0;
        z-index:-1;
    }
    .blue-close:hover::before {
        width:50%;
        color: #fff;
    }
    .blue-close:hover::after {
        width:50%;
        color: #fff;
    }
`
Content.Title = styled(Heading)`
font-weight: 700;
font-size: 45px;
line-height: 62px;
letter-spacing: -1px;
    @media (min-width:768px) {
      font-size: 38px;
    }
    @media (min-width:992px){
        font-size: 36px;
        line-height: 50px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    @media (min-width:1170px){
        font-size:42px;
        margin-bottom:44px;
        line-height: 60px;
    }
    @media (min-width:1270px){
        font-size:42px;
        margin-bottom:44px;
        line-height: 60px;
    }
    @media (min-width:1400px){
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 66px;
        letter-spacing: -2px;
    }
`
Content.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
`
Content.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;

    @media (min-width:992px){
        font-size: 16px;
        line-height:24px;
    }

    @media (min-width:1400px){
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 30px;
    }

    

`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;