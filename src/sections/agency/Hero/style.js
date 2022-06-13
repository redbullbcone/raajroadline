import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Hero = styled(Box)`
   padding-top: 130px;
    padding-bottom: 40px;
    background-size: cover;
    background-position: right top;
    position: relative;
    z-index: 2;
    @media (min-width:768px) {
        padding-top: 115px;
        padding-bottom: 60px;
    }

    @media (min-width:992px) {
        padding-top: 120px;
        padding-bottom: 60px;
    }
    @media (min-width:1170px) {
        padding-top: 150px;
        padding-bottom: 90px;
    }
    @media (min-width:1400px) {
        padding-top: 160px;
        padding-bottom: 120px;
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background-image: ${props => props.backgroundOverlay && `url(${props.backgroundOverlay})`};
        width: 100%;
        height: 100%;
        z-index: -1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }
    .recruitment-button {
        margin-top:20px;
        @media (min-width:992px) {
            margin-top:30px;
        }
        @media (min-width:1170px) {
            margin-top:40px;
        }
    }
`
Hero.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
`
Hero.Title = styled(Heading)`
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        line-height: 1.1;
        margin-bottom: 50px;
            @media (min-width: 480px) {
                font-size: 24px;
            }
            @media (min-width: 768px) {
                font-size: 30px;
            }
            @media (min-width: 992px) {
                font-size: 36px;
            }
            @media (min-width: 1170px) {
                font-size: 48px;
                line-height:48px;
            }
            @media (min-width: 1270px) {
                font-size: 60px;
                line-height:60px;
            }
            @media (min-width: 1400px) {
                font-size: 70px;
                line-height:70px;
            }
`
Hero.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5;
    margin-bottom: 10px;
    color:rgba(255,255,255, 1.0);
        @media (min-width: 480px) {
            font-size: 18px;
        }
        @media (min-width: 992px) {
            font-size: 21px;
        }
`
Hero.Content = styled(Box)`
    margin-top: 0;
    @media (min-width:992px) {
     margin-top: 0px;
    }
`
Hero.Video = styled(Box)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 40px;
    padding-left:0;
    padding-right:0;
    margin-bottom: 0;
    a{
        color:#ff5722;
    }
.video-block{
        display: flex;
        align-items: center;
        background:none;
        border:0;
        box-shadow:none;
        text-align:left;
        &:focus{
            outline:none;
            box-shadow:none;
        }
        i {
            min-width: 50px;
            max-width: 50px;
            min-height: 50px;
            max-height: 50px;
            box-shadow: -12px 12px 50px rgba(255, 30, 56, 0.3);
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ff5722;
            margin-right: 20px;
            color:#fff;
        }

        .btn-text {
            color: #ff5722;
            transition: 0.4s;
            font-size: 13px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: normal;
            line-height: 22px;
        }

        &:hover {
            .btn-text {
                text-decoration: underline;
            }
        }
}
`
Hero.Box = styled(Box)`
`
export default Hero
