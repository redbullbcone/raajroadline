import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
.blue-txt{
    color:#1A75FF;
}

.image-one{
    box-shadow: 10px 15px 25px 0 rgba(0,0,0,.2);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: 10px;

    &:hover{
        box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);
       margin-top:0;
    }
}

`
Content.InnerBlock = styled(Box)`
    padding-top: 60px;

    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 75px;
    }

    @media (min-width:992px) {
        padding-top: 130px;
        padding-bottom:0px;
    }
    @media (min-width:1170px) {
        padding-top: 130px;
        padding-bottom:0;
    }
`
Content.Title = styled(Heading)`
    font-size: 30px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 1.1;
    position:relative;
    @media (min-width:768px) {
      font-size: 24px;
    }
    @media (min-width:992px) {
      font-size: 42px;
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