import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import FeatureSection from "~sections/marketing/Features"
import ServicesSectionOne from "~sections/homepageServiceSection/ServicesOne";
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import { Helmet } from "react-helmet"
import ContentSectionOne from "~sections/Homepage/ContentOne"

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky ",
  containerFluid:true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Sign Up"
      mr="15px"
      mrLG="0"
    />
  ),
}


var reverserow = [
  {
   "title":"Businesses",
   "text1":"Get connected with & hire top-quality freelancers, interns, and agencies.",
   "text2":"Transform your marketing decision-making process with our AI scans & dashboards.",
   "text3":"Seamlessly connect & monitor your existing team’s or contractor's performance.",
   "imagePosition":"left",
   "src":"image/homepage/businesses.png",
   "imageclass":"bigImage",
   "gifsrc":"image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
   "alt":"Businesses",
   "bgclass":"home-section-1",
  },
   {
    "title":"Freelancers",
    "text1":"Get matched with the right clients & work with international companies.",
    "text2":"Work the way you like. Receive short-term, long-term, & continuous project offers.",
    "text3":"Collect payments securely and promptly using our proof-of-work app.",
    "imagePosition":"right",
    "src":"image/homepage/freelancers.png",
    "imageclass":"bigImage respimg",
    "gifsrc":"image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Freelancers",
    "bgclass":"home-section-2",
   },
   {
    "title":"Agencies",
    "text1":"Get recommendations from our AI system matching your unique needs to the best expert or agency",
    "text2":"Measure productivity of employees and receive insight-filled reports",
    "text3":"Find quality talent to add to your team and take your business to the next level",
    "imagePosition":"left",
    "src":"image/homepage/agencies.png",
    "imageclass":"bigImage",
    "gifsrc":"image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Agencies",
    "bgclass":"home-section-3",
   },
   {
    "title":"Interns",
    "text1":"Gain industry experience and work for top companies from across the globe",
    "text2":"Choose how many weekly hours you can allocate towards the internship",
    "text3":"Work at the comfort of your home making it easier to continue your studies with an internship",
    "imagePosition":"right",
    "src":"image/homepage/interns.png",
    "imageclass":"bigImage respimg",
    "gifsrc":"image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Interns",
    "bgclass":"home-section-4",
   },
   {
    "title":'Recruiters',
    "text1":"Place your candidates on a global stage",
    "text2":"Earn high commission rates on all transactions",
    "text3":"Receive ready-made marketing materials",
    "imagePosition":"left",
    "src":"image/homepage/recuritment-agencies.png",
    "imageclass":"bigImage",
    "gifsrc":"image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Recruitment Agencies",
    "bgclass":"home-section-5",
   },
   {
    "title":'Affiliates',
    "text1":"Earn affiliate income from buyers & sellers on our marketplace",
    "text2":"We operate around the globe",
    "text3":"Get a professional dashboard with pre-made marketing materials",
    "imagePosition":"right",
    "src":"image/homepage/affiliate.png",
    "imageclass":"bigImage respimg",
    "gifsrc":"image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Affiliates",
    "bgclass":"home-section-6",
   }
];

const ServiceData =[
  {
    id:"ss1",
    image:"image/homepage/marketplace.svg",
    whiteImage:"image/homepage/marketplace-white.svg",
    title: "Marketplace",
    text: "Get connected to",
    text2:"Global Freelancers,",
    text3:" Agencies, & Interns.",
    linkPage:"marketplace",
    cardbg:"purple",
    whiteImageClass:"market",
  },
  {
    id:"ss2",
    image:"image/homepage/ai-auditor.svg",
    whiteImage:"image/homepage/ai-auditor-white.svg",
    title: "AI Auditor",
    text: "All your Marketing",
    text2: 'Analytics, and AI  Data',
    text3: "In One Dashboard",
    cardbg:"pink",
    whiteImageClass:"auditor",

  },
  {
    id:"ss3",
    image:"image/homepage/pvc.svg",
    whiteImage:"image/homepage/pvc-white.svg",
    title:"Employee Monitoring",
    text:"Bring out the Best in",
    text2:"your Remote Team with ",
    text3:"our Productivity Tools",
    cardbg:"mustard",
    whiteImageClass:"pvc-cls",

  },
  {
    id:"ss4",
    image:"image/homepage/employee.svg",
    whiteImage:"image/homepage/employee-white.svg",
    title: "Prepaid Virtual Cards",
    text:"Earn up to 1.5%  Marketing",
    text2:"Cashback on Online",
    text3:"Marketing Spend",
    cardbg:"cyan",
    whiteImageClass:"employee-cls",


  }
]



export default function Marketing() {
  return (
      <PageWrapper headerConfig={header}>
        <Helmet>
        <title>MRKT365 | AI Marketing Platform & Talent Marketplace</title>
        <meta name="description" content="All-in-one platform for all businesses. Hire freelancers, agencies, & interns, automate your marketing, manage your team, & get virtual prepaid credit cards" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MRKT365 | AI Marketing Platform & Talent Marketplace" />
        <meta property="og:description" content="All-in-one platform for all businesses. Hire freelancers, agencies, & interns, automate your marketing, manage your team, & get virtual prepaid credit cards" />
        <meta property="og:url" content="https://mrkt365.com" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MRKT365 | AI Marketing Platform & Talent Marketplace" />
        <meta name="twitter:description" content="All-in-one platform for all businesses. Hire freelancers, agencies, & interns, automate your marketing, manage your team, & get virtual prepaid credit cards" />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com" />
        </Helmet>
        <HeroSection/>
        <ContentSectionOne heading="One platform for everyone & everything" content={reverserow}/>
        <FeatureSection/>
        <ServicesSectionOne title="Provided Features" content={ServiceData}/>
        <CounterSection/>
        <CtaSection />
        <FooterOne/>
      </PageWrapper>
  )
}
