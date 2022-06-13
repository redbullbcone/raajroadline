import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/startup/Hero";
import ServicesSectionOne from "~sections/startup/ServicesOne";
import ServicesSectionTwo from "~sections/startup/ServicesTwo";
import AboutSection from "~sections/startup/About";
import ProcessSection from "~sections/startup/Process";
import ProtfolioSection from "~sections/startup/Portfolio";
import TestimonialSection from "~sections/startup/Testimonial";
import BlogSection from "~sections/startup/Blog";
import PromoSection from "~sections/startup/Promo";
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import CtaSection from "~sections/marketing/Cta"
import CounterSection from "~sections/marketing/Counter"




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
const ServiceData = [
  {
    id: "ss1",
    // icon:"fas fa-layer-group",
    image: "image/home-startup/affiliate-1.svg",
    text: "Sign Up as a",
    text2: "Partner",
    iconBackground: "#6001d3"
  },
  {
    id: "ss2",
    // icon:"fas fa-bell",
    image: "image/home-startup/affiliate-2.svg",
    text: "Receive Links & ",
    text2: "Promotional Material",
    iconBackground: "#fd346e"
  },
  {
    id: "ss3",
    // icon:"fas fa-envelope",
    image: "image/home-startup/affiliate-3.svg",
    text: "Refer Freelancers,",
    text2: "Businesses & Friends",
    iconBackground: "#1de2cf"
  },
  {
    id: "ss4",
    icon: "fa-solid fa-dollar-sign",
    // <i class="fa-solid fa-dollar-sign"></i>
    image: "image/home-startup/affiliate-4.svg",
    text: "Earn Passive",
    text2: "Income",
    iconBackground: "#ffd700"
  }
]


export default function Startup() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection
        headerimage="image/home-startup/header-image.jpg"
        herotitle="MRKT365"
        herotitle2="Affiliate Program"
        herotext1={`Increase your `}
        herotextBold={`EARNINGS`}
        herotext2={`Help others `}
        herotextBold2={`GROW THEIR BRAND`}
        herotext3={`Become a `}
        herotextBold3={`MRKT365 AFFILIATE`}
        imageClass="box-shadow"
      />
      <ServicesSectionOne
        title="How Does It Work?"
        content={ServiceData}
      />
      <TestimonialSection />
      <ServicesSectionTwo />
      <AboutSection />
      {/* <ProcessSection /> */}
      {/* <ProtfolioSection /> */}

      {/* <BlogSection /> */}
      {/* <PromoSection /> */}
      <CounterSection/>
      <CtaSection />
      <FooterOne />
    </PageWrapper>
  );
}
