import styled from 'styled-components';


const HeroImageGroup = styled.div`
 position: relative;
    width: 85%;
    margin: 0 auto;
   
    @media (min-width:768px) {
        width: 80%;
    }

    @media (min-width:1240px) {
        position: absolute;
        top: 55%;
        right: 2%;
        transform: translateY(-50%);
        width: 46%;
    }

    @media (min-width:1368px) {
        width: 46% !important;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width:1366px) {
        right: 5%;
        top: 65%;
    }


`

HeroImageGroup.Inner = styled.div`
    position: relative;
    
    margin: 0 auto;
    z-index: 1;
    margin-bottom: 21px;

    img {
        /* width: 110%; */
    }

    @media (min-width:1240px) {
        margin-left: auto;
        width: 656px;
        height: 504px;
    }

    @media (min-width:1200px) {
        margin-left: auto;
        width: 90%;
    }

    @media (min-width:1600px) {
        width: 731px;
        object-fit: contain;
    }



    .welcome-image--group-01__img-1 {
        position: absolute;
        left: -2%;
        top: -7%;
        width: 28%;
        box-shadow: 0 44px 54px rgba(37, 55, 63, 0.16);
        border-radius: 50%;
    }

    .welcome-image--group-01__img-2 {
        position: absolute;
        left: 26%;
        top: -25%;       
        width: 33%;
        z-index: -1;
    }

    .welcome-image--group-01__img-3 {
        position: absolute;
        right: 9%;
        bottom: -10%;
        width: 26%;
        transform: translateX(-50%);
        z-index: -1;
    }

    .welcome-image--group-01__img-4{
        position: absolute;
        left: 0;
        top: 50%;
        width: 23%;
        z-index: -1;
        transform: translateY(-50%);
    }

    .welcome-image--group-01__img-5 {
        position: absolute;
        left: -126%;
        top: 83%;
        width: auto;
        transform: rotateZ(270deg);    
    }

    .welcome-image--group-01__img-6 {
        position: absolute;
        right: -9%;
        top: 50%;
        width: 27%;
        transform: translateY(-50%);
        z-index: -1;
    }

    .welcome-image--group-01__img-7 {
        position: absolute;
        right: -11%;
        bottom: -2%;
        width: 32%;
        z-index: -1;
    }
    .welcome-image--group-01__main{
        width: 656px;
        height: 504px;
    }
`
// npm 


export default HeroImageGroup;

