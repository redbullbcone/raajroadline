import React from 'react'
import { Link } from '~components'
import { Container, Row, Col } from 'react-bootstrap'
// import { Images } from '~data'
import Footer from "./style"
import LogoWhite from "~image/logo/logo-white.png";
export default function FooterOne(){
return(
    <Footer backgroundColor="#6a26da">

        
    <Container>
        <Footer.Box pbXL="95px" >
        <Row>
        <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
            <Footer.Widgets className="footer-widgets footer-widgets--l7">
            <Footer.Title>About Us</Footer.Title>
                <Footer.Text mb="36px">
                    
                MRKT365 is the next-level AI-driven <br />platform that helps with online marketing<br /> and is a powerful marketplace that gives<br /> solutions to all your digital problems.<br /> Search freelancers, specialized agencies,<br /> and interns from all domains working at <br />various price ranges and expertises.</Footer.Text>

            </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
            <Row>

<Col xs="6" className="col-md-4 col-xs-6">
<Footer.Widgets>
    <Footer.Title>How it works: </Footer.Title>
    <Footer.List>
        <Footer.ListItems>
            <Link to="/">Businesses</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Freelancers</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Agencies</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Interns</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Recruitment Agencies</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Affiliate Program</Link>
        </Footer.ListItems>
    </Footer.List>
</Footer.Widgets>
</Col>
<Col xs="6" className="col-md-4 col-xs-6">
<Footer.Widgets>
    <Footer.Title>Features</Footer.Title>
    <Footer.List>
        <Footer.ListItems>
            <Link to="/">Marketplace</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">AI Auditor</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Hire Interns</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Employee Monitoring</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Prepaid Virtual Cards</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Microsoft Advertising</Link>
        </Footer.ListItems>
    </Footer.List>
</Footer.Widgets>
</Col>
<Col xs="12" className="col-md-4 col-xs-6">
    <Footer.Widgets>
        <Footer.Title>Resources</Footer.Title>
        <Footer.List>
        <Footer.ListItems>
            <Link to="/">Pricing</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Privacy Policy</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Terms and Conditions</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Contact</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/">Tutorial Videos</Link>
        </Footer.ListItems>
    </Footer.List>
    </Footer.Widgets>
</Col>

</Row>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.CopyrightText>© 2022 MRKT365 Corp. || All Rights Reserved. </Footer.CopyrightText>
        <Footer.SocialShare>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://www.facebook.com/MRKT365/">
                <i className="fab fa-facebook-square" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://twitter.com/mrkt365">
                <i className="fab fa-twitter" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://www.instagram.com/accounts/login/?next=/mrkt365/">
                <i className="fab fa-instagram" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://www.linkedin.com/company/mrkt365/">
                <i className="fab fa-linkedin" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://www.linkedin.com">
                <img src="image/logo/tictok-icon.jpg" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://www.youtube.com/c/MRKT365">
                <i className="fab fa-youtube" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a target="_blank" href="https://www.linkedin.com">
                <i className="fab fa-snapchat" />
                </a>
            </Footer.SocialShareItem>
        </Footer.SocialShare>
        </Footer.Copyright>
    </Container>
    
    </Footer>
)
}