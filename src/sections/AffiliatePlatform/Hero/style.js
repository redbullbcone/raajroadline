import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Hero = styled(Box)`
    padding-top: 125px;
    padding-bottom: 60px;
    background-size: cover;
    background-position: right top;
    position: relative;
    z-index: 1;

    
    @media (min-width:768px) {
        padding-top: 145px;
        padding-bottom: 80px;
        background-image: url(image/recruitment-agency/affiliate-hero-image.png);
        background-size: cover;
    }

    @media (min-width:992px) {
        padding-top: 260px;
        padding-bottom: 195px;
    }

    @media (min-width:1600px) {
        padding-top: 290px;
    }
    &:before {
        content: "";
        background-image: ${props => props.overlay ? `url(${props.overlay})` : null};
        background-position: left top;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        z-index: -1;
        width: 100%;
        background-repeat:no-repeat;
        background-size: cover;


        @media (min-width:575px){
            width: 100%;
        background-position: center right;

        }
    }

    

    @media (max-width:1239px){
        .close{
            margin-right:47px;
            font-size:14px;
        }
        .close2{
            font-size:14px;
        }
    }


    .business-hero span {
        color:#FF5722;
    }
    .close{
        margin-right:30px;
        color:#fff !important;
        box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5) ;
        background:#ff5722;
        transition: 0.5s all ease;
        width:120px;

        @media(min-width:992px){
            margin-right:30px;
            color:#fff !important;
            box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5) ;
            background:#ff5722;
            transition: 0.5s all ease;
            width:160px;
        }

        @media(min-width:1400px){
            width:220px;
        }
    }
    .close2{
        box-shadow: -8px 8px 50px rgba(80, 52, 252, 0.5);
        transition: 0.5s all ease;
        color:#fff !important;
        width:115px;
        background: #1A75FF;

        @media(min-width:992px){
            box-shadow: -8px 8px 50px rgba(80, 52, 252, 0.5);
            transition: 0.5s all ease;
            color:#fff !important;
            width:150px;
            background: #1A75FF;
        }
       
        @media(min-width:1400px){
            width:215px;
        }
    }
    .close:hover {
        background: #f98c6a;
    }

    .close2:hover{
    background: #4e92f9;
    }


`

Hero.Content = styled(Box)`
    
`
Hero.Subtitle = styled(Heading)`
    font-size: 21px;
    font-weight: 500;
    font-style: italic;
    letter-spacing: normal;
    line-height: 1.4285;
    margin-bottom: 20px;
    color:black;

`
Hero.Title = styled(Heading)`
        font-size: 50px;
        font-weight: 700;
        letter-spacing: normal;
        line-height: 50px;
        margin-bottom: 25px;
        color:black;
        @media (min-width:480px) {
            font-size: 40px;
        }

        @media (min-width:768px) {
            font-size: 50px;
        }

        @media (min-width:992px){
            font-size: 60px;
            line-height: 60px;
        }
        

        @media (min-width: 1024px) {
           font-weight:600;
           font-size:70px;
           line-height:70px;
          }

         @media (min-width: 1170px) {
            font-weight:600;
            font-size:60px;
            line-height:70px;
          }
          
         @media (min-width: 1400px) {
            font-weight:700;
            font-size:70px;
            line-height:70px;
          }


        
`
Hero.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 24px;
    margin-bottom: 10px;
    color:black;
    opacity:.7;

    b{
        font-weight:700;
    }

    
    @media (min-width:992px){
        font-size: 16px;
        line-height: 24px;

    }

    @media (min-width: 1024px) {
        font-weight:600;
        font-size:18px;
        line-height:27px;
    }
    @media (min-width: 1170px) {
        font-weight:500;
        font-size:18px;
        line-height:30px;
    }
    @media (min-width: 1400px) {
        font-weight:500;
        font-size:21px;
        line-height:30px;
    }
`

Hero.Buttons = styled(Box)`
.btn{
    margin-right:18px;
}
`
Hero.Video = styled(Box)`
        box-shadow: 0 10px 56px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        @media (min-width:992px) {
            margin-left: 30px;
        }

        @media (min-width:1600px) {
            margin-left: 67px !important;
        }

        .video-btn {
            min-width: 60px;
            max-width: 60px;
            min-height: 60px;
            max-height: 60px;
            background-color: #5034fc;
            border-color: #5034fc;
            color:#fff;
            box-shadow:0 0 0 0.2rem rgb(106 82 252 / 50%);
            outline:none; 
            border-radius: 500px;    
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);       
        }
`
Hero.Button = styled(Button)`
    height: 70px;
    font-size: 16px;
    transition:.4s;
   
        &.btn-1{
            box-shadow:-12px 12px 50px rgb(96 1 211 / 30%);
            &:hover{
                box-shadow: -12px 12px 50px rgb(96 1 211 / 0%)
            }
        }
`
Hero.NewsletterText =styled(Box)`
    color:rgba(255,255,255,.7);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    margin-top: 25px;
    @media (min-width:768px){
        color: #828288;
    }
`
Hero.Newsletter =styled(Box)`
    max-width: 522px;
    position:relative;
    .icon{
        top: 50%;
        position: absolute;
        left: 25px;
        font-size:18px;
        transform: translateY(-50%);
        color:#6001d3;
    }
    .form-control{
        width:100%;
        border-radius:50px;
        min-height:72px;
        padding-left:55px;
    }
    .btn{
        height: 50px;
        color:#fff;
        font-size: 14px;    
        margin-top:8px;
        border-radius:500px;
        left: 2px;

        @media (min-width:992px){
            position:relative;
            top: 0px;
            right: 8px;
            height: 50px;
            font-size:16px;

        }
        
        @media (min-width:1400px){
            font-size:21px;
            height: 70px;


        }

       



        &:hover{
            color:#fff!important;
        }
    }
`
Hero.NewsletterButton = styled(Button)`

`
Hero.Box = styled(Box)`

.business-btn1{
    position: relative;
    width: 172px;
    height: 70px ;
    border-radius: 50px;
    margin-right:63px;
    font-size:16px ;

    @media (min-width:992px){
        border-radius: 50px;
        margin-right: 40px;
        width: 145px;
    }

    @media (min-width:1024px){
        border-radius: 50px;
        font-size:14px;
        height:60px;
        width:168px;
    }

    @media (min-width:1170px){
        border-radius: 50px;
        font-size:14px;
        height:60px;
        width:168px;
        margin-right: 40px;
    }

    @media (min-width:1270px){
        border-radius: 50px;
        font-size:14px;
        height:60px;
        width:168px;
        margin-right: 40px;
    }

 

}

`

export default Hero;