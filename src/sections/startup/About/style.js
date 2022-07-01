import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const About = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .section-affiliate-alt {
        padding:0 0px;
    }

    .para-background-color1 {
        h1{
            font-weight: 500;
            font-size: 45px;
            line-height: 54px;
        }

        b{
            color: #1A75FF;
        }
    }


    .section-affiliate-alt h2 {
        font-size: 21px;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom:20px;
        @media (min-width: 576px) {
            font-size: 24px;
        }
        @media (min-width: 768x) {
            font-size: 27px;
        }
        @media (min-width: 992px) {
            font-size: 30px;
            margin-bottom:20px;
        }
        @media (min-width: 1170px) {
            font-size: 34px;
            margin-bottom:30px;
        }
        @media (min-width: 1270px) {
            font-size: 38px;
            margin-bottom:40px;
        }
        @media (min-width: 1400px) {
            font-size: 42px;
        }
    }
    .section-affiliate-alt p {
        width:100%;
        font-size:14px;
        line-height:1.5;
        @media (min-width: 576px) {
            width:100%;
        }
        @media (min-width: 768x) {
            width:100%;
        }
        @media (min-width: 992px) {
            width:94%;
        }
        @media (min-width: 1170px) {
            width:90%;
            font-size:16px;
        }
        @media (min-width: 1270px) {
            width:88%;
        }
        @media (min-width: 1400px) {
            width:78%;
        }
    }

    .section-affiliate {
        margin:40px 0 40px;
        @media (min-width: 576px) {
            margin:40px 0 40px;
        }
        @media (min-width: 768x) {
            margin:50px 0 50px;
        }
        @media (min-width: 992px) {
            margin:60px 0 60px;
        }
        @media (min-width: 1170px) {
            margin:80px 0 80px;
        }
        @media (min-width: 1270px) {
            margin:80px 0 80px;
        }
        @media (min-width: 1400px) {
            margin:80px 0 80px;
        }
    }
    .affi-image {}


    .button-affiliate {
        color: #fff;
        background: #1A75FF;
        border-radius: 50px;
        padding: 15px 30px;
        border-color: #1A75FF !important;
        box-shadow: -8px 8px 50px rgb(80 52 252 / 50%);
        width: 180px;
        height: 56px;
    }
    .button-affiliate:hover {
        border-color:#1A75FF !important;
    }
    .button-affiliate:active {
        border-color:#1A75FF !important;
    }
    




    .section-affiliate2 {
        background: #F6FBFF;
        padding:100px 0;
        margin-top:60px;
        margin-bottom:40px;
    }
    .para-background-color1 {
        background: #F4F9FC;
    }
    .para-background-color1 h2,
    .para-background-color2 h2 {
        font-size: 21px;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom:20px;
        @media (min-width: 576px) {
            font-size: 24px;
        }
        @media (min-width: 768x) {
            font-size: 27px;
        }
        @media (min-width: 992px) {
            font-size: 30px;
            margin-bottom:20px;
        }
        @media (min-width: 1170px) {
            font-size: 34px;
            margin-bottom:30px;
        }
        @media (min-width: 1270px) {
            font-size: 38px;
            margin-bottom:40px;
        }
        @media (min-width: 1400px) {
            font-size: 42px;
        }
    }
    .para-background-color1 p,
    .para-background-color2 p {
        width:100%;
        font-weight: 400;
        font-size: 21px;
        line-height: 40px;
        opacity: 0.7;
        margin-bottom: 55px;
        margin-top: 48px;
    
        @media (min-width: 576px) {
            width:95%;
        }
        @media (min-width: 768x) {
            width:90%;
        }
        @media (min-width: 992px) {
            width:85%;
        }
        @media (min-width: 1170px) {
            font-size: 18px;
            line-height: 32px;
        }
        @media (min-width: 1270px) {
            font-size: 18px;
            line-height: 32px;
        }
        @media (min-width: 1400px) {
            width:75%;
            font-size:21px;
        }
    }


    .para-background-color2 {
        background: #FFD2CB;
        width: 100%;
        height: auto;
    }

    .ImageOne {
        width: 100%;
        position: relative;
        overflow: hidden;
        transform-origin: top left;
        margin: 0 10px;
        border-radius: 15px;
        margin-bottom: 40px;
        height: 100%;
        bottom: 0px;
        left: 50px;
        @media (min-width: 575px) {
          width: 50%;
          transform: skewX(-15deg);
        }
        @media (min-width: 1024px) {
          margin-bottom: 0;
          width: 38%;
        }
        @media (min-width: 1400px) {
            margin-bottom: 0;
            width: 41%;
        }
      
     }
    .ImageOneInner {

        transform-origin: top left;
        height: 100%;
        position: relative;
        top: 0;
        left:-40%;
        transform: skewX(9deg);
        @media (min-width: 575px) {
          left: -40%;
          width: 200%;
        }

        @media (min-width: 1400px) {
            left: -36%;
          }

        img{
            height: 466.58px;
        }

      }
      .tilt-image-sec{
        display: flex;
        position: relative;
        right: 0;
        left: 80px;
        width: 700px;
        left: 1px;
      }

      .image-one-down{
        top: 30px;
        height: 100%;
      }

      .second-sec {
        width: 632px;
        height: 662px;
        background: #F4F9FC;
        border-radius: 15px;
        padding-top: 58px;
        padding-left: 48px;

        h1{
            font-weight: 500;
            font-size: 45px;
            line-height: 54px;

            @media (min-width: 1170px) {
            font-size: 45px;

            }

            @media (min-width: 1400px) {
                font-size: 45px;

            }

        }
        b{
            color: #1A75FF;
        }
        p{
            font-weight: 400;
            font-size: 21px;
            line-height: 40px;
            opacity: 0.7;
            margin-top: 48px;
            margin-bottom: 55px;
        }
      }
`;

About.SubTitle = styled(Heading)`
`;

About.Title = styled(Heading)`
`;

About.Content = styled(Heading)`
    padding: 80px 30px 80px 100px;
    z-index:-1;
    border-radius: 15px;
    position: relative;
    width: 105% !important;
    left: -30px;
    @media (min-width: 576px) {
        padding:60px 30px 60px 60px;
    }
    @media (min-width: 768x) {
        padding:60px 30px 60px 60px;
    }
    @media (min-width: 992px) {
        padding:40px 30px 40px 80px;
    }
    @media (min-width: 1170px) {
        padding:70px 30px 70px 80px;
    }
    @media (min-width: 1270px) {
        padding:80px 30px 80px 90px;
    }
    @media (min-width: 1400px) {
        padding:100px 30px 100px 100px;
    }
`;

About.Text = styled(Paragraph)`
`;

About.Image = styled(Box)`
    z-index: 1;
    border-radius: 5px;
    position: relative;
    width:100%;
    @media (min-width: 576px) {
        width:100%;
    }
    @media (min-width: 768x) {
        width:100%;
    }
    @media (min-width: 992px) {
        width:100%;
    }
    @media (min-width: 1170px) {
        width:100%;
    }
    @media (min-width: 1270px) {
        width:100%;
    }
    @media (min-width: 1400px) {
        width:100%;
    }
`;





About.Box = styled(Box)`
`;

export default About;