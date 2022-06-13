import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSectionAuditor from "~sections/digital/Hero-auditor";
import ServicesSection from '~sections/digital/Services'
import AboutSection from "~sections/digital/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import ContentSectionThree from "~sections/digital/ContentThree";
import TeamSection from "~sections/digital/Team";
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from "~sections/digital/Promo";
import CounterSection from "~sections/marketing/Counter";
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

export default function Auditor() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSectionAuditor />
      {/* <ServicesSection /> */}
      {/* <AboutSection /> */}
      {/* <ContentSectionOne /> */}
      <ContentSectionThree />
      {/* <TeamSection /> */}
      {/* <PortfolioSection /> */}
      {/* <PromoSection /> */}
      {/* <CounterSection/> */}
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
