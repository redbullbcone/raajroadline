import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
margin-top: -116px;
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
        font-weight:700;
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
        font-weight:700;
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
    margin-bottom:54px;

    @media (min-width:992px){
        font-size: 16px;
        line-height:24px;
    }

`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;