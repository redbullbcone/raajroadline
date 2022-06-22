import React from "react";
import { PageWrapper } from "~components/Core";
import HeroEmployeeMonitoring from "~sections/digital/Hero-employee-monitoring";
import ServicesSectionOne from "~sections/EmployeeServicesOne/ServicesThree";
import ServicesSectionTwo from "~sections/digital/ServicesTwo";
import ContentSectionTwo from '~sections/EmployeeServicesOne/ContentTwo/ContentSectionTwo'
import AboutSection from "~sections/digital/About";
import ContentSectionFour from "~sections/digital/ContentFour";
// import ContentSectionTwo from "~sections/digital/ContentTwo";
import TeamSection from "~sections/digital/Team";
import TestimonialSection from "~sections/agency/Testimonial"
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from "~sections/digital/Promo";
import CounterSection from "~sections/marketing/Counter";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
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

const ServiceData = [
    {
      id:"ss1",
      image:"image/recruitment-agency/icon1.jpg",
      title: "$10 per hour",
    },
    {
      id:"ss2",
      image:"image/recruitment-agency/icon2.jpg",
      title: "Hourly Billing",
   },
    {
      id:"ss3",
      image:"image/recruitment-agency/icon3.jpg",
      title:"Ongoing Duration",  
    },
    {
      id:"ss4",
      image:"image/recruitment-agency/icon4.jpg",
      title: "30 Day Payment Schedule",
    }
  ]

  var reverserow = [
    {
     "title":"Vendor ",
     "title2":"Matching",
     "text":"Our client was matched to multiple developers while posting their brief publicly. They chose Arun S. due to his specific expertise and experience with mobile apps.",
      "imagePosition":"right",
      "src":"image/home-digital-agency/employee-1.png",
      "alt":"",
    },
     {
      "title":"Computer Screen ",
      "title2":"Monitoring ",
      "text":"Healthy Pass was able to witness periodic screenshots from the monitor of the remote worker they hired. They also utilized our tracker with their employees when they worked home due to the Pandemic. Our system also confirms the identity of the person doing the work, this allows you to avoid middlemen in your freelancer contract.",
       "imagePosition":"left",
       "src":"image/home-digital-agency/employee-2.png",
       "alt":"",
     },
     {
      "title":"Detailed Reporting for your",
      "title2":"Business",
      "text":"Make time tracking easy. Receive time tracking reports with productivity-boosting insights. Pay teams and keep track of billable hours.",
       "imagePosition":"right",
       "src":"image/home-digital-agency/employee-3.png",
       "alt":"",
  
     },
     {
      "title":"Plan Projects in Advance",
      "text":"Healthy Pass was able to better organize their team by seeing the work patterns of their freelancers and employees. Their manager used this information to better delegate tasks and keep projects on schedule.",
       "imagePosition":"left",
       "src":"image/home-digital-agency/employee-4.png",
       "alt":"",
     },
     {
        "title":"Messaging",
        "title2":"System",
        "text":"Connect with your freelancers and employees over a secure messaging system controlled by you.",
         "imagePosition":"right",
         "src":"image/home-digital-agency/employee-5.png",
         "alt":"",
       }
  ];

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Easy-to-Use Employee Monitoring Software | MRKT365</title>
      <meta name="description" content="Seamlessly Monitor Your Remote Employees. Feel confident knowing that employees are working on the right tasks with our employee monitoring software." />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Easy-to-Use Employee Monitoring Software | MRKT365" />
      <meta property="og:description" content="Seamlessly Monitor Your Remote Employees. Feel confident knowing that employees are working on the right tasks with our employee monitoring software." />
      <meta property="og:url" content="https://mrkt365.com/employee-monitoring" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Easy-to-Use Employee Monitoring Software | MRKT365" />
      <meta name="twitter:description" content="Seamlessly Monitor Your Remote Employees. Feel confident knowing that employees are working on the right tasks with our employee monitoring software." />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/employee-monitoring" />

      </Helmet>
      <HeroEmployeeMonitoring />
      <ServicesSectionTwo />
      {/* <AboutSection /> */}
      <ContentSectionFour />
      <ServicesSectionOne ClassName='healthy-requirements' title="Healthy Pass's Brief Requirement" content={ServiceData} />
    
      <ContentSectionTwo content={reverserow}/>
      {/* <TeamSection /> */}
      {/* <PortfolioSection /> */}
      {/* <PromoSection /> */}
      {/* <CounterSection/> */}
       <TestimonialSection />
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
