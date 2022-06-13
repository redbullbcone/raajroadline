import React from "react";
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/marketing/Header"
import HeroSection from '~sections/it/Hero'
import ServicesSection from '~sections/it/Services'
import FeatureSection from '~sections/it/Feature'
import ContentSectionOne from '~sections/it/ContentOne'
import ProcessSection from '~sections/it/Process'
import CtaSection from "~sections/marketing/Cta"
import TestimonialSection from '~sections/it/Testimonial'
import ContactSection from '~sections/it/Contact'
import FooterOne from "~sections/marketing/FooterOne"

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
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


const ServiceCard =[
{
  image:"image/freelancers/globe.png",
  title:"Increase your Reach to a Global Marketplace",   
},
{
  image:"image/freelancers/clock.png",
  title:"Choose When, Where & How You Want to Work",   
},
{
  image:"image/freelancers/foldar.png",
  title:"Receive Payments Quickly & Securely",   
},
{
  image:"image/freelancers/heart.png",
  title:"Work on Projects that You're Passionate About",   
}

]





export default function HomeIt() {
  return (
    <PageWrapper headerConfig={header}>
        <HeroSection/>
        <ServicesSection ServiceDataIt={ServiceCard} />
        <FeatureSection/>
        <ContentSectionOne/>
        {/* <ProcessSection/> */}
        <CtaSection/>
        {/*
        <TestimonialSection/>
        <ContactSection/> */}
        <FooterOne/> 
    </PageWrapper>
  )
}