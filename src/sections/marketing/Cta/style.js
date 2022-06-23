// import { HeaderButton } from 'src/sections/digital';
import styled from 'styled-components';
import { Box, Heading } from '~styled';

const Cta = styled(Box)`
    position: relative;
    z-index: 0;
    border-radius: 0;

    @media (min-width:768px) {
    }

    @media (min-width:992px) {
    }

    .cta-close{
        border: 3px solid #ff5722;
        outline: none;
        color: #2a2833;
        position: relative;
        overflow:hidden;
        transition:1s all ease;
        z-index:1;
        width:300px;
    }

    .cta-close::before{
        width:100%;
        height:100%;  
    }

    .cta-close-btn::before{
        background:#ff5722;
        content:"";
        position:absolute;
        top: 0;
        left: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }

    .cta-close-btn::after{
        background:#ff5722;
        height:100%;
        content:"";
        position:absolute;
        top: 0;
        right: 0;
        transition: all 0.6s ease;   
        width:0;
        z-index:-1;
    }

    .cta-close:hover::before{
        width:50%;
        color: #fff;
    }
    .cta-close:hover::after{
        width:50%;
        color: #fff;
    }

    .cta-close:hover{
        background-color:#ff5722;
    }


    
`

Cta.Shape = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img{
        max-width:30%;
        @media (min-width:575px){
            max-width:50%;
        }
        @media (min-width:768px){
            max-width:90%;
        }
        @media (min-width:992px){
            max-width:100%;
        }
    }
`
Cta.Title = styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;
    
    @media (min-width:575px) {
      font-size: 40px;
    }

    @media (min-width:768px) {
      font-size: 50px;
      margin-top: 95px;
    }

    @media (min-width:992px) {
      font-size: 60px;
    }
    @media (max-width:375){
        margin-top:20px;
    }
`
Cta.Box = styled(Box)`
    
`
Cta.Newsletter = styled(Box)`
        max-width: 521px;
        margin:0 auto;
`
Cta.NewsletterFromGroup = styled(Box)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    @media (min-width:575px){
        flex-direction:row;
    }
    .form-control{
        transition: 0.4s;
        background-color: rgba(255,255,255, 0.2);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        width: 100%;
        border: none;
        border-radius:10px;
        padding: 0 25px;
        height: 70px;
        margin-right:5px;
        margin-top:10px;
        &::placeholder{
            color:#fff;
        }
        &:focus {
            background-color: #fff !important;

            &::placeholder {
                color: #000;
            }
        }
    }
    .btn{
        height: 70px;
        border-radius:50px;
        color:#fff;
        margin-top:10px;
        font-size:16px;
    }
`

export default Cta;