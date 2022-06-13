import React from "react";
import ContactSection from "~sections/contact/ContactOne/ContactSection";
import FooterSection from "~sections/contact/ContactOne/Footer";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/marketing/Header"
import FooterOne from "~sections/marketing/FooterOne"
import CtaSection from "~sections/marketing/Cta"

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

export default function contactOne() {
  return (
    <PageWrapper headerConfig={header}>
        <ContactSection/>
        <CtaSection />
        <FooterOne/>
    </PageWrapper>
  )
}
