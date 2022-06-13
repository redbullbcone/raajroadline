import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import FeatureSection from "~sections/marketing/Features"
import ServicesSectionOne from "~sections/homepageServiceSection/ServicesOne";
import ContentSectionOne from "~sections/marketing/ContentOne"
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
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

const Testimonialdata = [
  {
      image:"image/marketing/provided-feature-icon-1.svg",
      title:"Marketplace",
      text:"Get connected to Global Freelancers, Agencies, & Interns.", 
     
  },
  {
      image:"image/marketing/provided-feature-2.svg",
      title:"AI Auditor",
      text:"All your Marketing Data, \n Analytics, and AI in One \n Dashboard",
  },
  {
      image:"image/marketing/provided-feature-3.svg", 
     title:"Prepaid Virtual Cards",
      text:"Earn up to 1.5% Cashback on Online \n Marketing Spend with MRKT365",
  },
  {
      image:"image/marketing/provided-feature-4.svg",
      title:"Employee Monitoring",
      text:"Bring out the Best in your Remote Team with Productivity Tools that gets Work done.",
     
  }
]

var reverserow = [
  {
   "title":"Businesses",
   "text":"Get connected with top-quality experts, interns, and agencies npm run build \n Monitor multiple products with a single easy-to-use marketing dashboard \n Perform AI audits, check your website health and connect any digital marketing channel",
    "imagePosition":"left",
    "src":"image/marketing/businesses.png",
    "alt":"",
  },
   {
    "title":"Freelancers",
    "text":"Find top clients who will need your expertise from all across the globe \n Get your skill sets matched with the right job \n Work when, wherever, and on what you like ",
     "imagePosition":"right",
     "src":"image/marketing/freelancers.png",
     "alt":"",
   },
   {
    "title":"Agencies",
    "text":"Get recommendations from our AI system matching your unique needs to the best expert or agency \n Measure productivity of employees and receive insight-filled reports \n Find quality talent to add to your team and take your business to the next level",
     "imagePosition":"left",
     "src":"image/marketing/agencies.png",
     "alt":"",

   },
   {
    "title":"Interns",
    "text":"Gain industry experience and work for top companies from across the globe \n Choose how many weekly hours you can allocate towards the internship \n Work at the comfort of your home making it easier to continue your studies with an internship",
     "imagePosition":"right",
     "src":"image/marketing/interns.png",
     "alt":"",
   },
   {
    "title":'Affiliates',
    "text":"Get connected with top-quality experts, interns, and agencies \n Perform AI audits, check your website health and connect any digital marketing channel \n Monitor multiple products with a single easy-to-use marketing dashboard",
     "imagePosition":"left",
     "src":"image/marketing/affiliates.png",
     "alt":"",
     
   }
];

const ServiceData =[
  {
    id:"ss1",
    image:"image/homepage/feature1.svg",
    title: "Marketplace",
    text: "Get connected to Global ",
    text2: "Freelancers, Agencies, & Interns.",
    iconBackground:"#6001d3",
    
  },
  {
    id:"ss2",
    image:"image/homepage/feature2.svg",
    title: "AI Auditor",
    text: "All your Marketing Data,",
    text2: 'Analytics, and AI in One ',
    text3: "Dashboard",
    iconBackground:"#fd346e"
  },
  {
    id:"ss3",
    image:"image/homepage/feature3.svg",
    title:"Prepaid Virtual Cards",
    text:"Earn up to 1.5% Cashback on Online Marketing Spend with MRKT365",
    iconBackground:"#1de2cf"
  },
  {
    id:"ss4",
    image:"image/homepage/feature4.svg",
    title: "Employee Monitoring",
    text:
      "Bring out the Best in your Remote",
    text2:"Team with Productivity Tools that",
    text3:"gets Work done.",
      iconBackground:"#ffd700"
  }
]




export default function Marketing() {
  return (
      <PageWrapper headerConfig={header}>
        <HeroSection/>
        {/* <ContentSectionOne heading="Who is Market365 for?" content={reverserow}/> */}
        <ServiceSection/>
        <FeatureSection/>
        {/* <ContentSectionTwo/> */}
        {/* <TestimonialSection heading="Provided Feature" data={Testimonialdata}/> */}
        <ServicesSectionOne title="Provided Features" content={ServiceData}/>
        <CounterSection/>
        <CtaSection />
        <FooterOne/>
      </PageWrapper>
  )
}
