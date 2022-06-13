import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/agency/Hero";
import ServicesSectionOne from "~sections/recruitmentAgency/ServicesOne";
import ServicesSection from "~sections/agency/Services";
import AboutSection from "~sections/agency/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import PricingSection from "~sections/agency/Pricing";
import TestimonialSection from "~sections/agency/Testimonial";
import FooterFive from "~sections/agency/FooterFive";
import HeaderButton from "~sections/marketing/Header";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"


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
    image:"image/recruitment-agency/icon1.jpg",
    text: "Earn 50% of our service",
    text2:"fees up to $1000",
    iconBackground:"#6001d3"
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"image/recruitment-agency/icon2.jpg",
    text: "Get paid in",
    text2: "US dollars",
    iconBackground:"#fd346e"
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"image/recruitment-agency/icon3.jpg",
    text:"Monitor the work of",
    text2:"freelancers or employees",
    iconBackground:"#ffd700"
    
  },
  {
    id:"ss4",
    // icon:"fas fa-chart-pie",
    image:"image/recruitment-agency/icon4.jpg",
    text: "We provide all",
    text2: "marketing materials",
    iconBackground:"#1de2cf"
    
  }
]

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSectionOne className='earn-affiliate-title' title="Earn Affiliate Income with MRKT365"content={ServiceData}/>
      <ContentSectionOne />
      {/* <ServicesSection /> */}
      <AboutSection />
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <CtaSection /> */}
      {/* <FooterFive /> */}
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
