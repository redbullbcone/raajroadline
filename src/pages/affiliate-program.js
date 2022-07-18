import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/AffiliatePlatform/Hero";
import ServicesSectionOne from "~sections/intern/ServicesOne";
import ServicesSectionTwo from "~sections/startup/ServicesTwo";
import AboutSection from "~sections/startup/About";
import TestimonialSection from "~sections/startup/Testimonial";
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import CtaSection from "~sections/marketing/Cta"
import CounterSection from "~sections/marketing/Counter"
import { Helmet } from "react-helmet";




const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky ",
  containerFluid:true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Sign Up Now"
      mr="15px"
      mrLG="0"
    />
  ),
}
const ServiceData =[
  {
    id:"ss1",
    // icon:"fas fa-layer-group",
    image:"image/affiliate-program/handshake.svg",
    whiteImage:"image/affiliate-program/handshake-white.svg",
    title: "Sign Up as a",
    title2:"partner",
    linkPage:"ai-auditor",
    whiteImageClass:"business-ai",
    cardbg:'purple',
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"image/affiliate-program/files.svg",
    whiteImage:"image/affiliate-program/files-white.svg",
    title: "Receive links ",
    title2:"and promotional ",
    title3:"material",
    whiteImageClass:"business-online",
    linkPage:"marketplace",
    cardbg:'pink',
    
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"image/affiliate-program/message.svg",
    whiteImage:"image/affiliate-program/message-white.svg",
    title: "Refer ",
    title2:"freelancers &",
    title3:"businesses",
    linkPage:"ai-auditor",
    cardbg:"mustard",
    whiteImageClass:"business-ai",

    
  },
  {
    id:"ss4",
    // icon:"fas fa-chart-pie",
    image:"image/affiliate-program/dollar.svg",
    whiteImage:"image/affiliate-program/dollar-white.svg",
    title: "Earn passive",
    title2:"income",
    cardbg:"cyan",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

    
  }
]


export default function Startup() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Become a MRKT365 Affiliate Partner</title>
      <meta name="description" content="Become an affiliate on our platform & earn income on every job your network completes. Earn money while helping your network hire or be hired."/>
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Become a MRKT365 Affiliate Partner" />
      <meta property="og:description" content="Become an affiliate on our platform & earn income on every job your network completes. Earn money while helping your network hire or be hired." />
      <meta property="og:url" content="https://mrkt365.com/affiliates" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Become a MRKT365 Affiliate Partner" />
      <meta name="twitter:description" content="Become an affiliate on our platform & earn income on every job your network completes. Earn money while helping your network hire or be hired." />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/affiliates" />
      </Helmet>
      <HeroSection/>
      <ServicesSectionOne ClassName="intern-features" title="How Does it Work?" content={ServiceData}/>
      <TestimonialSection />
      <ServicesSectionTwo />
      <AboutSection />
      <CounterSection/>
      <CtaSection />
      <FooterOne />
    </PageWrapper>
  );
}
