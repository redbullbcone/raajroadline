import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/startup/Hero";
import ServicesSectionOne from "~sections/VirtualPrepaidCard/ServicesOne";
import TestimonialSection from "~sections/VirtualPrepaidCard/Testimonial";
import ContentSectionOne from '~sections/VirtualPrepaidCard/ContentOne'
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import CtaSection from "~sections/marketing/Cta"
import { Helmet } from "react-helmet";


const header = {
    headerClasses: "site-header site-header--menu-start light-header site-header--sticky ",
    containerFluid:true,
    // customLogo: Images.HeaderLogo,
    buttonBlock: (
      <HeaderButton
        className="ms-auto d-none d-xs-inline-flex"
        btnOneText="Login"
        btnTwoText="Sign Up"
        mr="15px"
        mrLG="0"
      />
    ),
  }
  const ServiceData =[
    {
      id:"ss1",
      // icon:"fas fa-layer-group",
      image:"image/VPC/handshake.svg",
      whiteImage:"image/VPC/handshake-white.svg",
      title: "Easy to use reloadable",
      title2:"prepaid virtual cards",
      // linkPage:"ai-auditor",
      whiteImageClass:"business-ai",
      cardbg:'purple',
    },
    {
      id:"ss2",
      // icon:"fas fa-bell",
      image:"image/VPC/files.svg",
      whiteImage:"image/VPC/files-white.svg",
      title: "Add cards for  ",
      title2:"employees & clients ",
      // title3:"material",
      whiteImageClass:"business-online",
      // linkPage:"marketplace",
      cardbg:'pink',
      
    },
    {
      id:"ss3",
      // icon:"fas fa-envelope",
      image:"image/VPC/right-tick.svg",
      whiteImage:"image/VPC/right-tick-white.svg",
      title: "Fix Microsoft & Google",
      title2:"verification issues",
      // title3:"businesses",
      // linkPage:"ai-auditor",
      cardbg:"cyan",
      whiteImageClass:"business-ai",
  
      
    },

  ]




export default function vpc() {
    return (
        <PageWrapper headerConfig={header}>
            <Helmet>
            <title>MRTK365 Cashback Prepaid Virtual Credit Cards</title>
            <meta name="description" content="Receive up to 1.5% cashback on online marketing, pay securely, & budget effectively with refillable cards. Apply for a virtual prepaid credit card today!" />
            <meta name="geo.region" content="CA-ON" />
            <meta name="geo.placename" content="Vaughan" />
            <meta name="geo.position" content="43.815431;-79.526403" />
            <meta name="ICBM" content="43.815431, -79.526403" />
            <meta property="og:locale" content="en_CA" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="MRTK365 Cashback Prepaid Virtual Credit Cards" />
            <meta property="og:description" content="Receive up to 1.5% cashback on online marketing, pay securely, & budget effectively with refillable cards. Apply for a virtual prepaid credit card today!" />
            <meta property="og:url" content="https://mrkt365.com/prepaid-virtual-cards" />
            <meta property="og:site_name" content="MRKT365" />
            <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="MRTK365 Cashback Prepaid Virtual Credit Cards" />
            <meta name="twitter:description" content="Receive up to 1.5% cashback on online marketing, pay securely, & budget effectively with refillable cards. Apply for a virtual prepaid credit card today!" />
            <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
            <meta name="twitter:url" content="https://mrkt365.com/prepaid-virtual-cards" />

            </Helmet>
            <HeroSection
                headerimage="image/home-startup/vpc-header.png"
                herotitle="Virtual"
                herotitle2="Prepaid Cards"
                imageClass=""
                herotext1={` Earn up to 1.5% Cashback on Online`}
                herotext2={`Marketing Spend with MRKT365`}
                herotext3={`Refillable Virtual Prepaid Credit Cards!`} />
            <ServicesSectionOne ClassName="intern-features" title="Global Payment Solutions tailored" title2="for Businesses & Agencies" content={ServiceData}/>
            <TestimonialSection />
            <ContentSectionOne/>
            <CtaSection />
            <FooterOne />
        </PageWrapper>
    );
}
