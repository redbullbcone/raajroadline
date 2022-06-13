import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 40px;
    background: #fbfdff;
    padding-bottom:100px;
    @media (min-width: 768px) {
        padding-top: 40px;
    }
    @media (min-width: 1024px) {
        padding-top: 40px;
    }
    .earn-from-section h2 {
        font-size: 60px;
        font-weight: 700;
        letter-spacing: normal;
        font-size:24px;
        line-height: 1;
        position:relative;
        padding-bottom: 0px;
        margin-bottom:30px;
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
    }
    .earn-from-section p {
        font-size:14px;
        line-height:1.5;
        color:#000;
        width:100%;
        @media (min-width:992px) {
            font-size:14px;
            width:95%;
        }
        @media (min-width:1170px) {
            font-size:15px;
            width:85%;
        }
        @media (min-width:1270px) {
            font-size:16px;
            width:92%;
        }
        @media (min-width:1400px) {
            font-size:18px;
            width:90%;
        }
    }   
`;

Service.Image = styled(Box)`
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