import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 40px;
    padding-bottom:100px;
    @media (min-width: 768px) {
        padding-top: 40px;
    }
    @media (min-width: 1024px) {
        padding-top: 40px;
    }

    .earn-from-section{
        width: 100%;
        left: 1px;
        padding: 30px;
        height: 670px;
        background: #F4F9FC;
        border-radius: 15px;
        position: relative;
        

        @media(min-width:992px){
            font-size: 36px;
            margin-bottom: 36px;
            width: calc(100% + 100px);
            left: 1px;
            padding-right: 112px;
            top: 50px;
            right: 40px;


        }

        @media(min-width:1170px){
            font-size: 36px;
            margin-bottom: 36px;
            width: calc(100% + 100px);
            left: 1px;
            padding-left:50px;
        }

    }

    .earn-from-section{
     h1 {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 45px;
            line-height: 54px;
        }
        @media (min-width:992px) {
            font-size:36px;
            margin-bottom:36px;
        }
        @media (min-width:1170px) {
            font-size:40px;
            margin-bottom:40px;
        }
        @media (min-width:1270px) {
            font-size:42px;
            margin-bottom:42px;
        }
        @media (min-width:1400px) {
            font-size:48px;
            margin-bottom:48px;
        }

        b{
            color: #1A75FF;
            font-weight: 700;
            font-size: 45px;
            line-height: 54px;
        }

    }
    .earn-from-section p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        opacity: 0.7;
        width:100%;
        margin-top:45px;
        margin-bottom: 45px;
        @media (min-width:992px) {
            font-size: 16px;
            width: 100%;
            line-height: 30px;
        }
        @media (min-width:1170px) {
            font-size:16px;
            line-height:32px;
            width:88%;
        }
        @media (min-width:1270px) {
            font-size:16px;
            line-height:32px;
            width:88%;
        }
        @media (min-width:1400px) {
            font-size:21px;
            line-height: 40px;
            width:87%;
        }
    }
    
    .blue-button-affi{
        background: #1A75FF;
        box-shadow: -8px 8px 50px rgb(80 52 252 / 50%);
        border-radius: 50px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        border: none;
        width: 148px;
        padding: 15px 30px;
        transition: 1s all ease;

        @media(min-width:992px){
            font-size: 16px;
            line-height:32px;
            width:160px;
        }

        @media(min-width:1400px){
            width:180px;
        }
    }

    .blue-button-affi:hover{
        background:#4e92f9;
    }

    .img-height{
        height: 577px;
    }
`;

Service.Image = styled(Box)`
img{

    border-radius:15px;
}
`;

Service.List = styled(Box)`
li {
    padding-left: 30px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    color:#262729;
    list-style: none;
    &::before{
        content: "\f00c";
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        left: 0;
        top: 0;
        font-weight: 700;
        color:#5034fc;
    }
}
`;

Service.Box = styled(Box)`
`;

export default Service;