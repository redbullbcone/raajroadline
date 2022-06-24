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
        width: 850px;
        height: 432px;
        padding-top: 39npx;
        padding-bottom: 105px;
        padding-right: 160px;
        padding-left: 70px;
        background: #F6FBFF;
        border-radius: 15px;
        padding-top: 63px;
        @media(min-width:1400px){
            padding-top: 63px;
            padding-left: 70px;
        }
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
        padding-top: 65px;
        background: #F6FBFF;
        border-radius: 15px;
        position: relative;
        top: 45px;
    }
    .txt-card4{
        width: 789px;
        height: 640px;
        padding-top: 165px;
        padding-left: 90px;
        padding-right: 114px;
        border-radius: 15px;
        position: relative;
        right: 209px;
    }
    .txt-card5{
        width: 789px;
        height: 507px;
        padding-top:85px;
        background: #F6FBFF;;
        border-radius: 15px;
        position: relative;
        top: 80px;
    }

    .image-card1, .image-card3, .image-card5{
        @media (min-width:1400px){
            right: 19px;
        }
    }

    .image-card3, .image-card5, .image-card4, .image-card2{
        width:100%;
        @media(min-width:1400px){
            width: 705px;
            height:100%;
        }
    }

    .main-img4 {
        width: 704px;
        height: 545px;
    }

    .cellphone-video{
        border-radius: 15px;
        position:relative;
        right:43px;

    }

    .text-card2{
        padding-left: 35px;
        padding-right: 47px;
        padding-top:  130px;
    }



    .alt-card1{
        padding-top: 81px;
        padding-bottom: 63px;
    }

    .main-img1{
        width: 705px;
        height: 646px;   
        
        @media(min-width:1400px){
            width: 705px;
            height: 646px;
        
        }
    }

    .main-img2{
        width: 705px;
        height: 588px;
        position: relative;
        right: 37px;

        @media(min-width:1400px){
            width: 705px;
            height: 588px;
        }
    }

    .main-container{
        padding-top: 81px;
        padding-bottom: 63px;
    }

    .cellphone-video video{
        width: 100%;
        height: 100%;
        border-radius: 15px;
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
            padding-left:193px;
        }
    }

   .txt-card3{
    height: 507px;
   }


    .txt-card3, .txt-card5{
        @media(min-width:992px){
            padding-right: 125px;
            padding-left: 60px;
        }

        @media (min-width:1400px){
        font-weight: 700;
        font-size: 45px;
        line-height: 54px;
        padding-right: 264px;
        }
    }

    .image-card5{
        position: relative;
        right: 165px;
        top: 38px;    
    }

    .main-img5{
        width: 705px;
        height: 588px;
    }


`
Container.Image = styled(Box)`
padding-bottom: 35px;
width: 657px;
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