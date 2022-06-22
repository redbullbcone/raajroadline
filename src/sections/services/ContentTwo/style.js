import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
margin-top: -116px;
   

    .top-head{
    font-weight: 700;
    line-height: 26px;
    font-size: 60px;
    margin-bottom: 117px;
    position: relative;
    top: 52px;
    }

    .flex-row-reverse.row{
       
        margin-bottom: 20px;
        @media(min-width:1400px){
            margin-bottom:116px;
        }
    }

    .flex-row-reverse.row .business-altcard{
        margin-left: 0px;

        @media(min-width:992px){
            position:relative;
            right:90px;
        }

        @media(min-width:1170px){
            position:relative;
            right:100px;
        }

        @media(min-width:1400px){
            position:relative;
            right:225px;
        }
    }
    .white-image{
        margin-bottom:26px;

        @media(min-width:1400px){
            margin-bottom:116px;
        }
    }
`
Content.Title = styled(Heading)`
font-weight: 600;
font-size: 58px;
line-height: 62px;
letter-spacing: -1px;
width: 570px;
padding-bottom: 28px;


    @media (min-width:768px) {
      padding-bottom: 28px;
      font-size: 38px;
    }

    @media (min-width:992px) {
        font-size: 42px;
      }

    @media (min-width:1024px) {
      font-size: 42px;
    }

    @media(min-width:1170px){
        font-size:44px;
        font-weight:500px;
    }

    @media(min-width:1400px){
        font-size:48px;
        font-weight:500px;
    }
`
Content.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
    
`
Content.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;

    @media(min-width:1400px){
        font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
    }
`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;