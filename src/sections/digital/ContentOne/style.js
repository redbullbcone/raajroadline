import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
.blue-txt{
    color:#1A75FF;
}

`
Content.InnerBlock = styled(Box)`
    padding-top: 60px;
    padding-bottom: 55px;

    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 75px;
    }

    @media (min-width:1024px) {
        padding-top: 130px;
        padding-bottom: 130px;
    }
    @media (min-width:1200px) {
        padding-top: 130px;
        padding-bottom: 135px;
    }
`
Content.Title = styled(Heading)`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 1.1;
    position:relative;
    @media (min-width:768px) {
      font-size: 24px;
    }
    @media (min-width:992px) {
      font-size: 30px;
    }
    @media (min-width:1170px) {
        font-size: 56px;
    }
    @media (min-width:1270px) {
        font-size: 56px;
    }
    @media (min-width:1400px) {
        font-size: 60px;
    }
`
Content.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
Content.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    opacity: 0.7;

    b{
        color:#1A75FF;
    }
    @media (min-width:768px) {
        font-size: 14px;
      }
      @media (min-width:992px) {
        font-size: 14px;
      }
      @media (min-width:1170px) {
        font-size: 16px;
        line-height: 32px;
      }
      @media (min-width:1270px) {
        font-size: 16px;
        line-height: 32px;
      }
      @media (min-width:1400px) {
          font-size: 20px;
          line-height: 40px;

      }
`
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
`

Content.ContentTextBlock = styled(Box)`
    position:relative;
`
Content.ImageOne= styled(Box)`
    position:relative;
`
Content.ImageTwo = styled(Box)`
    position:relative;
`

Content.Box = styled(Box)``


export default Content;