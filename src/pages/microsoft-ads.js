import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/Microsoftads/Hero";
import ServicesSectionOne from "~sections/startup/ServicesOne";
import CardSection from "~sections/startup/CardSection";
import ContentSectionOne from '~sections/Microsoftads/ContentOne/ContentSectionOne'
import ContentSectionFour from "~sections/Microsoftads/ContentFour";
import AboutSection from "~sections/Microsoftads/About";
import PromoSection from '~sections/Microsoftads/Promo';

import ServicesSectionTwo from "~sections/startup/ServicesTwo";
// import AboutSection from "~sections/startup/About";
import ProcessSection from "~sections/startup/Process";
import ProtfolioSection from "~sections/startup/Portfolio";
import TestimonialSection from "~sections/startup/Testimonial";
import BlogSection from "~sections/startup/Blog";
// import PromoSection from "~sections/startup/Promo";
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import CtaSection from "~sections/marketing/Cta"
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
      image:"image/home-startup/affiliate-1.svg",
      title: "Pay Securely and Discretely",
      text:"Virtual cards are a secure way to pay online without using your personal credit card. Create cards easily on our platform for yourself, employees, agencies, and freelancers you would like to work with.",
      iconBackground:"#6001d3"
    },
    {
      id:"ss2",
      // icon:"fas fa-bell",
      image:"image/home-startup/affiliate-2.svg",
      title: "Budget Effectively",
      text:"Easily deposit your marketing budget across multiple cards and stop overpaying for services that you did not plan for. Take control of your finances and get more for your hard-earned money.",
      iconBackground:"#fd346e"
    },
    {
      id:"ss3",
      // icon:"fas fa-envelope",
      image:"image/home-startup/affiliate-3.svg",
      title:"Earn Cashback on Marketing",
      text:"Start earning instant ROI on your online marketing campaigns. Earn up to 1.5% on Google, Facebook, and Microsoft advertising services. Use our cards to pay for hundreds of other online marketing services.",
      iconBackground:"#1de2cf"
    },
    {
      id:"ss4",
      icon:"fa-solid fa-dollar-sign",
      // <i class="fa-solid fa-dollar-sign"></i>
      image:"image/home-startup/affiliate-4.svg",
      title: "Earn Cashback on Marketing",
      text:"Grow your agency by creating refillable virtual prepaid cards for your clients. Earn Cashback on your collective agency ad spend. Our cards work on both existing and new Google Ads, Bing Ads, and Facebook marketing client accounts.",
      iconBackground:"#ffd700"
    },
    {
        id:"ss4",
        icon:"fa-solid fa-dollar-sign",
        // <i class="fa-solid fa-dollar-sign"></i>
        image:"image/home-startup/affiliate-4.svg",
        title: "Assign Cards to your Clients",
        text:"Monitor your card balance on our platform. Our system makes it easy to request and refill cards. Refill multiple cards simultaneously. If you have questions or concerns our virtual card customer support team will be happy to help you.",
        iconBackground:"#ffd700"
      }
  ]


export default function Microsoft() {
    return (
        <PageWrapper headerConfig={header}>
            <Helmet>
            <title>Microsoft Ads | MRKT365</title>
            <meta name="description" content="Find the customers on the world's fastest-growing search engine! Signup for Microsoft Ads & earn a $250 free ad credit with MRKT365." />
            <meta name="geo.region" content="CA-ON" />
            <meta name="geo.placename" content="Vaughan" />
            <meta name="geo.position" content="43.815431;-79.526403" />
            <meta name="ICBM" content="43.815431, -79.526403" />
            <meta property="og:locale" content="en_CA" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Microsoft Ads | MRKT365" />
            <meta property="og:description" content="Find the customers on the world's fastest-growing search engine! Signup for Microsoft Ads & earn a $250 free ad credit with MRKT365." />
            <meta property="og:url" content="https://mrkt365.com/microsoft-ads" />
            <meta property="og:site_name" content="MRKT365" />
            <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Microsoft Ads | MRKT365" />
            <meta name="twitter:description" content="Find the customers on the world's fastest-growing search engine! Signup for Microsoft Ads & earn a $250 free ad credit with MRKT365." />
            <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
            <meta name="twitter:url" content="https://mrkt365.com/microsoft-ads" />

            </Helmet>
            <HeroSection
                headerimage="image/microsoft-ads/microsoft-hero.png"
                headerimage2="image/microsoft-ads/BG.png"
                herotitle="Microsoft Advertising"
                imageClass=""
                />

            {/* <ServicesSectionOne title="How Does It Work?"content={ServiceData}/> */}
            <PromoSection />
            <ContentSectionFour />
            <AboutSection />
            {/* <ContentSectionOne heading="" content={reverserow}/> */}
            {/* <TestimonialSection /> */}
            {/* <ServicesSectionTwo /> */}
            {/* <CardSection title=""content={ServiceData}/> */}

            
            {/* <ProcessSection /> */}
            {/* <ProtfolioSection /> */}

            {/* <BlogSection /> */}
            {/* <PromoSection /> */}
            <CtaSection />
            <FooterOne />
        </PageWrapper>
    );
}
