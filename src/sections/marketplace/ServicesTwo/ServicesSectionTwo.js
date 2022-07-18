import React from "react";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./style";

export default function ServicesSectionTwo() {
  return (
    <Service>
        <Container>
        <Row>
          <Col className="col-lg-6 col-md-6 col-12">
          <img src="image/marketplace/group-image.png" alt="" className="right-image w-100" />
          </Col>
          <Col className="col-lg-6 col-md-6 col-12">
          <div className="text-field">
          <h2><b>Hire Agencies </b> for <br />Large Projects</h2>
          <p>MRKT365 is the only resource you need to find the right company. With Reviews, Ratings and Verification, MRKT365 gives you the tools you need to hire agencies with confidence. Get matched with agencies directly or research yourself from a list of verified and reviewed agencies. Read reviews and browse project photos submitted by previous customers. See their whole team online before receiving an offer.</p>
          </div>
          </Col>
        </Row>
        </Container>
    </Service>
  );
}

