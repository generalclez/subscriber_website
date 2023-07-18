import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./assets/logo.png";
import Fb from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Fill from "./assets/Fill 1.png";
import Fill1 from "./assets/Fill 1 (1).png";
import inst from "./assets/inst.png";
import address from "./assets/pin.png";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <Container fluid>
      <Row
        className="row justify-content-center"
        style={{ backgroundColor: "rgb(11, 20, 20)" }}
      >
        <hr className="border border-2" />

        <Col xs={12} sm={6} md={6} className="mt-4 text-white">
          <div className="ms-3">
            <img fluid src={address} alt="" />
            <span className="mb-4 ms-3">
              120 UI, Ajibode, Ojoo Road, Ibadan
            </span>
          </div>
          <div className="mt-4">
            <img fluid src={Fill} alt="" />
            <span style={{ fontSize: "18px", paddingLeft: "1.5rem" }}>
              info@thecitygatechurch.org
            </span>
          </div>
          <div className="mt-3" style={{ marginLeft: "-5.4rem" }}>
            <img fluid src={Fill1} alt="" />
            <span style={{ fontSize: "17px", paddingLeft: "20px" }}>
              +2347060904430
            </span>
          </div>
        </Col>

        <Col xs={12} sm={6} md={6} className="mt-4">
          <div className="d-flex" style={{ marginLeft: "7rem" }}>
            <a href="https://web.facebook.com/dcitygatechurch.com">
              <img fluid src={Fb} alt="" style={{ width: "35px" }} />
            </a>

            <a href="http://twitter.com/dcitygatechurch">
              <img
                fluid
                src={Twitter}
                alt=""
                style={{ width: "35px", margin: "0 1rem" }}
              />
            </a>

            <a href="https://www.dcititigatechurch.com">
              <img fluid src={inst} alt="" style={{ width: "35px" }} />
            </a>
          </div>
        </Col>

        <Col className="text-center mt-4">
          <Image fluid src={logo} style={{ width: "4rem" }} />
          <p className="text-warning mb-5">
            &copy; {currYear} The City Gate Church
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
