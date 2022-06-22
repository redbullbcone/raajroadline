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
import { Helmet } from "react-helmet";

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
        <Helmet>
        <title>Find Freelance Projects Today | Join MRKT365</title>
        <meta name="description" content="Find the best freelancing jobs from around the world & connect with top companies. All you need is a laptop & an internet connection. Become a freelancer!" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Find Freelance Projects Today | Join MRKT365" />
        <meta property="og:description" content="Find the best freelancing jobs from around the world & connect with top companies. All you need is a laptop & an internet connection. Become a freelancer!" />
        <meta property="og:url" content="https://mrkt365.com/freelancers" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Find Freelance Projects Today | Join MRKT365" />
        <meta name="twitter:description" content="Find the best freelancing jobs from around the world & connect with top companies. All you need is a laptop & an internet connection. Become a freelancer!" />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com/freelancers" />
        </Helmet>
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