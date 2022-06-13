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
        background: #F6FBFF;
        padding: 26px 0;
        margin-bottom: 20px;
    }

    .flex-row-reverse.row .business-altcard{
        margin-left: 0px;
    }
    .white-image{
        margin-bottom:26px;
    }
`
Content.Title = styled(Heading)`
font-weight: 600;
font-size: 45px;
line-height: 62px;
letter-spacing: -1px;
width: 570px;
height: 188px;

    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 45px;
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
`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;