import React from "react"
import { PageWrapper } from "~components/Core"
import HeroHireInterns from '~sections/services/HeroHireInterns'
import ContentSectionTwo from '~sections/services/ContentTwo/ContentSectionTwo'
import PromoSection from '~sections/services/Promo'
import CounterSection from "~sections/services/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import ServicesSectionOne from "~sections/HireIntern/ServicesOne";

import { Helmet } from "react-helmet"


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

var reverserow = [
  {
   "title":"Convenience",
   "text":"We make it easy to create an unpaid internship that is published to hundresds of students ready to apply.",
   "text2":"We allow flexible internships to suite your companies unique needs. Our interns are available from 5 to 40 hours per week for anywhere between 1 to 4 months per internship.",
   "text3":"Virtual interns are less time-intensive than traditional placements due to the global adoption remote of remote-working.", 
   "imagePosition":"left",
    "src":"image/marketing/Convenience.jpg",
    "alt":"",
  },
   {
    "title":"International Reach",
    "text":"Reach new global markets by working with remote interns who speak the language and understand the culture.",
    "text2":"Our interns come from a diverse range of nations and have a firm understanding of the English language.",
    "imagePosition":"right",
     "src":"image/marketing/international.jpg",
     "alt":"",
   },
   {
    "title":"Top Talent",
    "text":"Our interns are pre-selected by their respective universities before applying to MRKT365's internship program.",
    "text2":"Effortlessly choose from dozens of interns by viewing ready-made video interviews conducted by us and prospective interns.",
    "imagePosition":"left",
     "src":"image/hire-interns/image3.png",
     "alt":"",

   },
   {
    "title":"No Obligations",
    "text":"Don't pay unless you are satisfied with the intern after they are hired.",
    "text2":"Pay as you go, choose the duration of your proposed internship, with a low connection fee of $100 per month per intern. There are no additional fees, that's it!", 
    "imagePosition":"right",
     "src":"image/marketing/no-obligations.jpg",
     "alt":"",
   }
];

const ServiceData =[
  {
    id:"ss1",
    // icon:"fas fa-layer-group",
    image:"image/hire-interns/hands.svg",
    whiteImage:"image/hire-interns/hands-white.svg",
    title: "Empower Emerging",
    title2:"Talent",
    text:"Assist talented students in mastering their skills, adding to their resumé, and lifting their confidence.",
    // linkPage:"ai-auditor",
    whiteImageClass:"business-ai",
    cardbg:'purple',
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"image/hire-interns/tick-person.svg",
    whiteImage:"image/hire-interns/tick-person-white.svg",
    title: "Freshen-up your",
    title2:"Team",
    text:"Grow your team without breaking the bank. Finish your projects faster with unpaid interns.",
    whiteImageClass:"business-online",
    // linkPage:"marketplace",
    cardbg:'pink',
    
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"image/hire-interns/medal.svg",
    whiteImage:"image/hire-interns/medal-white.svg",
    title: "Fix Microsoft & Google",
    title2:"verification issues",
    text:"We will generate a certificate for interns upon program completion based on the skills they gained.",
    // title3:"businesses",
    // linkPage:"ai-auditor",
    cardbg:"cyan",
    whiteImageClass:"business-ai",

    
  },

]


export default function HireInterns() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Find Skilled Interns Globally | Hire an Intern Today</title>
      <meta name="description" content="Hire the best interns from all over the world. Post jobs & find qualified candidates fast. Hire skilled interns with virtual internships on MRKT365 today!" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Find Skilled Interns Globally | Hire an Intern Today" />
      <meta property="og:description" content="Hire the best interns from all over the world. Post jobs & find qualified candidates fast. Hire skilled interns with virtual internships on MRKT365 today!" />
      <meta property="og:url" content="https://mrkt365.com/hire-interns" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Find Skilled Interns Globally | Hire an Intern Today" />
      <meta name="twitter:description" content="Hire the best interns from all over the world. Post jobs & find qualified candidates fast. Hire skilled interns with virtual internships on MRKT365 today!" />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/hire-interns" />

      </Helmet>
      <HeroHireInterns/>
      <PromoSection/>
      <ContentSectionTwo content={reverserow}/>
      <ServicesSectionOne ClassName="intern-features" title="Exchange Mentorship for " title2="Untapped Potential" content={ServiceData}/>
      <CounterSection/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  )
}
