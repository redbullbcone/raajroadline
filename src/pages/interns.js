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

