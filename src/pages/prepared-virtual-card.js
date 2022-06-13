import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/startup/Hero";
import ServicesSectionOne from "~sections/startup/ServicesOne";
import CardSection from "~sections/startup/CardSection";

import ServicesSectionTwo from "~sections/startup/ServicesTwo";
import ServicesSectionThree from "~sections/startup/ServicesThree";
import AboutSection from "~sections/startup/About";
import ProcessSection from "~sections/startup/Process";

import TestimonialSection from "~sections/startup/Testimonial";
import BlogSection from "~sections/startup/Blog";
import PromoSection from "~sections/startup/Promo";
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import CtaSection from "~sections/marketing/Cta"


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
    //   iconBackground:"#6001d3"
    },
    {
      id:"ss2",
      // icon:"fas fa-bell",
      image:"image/home-startup/affiliate-2.svg",
      title: "Budget Effectively",
      text:"Easily deposit your marketing budget across multiple cards and stop overpaying for services that you did not plan for. Take control of your finances and get more for your hard-earned money.",
    //   iconBackground:"#fd346e"
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
    //   icon:"fa-solid fa-dollar-sign",
      // <i class="fa-solid fa-dollar-sign"></i>
      image:"image/home-startup/affiliate-icon4.png",
      title: "Earn Cashback on Marketing",
      text:"Grow your agency by creating refillable virtual prepaid cards for your clients. Earn Cashback on your collective agency ad spend. Our cards work on both existing and new Google Ads, Bing Ads, and Facebook marketing client accounts.",
    //   iconBackground:"#ffd700"
    },
    {
        id:"ss4",
        icon:"fa-solid fa-dollar-sign",
        // <i class="fa-solid fa-dollar-sign"></i>
        image:"image/home-startup/affiliate-icon5.png",
        title: "Assign Cards to your Clients",
        text:"Monitor your card balance on our platform. Our system makes it easy to request and refill cards. Refill multiple cards simultaneously. If you have questions or concerns our virtual card customer support team will be happy to help you.",
        // iconBackground:"#ffd700"
      }
  ]




export default function vpc() {
    return (
        <PageWrapper headerConfig={header}>
            <HeroSection
                headerimage="image/home-startup/vpc-header.png"
                herotitle="Virtual"
                herotitle2="Prepaid Cards"
                imageClass=""
                herotext1={` Earn up to 1.5% Cashback on Online`}
                herotext2={`Marketing Spend with MRKT365`}
                herotext3={`Refillable Virtual Prepaid Credit Cards!`} />

            {/* <ServicesSectionOne title="How Does It Work?"content={ServiceData}/> */}
            {/* <TestimonialSection /> */}
            {/* <ServicesSectionTwo /> */}
            <ServicesSectionThree />
            <CardSection title=""content={ServiceData}/>

            
            {/* <ProcessSection /> */}
            {/* <ProtfolioSection /> */}

            {/* <BlogSection /> */}
            {/* <PromoSection /> */}
            <CtaSection />
            <FooterOne />
        </PageWrapper>
    );
}
