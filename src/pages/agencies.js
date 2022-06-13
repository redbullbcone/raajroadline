import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/digital/Hero";
import ServicesSection from '~sections/digital/Services'
import AboutSection from "~sections/digital/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import ContentSectionTwo from "~sections/digital/ContentTwo";
import TeamSection from "~sections/digital/Team";
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from "~sections/digital/Promo";
import CounterSection from "~sections/marketing/Counter";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"


// import FooterSix from "~sections/digital/FooterSix";

// const header = {
//   headerClasses:
//     "site-header site-header--menu-end dark-header site-header--sticky",
//   containerFluid: false,
//   buttonBlock: (
//     <HeaderButton className="d-none d-sm-flex" children="Free SEO Analysis" />
//   ),
//   darkLogo: false,
// };
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

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      {/* <AboutSection /> */}
      {/* <ContentSectionOne /> */}
      <ContentSectionTwo />
      {/* <TeamSection /> */}
      {/* <PortfolioSection /> */}
      {/* <PromoSection /> */}
      <CounterSection/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
