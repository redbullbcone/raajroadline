import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSectionMarketplace from "~sections/digital/Hero-marketplace";
import ServicesSection from "~sections/agency/Services";
import ContentSectionTwo from "~sections/agency/ContentTwo";
import AboutSection from "~sections/digital/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import TeamSection from "~sections/digital/Team";
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from '~sections/agency/Promo'
import PromoSectionTwo from '~sections/agency/PromoTwo'
import CounterSection from "~sections/agency/Counter";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"

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
      image:"image/home-agency/hire-freelancer-1.png",
      title: "Development & IT",
    },
    {
      id:"ss2",
      image:"image/home-agency/hire-freelancer-2.png",
      title: "Administrative Support",
    },
    {
      id:"ss3",
      image:"image/home-agency/hire-freelancer-3.png",
      title:"Creative Designers",
    },
    {
      id:"ss4",
      image:"image/home-agency/hire-freelancer-4.png",
      title: "Writing & Translation",
    },
    {
        id:"ss5",
        image:"image/home-agency/hire-freelancer-5.png",
        title: "Marketing & Sales",
        
      },
      {
        id:"ss6",
        image:"image/home-agency/hire-freelancer-6.png",
        title: "Accounting & Finance",
       
      }
  ]

export default function Marketplace() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSectionMarketplace />
      <ServicesSection />
      {/* <AboutSection /> */}
      {/* <ContentSectionOne /> */}
     
      <ContentSectionTwo title="Hire Freelancers" title2="for any job" content={ServiceData}/>
      <PromoSection />
      
      {/* <TeamSection /> */}
      {/* <PortfolioSection /> */}
     
      <CounterSection/>
      <PromoSectionTwo />
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
