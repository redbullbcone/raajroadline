import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media (min-width:1024px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
    .how-to-get-started-section h4 {
        color:#000;
        padding-top:0px;
        margin-top:0px;
        font-size:21px;
        line-height:30px;
        font-weight:700;
    }
    .how-to-get-started-section .service-card p {
        color:#000;
        padding-top:0px;
        margin-top:0px;
        font-size:14px;
        line-height:1.5;
        font-weight:500;
        @media (min-width:1024px) {
            font-size:12px;
        }
        @media (min-width:1170px) {
            font-size:18px;
        }
    }
`


Service.Box = styled(Box)`
    
`


export default Service;