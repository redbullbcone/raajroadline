import React from "react"
import { PageWrapper } from "~components/Core"
import HeroHireInterns from '~sections/services/HeroHireInterns'
import ServicesSection from '~sections/services/Services'
import AboutSection from '~sections/services/About'
import ContentSectionTwo from '~sections/services/ContentTwo/ContentSectionTwo'
import ProcessSection from '~sections/services/Process'
import ProcessSectionTwo from '~sections/services/ProcessTwo'
import PromoSection from '~sections/services/Promo'
import PricingSection from '~sections/services/Pricing'
import TestimonialSection from '~sections/services/Testimonial'
import ContactSection from '~sections/services/Contact'
import CounterSection from "~sections/services/Counter"
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
     "src":"image/marketing/top-talent.jpg",
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

var interns=[
  {
    "image":"image/marketing/count.png",
    "text":"Empower Emerging Talent",
    "paragraph":"Assist talented students in mastering their skills, adding to their resumé, and lifting their confidence. "
  },
  {
    "image":"image/marketing/count-2.png",
    "text":"Freshen-up your Team",
    "paragraph":"Grow your team without breaking the bank. Finish your projects faster with unpaid interns."
  },
  {
    "image":"image/marketing/count-3.png",
    "text":"Certificate Program",
    "paragraph":"We will generate a certificate for interns upon program completion based on the skills they gained."
  }

]


export default function HireInterns() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroHireInterns/>
      <PromoSection/>
      {/* <ServicesSection/> */}
      
      <ContentSectionTwo content={reverserow}/>
      {/* <AboutSection/> */}
      <ProcessSectionTwo heading="Exchange Mentorship for Untapped Potential" content={interns} />
      {/* <ContentSectionOne content={businesscontent}/> */}
      
      {/* <PricingSection/> */}
      {/* <TestimonialSection/> */}
    {/* <ContactSection/> */}
    <CounterSection/>
    <CtaSection />
    <FooterOne/>
    </PageWrapper>
  )
}
