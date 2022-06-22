import styled from 'styled-components';


const HeroImageGroup = styled.div`
 position: relative;
    width: 100%;
    margin: 0 auto;
   
    @media (min-width:768px) {
        width: 100%;
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
        top: 61%;
        z-index: 999;
    }
`

HeroImageGroup.Inner = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 1;
    margin-bottom: 21px;
    top: -50px;
    @media (min-width:768px) {
        top: 40px;
    }
    @media (min-width:992px) {
        top: -10px;
    }
    @media (min-width:1170px) {
        top: -155px;
    }
    @media (min-width:1270px) {
        top: -100px;
    }
    @media (min-width:1400px) {
        top: -65px;
    }
    @media (min-width:1600px) {
        top: -30px;
    }
    @media (min-width:1820px) {
        top: 15px;
    }
    .welcome-image--group-01__img-5 {
        position: absolute;
        left: -115%;
        top: 83%;
        width: auto;
        transform: rotateZ(270deg);    
    }
    
    .welcome-image--group-01__main {
        width: 100%;
        height: auto;
    }
`
// npm 


export default HeroImageGroup;

