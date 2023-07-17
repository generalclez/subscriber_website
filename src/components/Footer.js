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
    <Container fluid="xs">
      <Row
        className="row justify-content-center "
        style={{ backgroundColor: "rgb(11, 20, 20)" }}
      >
        <hr className="border border-2" />

        <Col xs={12} sm={6} md={6}>
          <div style={{ marginTop: "4rem", color: "white" }}>
            <div className="ms-">
              <img fluid src={address} alt="" />
              <span className="mb-4 ms-3">120 UI, Ajibode, Ojoo Road, </span>
            </div>
            <div style={{ margin: "1rem 0 1rem 1.8rem" }}>
              <img fluid src={Fill} alt="" />
              <span style={{ fontSize: "18px", paddingLeft: "1.5rem" }}>
                info@thecitygatechurch.org
              </span>
            </div>
            <div style={{ marginLeft: "-4rem" }}>
              <img fluid src={Fill1} alt="" />
              <span style={{ fontSize: "17px", paddingLeft: "20px" }}>
                +2347060904430
              </span>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6} md={6}>
          <div style={{ marginTop: "7rem" }}>
            <a href="https://web.facebook.com/dcitygatechurch.com">
              <img fluid src={Fb} alt="" style={{ width: "35px" }} />
            </a>

            <a href="http://twitter.com/dcitygatechurch">
              <img
                fluid
                src={Twitter}
                alt=""
                style={{ width: "35px" }}
                className="mx-4"
              />
            </a>

            <a href="https://www.dcititigatechurch.com">
              <img fluid src={inst} alt="" style={{ width: "35px" }} />
            </a>
          </div>
        </Col>
        <Col>
          <div>
            <Image fluid src={logo} style={{ width: "4rem" }} />

            <p className=" text-warning mb-5">
              &copy; Copyright {currYear}
              <br />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
