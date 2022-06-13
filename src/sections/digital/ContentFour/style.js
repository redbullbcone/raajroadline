import styled from 'styled-components';
import { Box, Heading,Button,Paragraph,List,ListItems } from '~styled';

const Content = styled(Box)`
`
Content.InnerBlock = styled(Box)`
    padding-top: 00px;
    padding-bottom: 0px;


    .list {
        justify-content: space-between;
    }
    .listitem1, .listitem2, .listitem3 {
        float:left;
        width:28%;
        @media (max-width:1024px) {
            width:27%;
        }
        @media (max-width:991px) {
            width:50%;
        }
    }
    .listitem4 {
        float:left;
        width:16%;
        @media (max-width:991px) {
            width:50%;
        }
    }
    .listitem1 p,
    .listitem2 p,
    .listitem3 p,
    .listitem4 p {
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        color: #FD346E;
        opacity: 0.7;
        @media (max-width:1024px) {
            font-size: 12px;
            line-height:18px;
        }
    }
    .listitem1 p {margin-right:30px;}
    .listitem2 p {margin-right:30px;}
    .listitem3 p {margin-right:30px;}
    .listitem4 p {
        margin-right:0px;
    }
    .main-box {
        background:#F6FBFF;
    }
    .tracker-sec {
        background:#F6FBFF;
        padding: 30px 0px 30px 0px;
        @media (min-width: 768x) {
            padding: 40px 0px 0px 0px;
        }
        @media (min-width: 992px) {
            padding: 60px 0px 20px 0px;
        }
        @media (min-width: 1170px) {
            padding: 80px 0px 40px 0px;
        }
        @media (min-width: 1270px) {
            padding: 100px 0px 60px 0px;
        }
        @media (min-width: 1400px) {
            padding: 120px 0px 80px 0px;
        }
    }
    .background-sec {
        padding:70px 0px 0;
    }
    .image2{
        border-radius: 15px;
    }
    .img-sec{
        left: 15px;
    }
    .pink-line{
        width: 210px;
        height: 1px;
        position: absolute;
        right: 0px;
        background: #FD346E;
    }
    .subtitle-sec{
        padding-top: 30px;
    }
    .background-title{
        position: relative;
        left: 0px;
        text-align: left;
    }
    .background-right-sub-sec p {
        font-size:14px;
        line-height:1.5;
        color:#67686a;
        margin-bottom:30px;
        opacity:1;
        @media (min-width: 768x) {
            font-size:14px;
            line-height:1.5;
            margin-bottom:80px;
        }
        @media (min-width: 992px) {
            font-size:14px;
            line-height:1.35;
            margin-bottom:80px;
        }
        @media (min-width: 1170px) {
            font-size:16px;
            line-height:1.25;
            margin-bottom:80px;
        }
        @media (min-width: 1270px) {
            font-size:16px;
            line-height:1.4;
            margin-bottom:60px;
        }
        @media (min-width: 1400px) {
            font-size:18px;
            line-height:1.5;
            margin-bottom:80px;
        }
    }
    .background-sec h2.background-title {
        margin-top:0px !important;
    }
    
`
Content.Title = styled(Heading)`
font-weight: 700;
font-size: 60px;
line-height: 1.2;
text-align: right;
margin-top:90px;
color: #262729;
    @media (min-width:768px) {
      font-size: 22px;
    }
    @media (min-width:992px) {
      font-size: 24px;
      margin-top:60px;
    }
    @media (min-width:1170px) {
    font-size: 30px;
    margin-top:70px;
    }
    @media (min-width:1270px) {
    font-size: 36px;
    margin-top:80px;
    }
    @media (min-width:1400px) {
    font-size: 42px;
    margin-top:90px;
    }
`;
Content.Subtitle = styled(Heading)`
    position: relative;
    text-align: right;
    opacity: 0.7;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
`;
Content.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5;
    opacity: 0.7;
    @media (min-width:768px) {
        font-size: 18px;
    }
`;

Content.Button = styled(Button)`
    color:#fff;
    border-color: #fd346e;
    background-color: #fd346e;
    box-shadow:0 20px 20px rgb(253 52 110 / 30%);
    border-radius:500px;
    &:hover{
        box-shadow:0 20px 20px rgb(253 52 110 / 0%);
        color:#fff;
    }
`;



Content.ContentTextBlock = styled(Box)`
    position:relative;
`
Content.ImageOne= styled(Box)`
    position:relative;
    margin-top: 85px;
`
Content.ImageTwo = styled(Box)`
    position:relative;
`

Content.Box = styled(Box)``


export default Content;