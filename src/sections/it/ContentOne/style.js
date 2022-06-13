import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Container = styled(Box)
`
    padding-top: 50px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:1024px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }
    @media (min-width:1170px) {
        padding-top: 60px;
        padding-bottom: 200px;
    }
    @media (min-width:1270px) {
        padding-top: 60px;
        padding-bottom: 200px;
    }
    @media (min-width:1400px) {
        padding-top: 60px;
        padding-bottom: 200px;
    }

    .txt-card1{
        width: 789px;
        height: 640px;
        padding-top: 163px;
        padding-bottom: 199px;
        padding-right: 160px;
        padding-left: 114px;
        background: #FFEBF0;
        border-radius: 15px;
        
    }
    .txt-card2{
        width: 789px;
        height: 640px;
        padding-top: 163px;
        padding-bottom: 199px;
        padding-left: 90px;
        padding-right: 114px;
        background:#EFE6FB;
        border-radius: 15px;
        position: relative;
        right: 209px;
    
    }
    .txt-card3{
        width: 789px;
        height: 640px;
        padding-top: 163px;
        padding-bottom: 199px;
        padding-right: 160px;
        padding-left: 114px;
        background: #E8FCFA;
        border-radius: 15px;
    }
    .txt-card4{
        width: 789px;
        height: 640px;
        padding-top: 163px;
        padding-bottom: 199px;
        padding-left: 90px;
        padding-right: 114px;
        background: #E6F0FB;
        border-radius: 15px;
        position: relative;
        right: 209px;
    }
    .txt-card5{
        width: 789px;
        height: 640px;
        padding-top: 163px;
        padding-bottom: 199px;
        padding-right: 160px;
        padding-left: 114px;
        background: #F7F59F;
        border-radius: 15px;
    }

    .image-card1, .image-card3, .image-card5{
        @media (min-width:1400px){
            right: 19px;
        }
    }

    .image-card1, .image-card3, .image-card5, .image-card4, .image-card2{
        width:100%;
        @media(min-width:1400px){
            width: 657px;
        }
    }

    .txt-card2, .txt-card4{

        @media(min-width:992px){
            padding-left: 125px;
            padding-right: 100px;
            right: 123px;
        }

        @media (min-width:1170px){
            right: 119px;
            padding-left: 200px;
        }

        @media (min-width:1400px){
            right: 155px;
            padding-left:232px;
        }
    }

    .txt-card2, .txt-card4, .txt-card1, .txt-card3, .txt-card4, .txt-card5{
        @media(min-width:992px){
            width: 580px;
            height: 520px;
        }
        
        @media (min-width:1170px){
            width:122%;
            height: 540px;
        }

        @media(min-width:1400px){
        width: 789px;

        }
    }

    .resp-image{
        @media(min-width:992px){
            height: 400px;
        }
    }

    .txt-card1, .txt-card3, .txt-card5{
        @media(min-width:92px){
            padding-right: 125px;
            padding-left: 100px;
        }

        @media (min-width:1400px){
        font-weight: 700;
        font-size: 45px;
        line-height: 54px;
        padding-right:232px;
        }
    }

`
Container.Image = styled(Box)`
padding-bottom: 35px;
width: 657px;
height: 439px;
border-radius: 15px;
z-index: 99;




@media (min-width: 1024px) {
    padding-bottom: 0;
}

@media (min-width: 1200px) {
   
}
`
Container.Box = styled(Box)`
.image-card2{
    position: relative;
    z-index: 99;
}
`
export default Container;