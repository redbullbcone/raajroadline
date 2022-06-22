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
import { Helmet } from "react-helmet";


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
      <Helmet>
      <title>All-in-One Agency Scaling Platform | MRKT365</title>
      <meta name="description" content="Sell your services online, manage your team, & hire talent from all over the globe. Our easy-to-use platform has everything your agency needs to thrive!" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="All-in-One Agency Scaling Platform | MRKT365" />
      <meta property="og:description" content="Sell your services online, manage your team, & hire talent from all over the globe. Our easy-to-use platform has everything your agency needs to thrive!" />
      <meta property="og:url" content="https://mrkt365.com/agencies" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="All-in-One Agency Scaling Platform | MRKT365" />
      <meta name="twitter:description" content="Sell your services online, manage your team, & hire talent from all over the globe. Our easy-to-use platform has everything your agency needs to thrive!" />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/agencies" />
      </Helmet>
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
