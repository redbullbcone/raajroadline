import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from '~sections/project/Hero'
import FeatureSection from '~sections/project/Features'
import ContentOne from '~sections/project/ContentOne'
import ContentTwo from '~sections/project/ContentTwo'
// import IntegrationSection from '~sections/project/Integration'
import CtaSection from "~sections/marketing/Cta"
// import FooterTwo from '~sections/project/FooterTwo'
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import ServicesSectionOne from "~sections/intern/ServicesOne";
import { Helmet } from "react-helmet";



const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid:false,
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
    image:"image/intern/step1.svg",
    title: "Step 1",
    text: "Sign up for free",
    text2: "as an intern",
    iconBackground:"#6001d3"
  },
  {
    id:"ss2",
    image:"image/intern/step2.svg",
    title: "Step 2",
    text: "Create an amazing",
    text2: "profile",
    iconBackground:"#fd346e"
  },
  {
    id:"ss3",
    image:"image/intern/step3.svg",
    title:"Step 3",
    text:"Browse our marketplace to ",
    text2:"find your dream job",
    iconBackground:"#1de2cf"
  },
  {
    id:"ss4",
    image:"image/intern/step4.svg",
    title: "Step 4",
    text:"Apply for your dream internship",
    text2:"and kick-start your career",
    iconBackground:"#ffd700"
  }
]


export default function Project() {
  return (
    <PageWrapper headerConfig={header}>
        <Helmet>
        <title>Kickstart your Career | Find a Virtual Internship Today</title>
        <meta name="description" content="Searching for a virtual internship? Find meaningful internships, connect with top global companies, and gain valuable skills while working from home." />

        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kickstart your Career | Find a Virtual Internship Today" />
        <meta property="og:description" content="Searching for a virtual internship? Find meaningful internships, connect with top global companies, and gain valuable skills while working from home." />
        <meta property="og:url" content="https://mrkt365.com/internships" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kickstart your Career | Find a Virtual Internship Today" />
        <meta name="twitter:description" content="Searching for a virtual internship? Find meaningful internships, connect with top global companies, and gain valuable skills while working from home." />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com/internships" />
        </Helmet>
        <HeroSection/>
        {/* <FeatureSection/> */}
        <ContentOne/>
        <ContentTwo/>
        <ServicesSectionOne ClassName="intern-features" title="How to get started" content={ServiceData}/>
        <CtaSection/> 
        <FooterOne />
    </PageWrapper>
  )
}

