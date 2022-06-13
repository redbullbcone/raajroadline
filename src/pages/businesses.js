import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from '~sections/services/Hero'
import ServicesSection from '~sections/services/Services'
import AboutSection from '~sections/services/About'
import ContentSectionOne from '~sections/services/ContentOne/ContentSectionOne'
import ProcessSection from '~sections/services/Process'
import PromoSection from '~sections/services/Promo'
import PricingSection from '~sections/services/Pricing'
import TestimonialSection from '~sections/services/Testimonial'
import ContactSection from '~sections/services/Contact'
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"


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
   "title":"We Ensure that the freelancers you Hire are the Ones Doing the Project",
   "text":"Our mission is to create a marketplace with top vendors at all price points. Domestic agencies often outsource their contracts overseas. We cut out the middle man for you and deliver the freelancers you need at the rate you want! We review all freelancers’ profiles before letting our AI suggest them to you.",
    "imagePosition":"left",
    "src":"image/marketing/business-1.png",
    "alt":"",
    "bgclass":"white-background",
  },
   {
    "title":"Take Advantage of our Virtual Prepaid Card",
    "text":"Take control of your budget, use it more efficiently, and receive a cashbacl with our virtual prepaid cards. We have partnered with US Bank and Visa to provide our clients prepaid virtual cards to use towards their online marketing without submitting their main debit or credit card details. Hand out virtual prepaid cards to your decision makers while monitoring their spend.",
     "imagePosition":"right",
     "src":"image/marketing/business-2.png",
     "alt":"",
     "imageclass":"business-right-para",
      "bgclass":"blue-background",


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
    "image":"image/marketing/count.png",
    "text":"Facebook Reports"
  },
  {
    "image":"image/marketing/count-2.png",
    "text":"TTwitter Reports"
  },
  {
    "image":"image/marketing/count-3.png",
    "text":"Instagaram Reports"
  },
  {
    "image":"image/marketing/count-4.png",
    "text":"Linkedin Reports"
  },
  {
    "image":"image/marketing/count-5.png",
    "text":"Google Analytics"
  },
  {
    "image":"image/marketing/count-6.png",
    "text":"Google Ads Reports"
  },
  {
    "image":"image/marketing/count-7.png",
    "text":"Google My Business"
  },
  {
    "image":"image/marketing/count-8.png",
    "text":"Youtube Reports"
  },
  {
    "image":"image/marketing/count-9.png",
    "text":"Amazon Reports"
  }
]

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
   
]

export default function Services() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection/>
      <ServicesSection/>
      
      <ContentSectionOne heading="Why Work With Us" content={reverserow}/>
      {/* <AboutSection/> */}
      <ProcessSection content={intergrations} />
      <ContentSectionOne content={businesscontent} />
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
