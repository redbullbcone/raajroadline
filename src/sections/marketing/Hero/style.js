 import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Hero = styled(Box)`
    padding-top: 100px;
    padding-bottom: 78px;
    @media (min-width:575px) {
        padding-top: 80px;
    }
    @media (min-width:768px) {
        padding-top: 80px;   
    }
    @media (min-width:992px) {
        padding-top: 120px;   
    }
    @media (min-width:1170px) {
        padding-top: 100px;
    }
    @media (min-width:1270px) {
        padding-top: 140px;
    }
    @media (min-width:1400px) {
        padding-top: 140px;
    }
    @media (min-width:1600px) {
        padding-top: 180px;
    }
    .close{
        margin-right:30px;
        font-size:16px !important;
        box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5) ;
    }
    .close2{
        font-size:16px !important;
        box-shadow: -8px 8px 50px rgba(80, 52, 252, 0.5);
    }
    @media (max-width:1240px) {
        .close {
            margin-right:45px;
            font-size:14px;
        }
        .close2{
            font-size:14px;
        }
    }
    @media (max-width:767px) {
        .close {
            margin-right:10px;
        }
    }
    .close {
        border: 2px solid #ff5722;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        color: #2a2833;
        padding: 15px 0;
        border-radius: 50px ;
        position: relative;
        overflow:hidden;
        transition:0.5s all ease;
        z-index:1;
        width:300px;
    }
    .close:hover {
        color:#fff;
        background:#ff5722;
    }
    .close::before{
        width:100%;
        height:100%;  
    }
    .close-btn::before{
        background:#ff5722;
        content:"";
        position:absolute;
        top: 0;
        left: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }
    .close-btn::after{
        background:#ff5722;
        height:100%;
        content:"";
        position:absolute;
        top: 0;
        right: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }
    .close:hover::before{
        width:50%;
        color: #fff;
    }
    .close:hover::after{
        width:50%;
        color: #fff;
    }
    .close2 {
        border: 2px solid #1A75FF;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        color: #2a2833;
        padding: 14px 0;
        border-radius: 50px ;
        position: relative;
        overflow:hidden;
        transition: 0.5s all ease;
        z-index:1;
        width:300px;
    }
    .close2:hover {
        color:#fff;
        background:#1A75FF;
    }
    .close2::before{
        width:100%;
        height:100%;  
    }
    .close2-btn::before{
        background:#1A75FF;
        content:"";
        position:absolute;
        top: 0;
        left: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }
    .close2-btn::after{
        background:#1A75FF;
        height:100%;
        content:"";
        position:absolute;
        top: 0;
        right: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }
    .close2:hover::before{
        width:50%;
        color: #fff;
    }
    .close2:hover::after{
        width:50%;
        color: #fff;
    }
    


`
Hero.Title = styled(Heading)`
    font-size: 42px;
    line-height: 54px;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 35px;
    @media (min-width:480px) {
        font-size: 42px;
    }
    @media (min-width:768px) {
        font-size: 48px;
        line-height: 60px;
    }
    @media (min-width:992px) {
        font-size: 48px;
        line-height: 60px;
        font-weight: 700;
        width: 90%;
        margin-top: 60px;
    }
    @media (min-width:1170px) {
        font-size: 72px;
        line-height: 84px;
        width: 530px;
        margin-top: 0px;
    }
    @media (min-width:1270px) {
    }
    @media (min-width:1400px) {
    }
    @media (min-width:1600px) {
    }
    @media (min-width:1820px) {
    }
    .typed-cursor {
        display: none !important;
    }
`
Hero.Text = styled(Paragraph)`
    color: rgba(38, 39, 41, 0.7);
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 34px;
    margin-bottom: 53px;
    @media (min-width:1024px) {
        font-size: 18px;
    }
    @media (min-width:1200px) {
        // padding-right: 150px;
    }    
`
Hero.Content = styled(Box)`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    @media (min-width:768px) {
        margin-top: 60px;
        width: 532px;
        height: 483px;
    }
    @media (min-width:992px) {
        margin-top: 0;
    }
    @media (min-width:768px) {
        width: 80%;

    }
`
Hero.Newsletter = styled(Box)`
    form{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        @media (min-width:480px){
            flex-direction:row;
        }
    }
    .form-control{
        width: 100%;
        border-radius: 10px;
        border: 2px solid rgba(128, 138, 142, 0.2);
        color: rgba(37, 55, 63, 0.7);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 28px;
        padding: 5px 25px;
        margin-bottom: 10px;
        height: 70px;
        @media (min-width:480px) {
            margin-right: 7px;
            margin-bottom: 0;
        }
    }
`
Hero.NewsletterText = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    margin-top: 18px;
    margin-bottom: 0;
    a{
        color:var(--bs-primary)
    }

`
export default Hero