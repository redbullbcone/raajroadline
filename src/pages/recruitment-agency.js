import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/agency/Hero";
import ServicesSectionOne from "~sections/intern/ServicesOne";
import AboutSection from "~sections/agency/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import HeaderButton from "~sections/marketing/Header";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
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
    image:"image/recruitment-agency/graph.svg",
    whiteImage:"image/recruitment-agency/white-graph.svg",
    title: "Earn 50% of our",
    title2:"service fees up",
    title3:"to $1000",
    linkPage:"ai-auditor",
    whiteImageClass:"business-ai",
    cardbg:'purple',
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"image/recruitment-agency/money.svg",
    whiteImage:"image/recruitment-agency/white-money.svg",
    title: "Get paid",
    title2:"securely in",
    title3:"US Dollars",
    whiteImageClass:"business-online",
    linkPage:"marketplace",
    cardbg:'pink',
    
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"image/recruitment-agency/right-clock.svg",
    whiteImage:"image/recruitment-agency/white-right-clock.svg",
    title: "Monitor the work",
    title2:"of freelancers or",
    title3:"employees",
    linkPage:"ai-auditor",
    cardbg:"mustard",
    whiteImageClass:"business-ai",

    
  },
  {
    id:"ss4",
    // icon:"fas fa-chart-pie",
    image:"image/recruitment-agency/notepad.svg",
    whiteImage:"image/recruitment-agency/white-notepad.svg",
    title: "We provide all",
    title2:"marketing",
    title3:"materials",
    cardbg:"cyan",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

    
  }
]

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Affiliate Recruiting Services | Earn More With MRKT365</title>
      <meta name="description" content="Take your recruitment agency global! Connect your network to our marketplace & earn affiliate income when they receive jobs. We pay affiliates the most!" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Affiliate Recruiting Services | Earn More With MRKT365" />
      <meta property="og:description" content="Take your recruitment agency global! Connect your network to our marketplace & earn affiliate income when they receive jobs. We pay affiliates the most!" />
      <meta property="og:url" content="https://mrkt365.com/recruitment-agencies" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Affiliate Recruiting Services | Earn More With MRKT365" />
      <meta name="twitter:description" content="Take your recruitment agency global! Connect your network to our marketplace & earn affiliate income when they receive jobs. We pay affiliates the most!" />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/recruitment-agencies" />

      </Helmet>
      <HeroSection />
      <ServicesSectionOne ClassName="intern-features" title="Earn Affiliate Income with MRKT365" content={ServiceData}/>
      <ContentSectionOne />
      <AboutSection />
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
