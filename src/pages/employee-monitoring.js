import React from "react";
import { PageWrapper } from "~components/Core";
import HeroEmployeeMonitoring from "~sections/digital/Hero-employee-monitoring";
import ServicesSectionOne from "~sections/intern/ServicesOne";
import ServicesSectionTwo from "~sections/digital/ServicesTwo";
import ContentSectionTwo from '~sections/EmployeeServicesOne/ContentTwo/ContentSectionTwo'
import ContentSectionFour from "~sections/digital/ContentFour";
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
      btnTwoText="Sign Up"
      mr="15px"
      mrLG="0"
    />
  ),
}

const ServiceData =[
  {
    id:"ss1",
    // icon:"fas fa-layer-group",
    image:"image/employee/pad.svg",
    whiteImage:"image/employee/pad-white.svg",
    title: "$10 ",
    title2:"per hour",
    linkPage:"ai-auditor",
    whiteImageClass:"business-ai",
    cardbg:'purple',
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"image/employee/dollar.svg",
    whiteImage:"image/employee/dollar-white.svg",
    title: "Hourly  ",
    title2:"Billing ",
    whiteImageClass:"business-online",
    linkPage:"marketplace",
    cardbg:'pink',
    
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"image/employee/clock.svg",
    whiteImage:"image/employee/clock-white.svg",
    title: "Ongoing ",
    title2:"Duration",
    linkPage:"ai-auditor",
    cardbg:"mustard",
    whiteImageClass:"business-ai",

    
  },
  {
    id:"ss4",
    // icon:"fas fa-chart-pie",
    image:"image/employee/double-tick.svg",
    whiteImage:"image/employee/double-tick-white.svg",
    title: "30 day Payment",
    title2:"Schedule",
    cardbg:"cyan",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

    
  }
]

  var reverserow = [
    {
     "title":"Vendor ",
     "title2":"Matching",
     "text":"Our client was matched to multiple developers while posting their brief publicly. They chose Arun S. due to his specific expertise and experience with mobile apps.",
      "imagePosition":"right",
      "src":"image/employee/screen2.png",
      "alt":"",
      "lineClass":"blue-line",
    },
     {
      "title":"Computer Screen ",
      "title2":"Monitoring ",
      "text":"Healthy Pass was able to witness periodic screenshots from the monitor of the remote worker they hired. They also utilized our tracker with their employees when they worked home due to the Pandemic. Our system also confirms the identity of the person doing the work, this allows you to avoid middlemen in your freelancer contract.",
       "imagePosition":"left",
       "src":"image/employee/screen3.png",
       "alt":"",
      "lineClass":"blue-line",

     },
     {
      "title":"Detailed Reporting for your",
      "title2":"Business",
      "text":"Make time tracking easy. Receive time tracking reports with productivity-boosting insights. Pay teams and keep track of billable hours.",
       "imagePosition":"right",
       "src":"image/employee/screen4.png",
       "alt":"",
  
     },
     {
      "title":"Plan Projects in Advance",
      "text":"Healthy Pass was able to better organize their team by seeing the work patterns of their freelancers and employees. Their manager used this information to better delegate tasks and keep projects on schedule.",
       "imagePosition":"left",
       "src":"image/employee/screen5.png",
       "alt":"",
     },
     {
        "title":"Messaging",
        "title2":"System",
        "text":"Connect with your freelancers and employees over a secure messaging system controlled by you.",
         "imagePosition":"right",
         "src":"image/employee/screen6.png",
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
      <ContentSectionFour />
      <ServicesSectionOne ClassName="intern-features" title="How Does it Work?" content={ServiceData}/>
      <ContentSectionTwo content={reverserow}/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
