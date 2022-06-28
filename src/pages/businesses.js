import React from "react"
import { PageWrapper } from "~components/Core"
import { Helmet } from 'react-helmet'
import HeroSection from '~sections/services/Hero'
import ContentSectionOne from '~sections/services/ContentOne/ContentSectionOne'
import ContentVideoSectionOne from '~sections/VideoSections/ContentOne/ContentVideoSectionOne'
import ProcessSection from '~sections/services/Process'
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import ServicesSectionOne from "~sections/businesses/ServicesOne";
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

var reverserow = [
  {
   "title":"We Ensure that the freelancers you Hire are the Ones Doing the Project",
   "text":"Our mission is to create a marketplace with top vendors at all price points. Domestic agencies often outsource their contracts overseas. We cut out the middle man for you and deliver the freelancers you need at the rate you want! We review all freelancers’ profiles before letting our AI suggest them to you.",
    "imagePosition":"left",
    "src":"image/marketing/pic.png",
    "alt":"",
    "bgclass":"white-background",
  },
   {
    "title":"Get Intelligent Solutions with our AI Auditor",
    "text":"We trained our AI to deliver objective insights into your business's marketing campaigns. The AI Auditor will quickly identify on-site SEO, technical SEO, Adwords, and social media marketing issues. Finally, the AI will recommend to you the right freelancers to choose from to meet and exceed your specific needs.",
     "imagePosition":"left",
     "src":"image/marketing/business-3.png",
     "alt":"",
    "bgclass":"white-background",


   }
];

var intergrations=[
  {
    "image":"image/ai-integration/Facebook.png",
  },
  {
    "image":"image/ai-integration/Twitter.png",
  },
  {
    "image":"image/ai-integration/Instagram.png",
  },
  {
    "image":"image/ai-integration/Linkedin.png",
  },
  {
    "image":"image/ai-integration/Google_Analytics.png",
  },
  {
    "image":"image/ai-integration/Google_Adwords.png",
  },
  {
    "image":"image/ai-integration/google-my-business.png",
  },
  {
    "image":"image/ai-integration/Youtube.png",
  },
  {
    "image":"image/ai-integration/Amazon.png",
  }
];

var businesscontent = [
  {
   "title":"Manage Your Team with our Employee Monitoring App",
   "text":"Measure the productivity of freelancers you hire and your existing employees. Our services include an easy to install tracking program. All activities completed by your team can be monitored and documented through our employee tracker.",
    "imagePosition":"right",
    "src":"image/marketing/business-4.png",
    "alt":"",
    "newclass":"white-back ",
    "imageclass":"business-right-para",
    "bgclass":"main-white-sec",

  },
   {
    "title":"Hire interns from all over the globe",
    "text":"Our mission is to create a marketplace with top vendors at all price points. Domestic agencies often outsource their contracts overseas. We cut out the middle man for you and deliver the freelancers you need at the rate you want! We review all profiles before letting our AI reccomend them to you.",
     "imagePosition":"left",
     "src":"image/marketing/business-5.png",
     "alt":"",
     "imageclass":"alt-image",
     "bgclass":"blue-background business-last-sec",
   },
   
];


const ServiceData =[
  {
    id:"ss1",
    image:"image/businesses/ai-auditor.svg",
    whiteImage:"image/businesses/ai-auditor-white.svg",
    title: "AI SEO Auditor &",
    title2:"Freelancer Recommendation",
    linkPage:"ai-auditor",
    cardbg:"blue",
    whiteImageClass:"business-ai",
  },
  {
    id:"ss2",
    image:"image/businesses/online-marketing.svg",
    whiteImage:"image/businesses/online-marketing-white.svg",
    title: "Online Marketing",
    title2:"Budget Optimization",
    cardbg:"red",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

  },
  {
    id:"ss3",
    image:"image/businesses/freelancer-employee.svg",
    whiteImage:"image/businesses/freelancer-employee-white.svg",
    title:"Freelancer & Employee",
    title2:"Monitoring",
    cardbg:"mustard",
    whiteImageClass:"business-freelancer",
    linkPage:"employee-monitoring",


  },
  {
    id:"ss4",
    image:"image/businesses/KYC.svg",
    whiteImage:"image/businesses/KYC-white.svg",
    title: "AML & KYC Verified",
    title2: "Freelancers",
    cardbg:"orange",
    whiteImageClass:"business-kyc",
    linkPage:"freelancers",

  },
  {
    id:"ss4",
    image:"image/businesses/payment.svg",
    whiteImage:"image/businesses/payment-white.svg",
    title: "Easy International",
    title2:"Payment Processing",
    cardbg:"cyan",
    whiteImageClass:"business-payment",
    linkPage:'prepared-virtual-card',
  },
  {
    id:"ss4",
    image:"image/businesses/add-college.svg",
    whiteImage:"image/businesses/add-college-white.svg",
    title: "Add College-Educated",
    title2: "interns to your Team",
    cardbg:"purple",
    whiteImageClass:"business-college",
    linkPage:"prepared-virtual-card",
  }

]




export default function Services() {

  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
        <title>Hire Freelancers & Agencies on One AI Marketing Platform</title>
        <meta name="description" content="Hire freelancers, agencies, & interns you need at the rate you want. Automate your marketing & take your business to the next level with MRKT365." />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire Freelancers & Agencies on One AI Marketing Platform" />
        <meta property="og:description" content="Hire freelancers, agencies, & interns you need at the rate you want. Automate your marketing & take your business to the next level with MRKT365." />
        <meta property="og:url" content="https://mrkt365.com/businesses" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Hire Freelancers & Agencies on One AI Marketing Platform" />
        <meta name="twitter:description" content="Hire freelancers, agencies, & interns you need at the rate you want. Automate your marketing & take your business to the next level with MRKT365." />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com/businesses" />
      </Helmet>
      <HeroSection/>
      <ServicesSectionOne title="Everything You Need to Make Work Happen" content={ServiceData} />
      {/* <ServicesSection/> */}
      <ContentSectionOne heading="Why Work With Us"/>
      {/* <AboutSection/> */}
      <ProcessSection content={intergrations} />
     <ContentVideoSectionOne />
      {/* <PromoSection/> */}
      {/* <PricingSection/> */}
      {/* <TestimonialSection/> */}
    {/* <ContactSection/> */}
    <CounterSection/>
    <CtaSection />
    <FooterOne/>
    </PageWrapper>


  )
}
