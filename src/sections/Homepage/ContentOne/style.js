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

    .top-head{
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

    @media (min-width:1400px){
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

    .blue-close{
        border: 3px solid #1A75FF;
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
        margin-top:51px;
        width:153px;
    }

    .blue-close::before{
        width:100%;
        height:100%;  
    }

    .blueclose-btn::before{
        background:#1A75FF;
        content:"";
        position:absolute;
        top: 0;
        left: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }

    .blueclose-btn::after{
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

    .blue-close:hover::before{
        width:50%;
        color: #fff;
    }
    .blue-close:hover::after{
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