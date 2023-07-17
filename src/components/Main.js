import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import page from "./assets/page.jpg";
import Form from "./Form";
import img from "./assets/IMG-.jpg";
import Page1 from "./assets/page-1.jpg";
import Page2 from "./assets/page-2.jpg";

function New() {
  return (
    // This file is the parent file which contained the Form.js file
    <Container
      fluid="xs"
      className="bg-success"
      style={{
        backgroundImage: `url(${page}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Row className="row justify-content-center ">
        <Col xs={12} sm={12} md={9} className="col1">
          <div className="mainDiv">
            <div>
              <Image
                fluid
                src={img}
                className="rounded rounded-5 mb-5"
                style={{ width: "12rem" }}
              />
              <h1 className="welcome">Welcome To The</h1>
              <h1 className="glory">
                Glory <span className="text-warning"> Journal</span>
              </h1>
              <i className="page">Subscription Page</i>
              <h6 className="monthly">
                (A MONTHLY PUBLICATION OF THE CITYGATE CHURCH)
              </h6>
            </div>
            <section>
              <Form />
              <Button className=" mt-3" variant="outline-success">
                <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  className="text-light"
                >
                  Download Vol.1
                </a>
              </Button>
            </section>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={9} className="col1 text-light">
          <p className="w-75 mx-auto">
            <i>
              Be empowered to pursue conformity to the image of the Son of God,
              Jesus Christ, through sound doctrine.
            </i>
          </p>
          <p className="fw-bold text-warning mb-5 ">
            Subscribe to get The Glory Journal publication monthly.
          </p>
          <Row
            className="row justify-content-center"
            style={{ marginBottom: "5rem" }}
          >
            <Col md={12} lg={8} className="col1 pb-4">
              <div>
                <Image
                  thumbnail
                  className="img w-100 ps-5"
                  src={Page1}
                  style={{ height: "45rem" }}
                />
              </div>
            </Col>
            <Col md={1} lg={8} className="col1 pb-4">
              <div>
                <Image
                  thumbnail
                  className="img w-100"
                  src={Page2}
                  style={{ height: "45rem" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default New;
