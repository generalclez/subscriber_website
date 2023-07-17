import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Page1 from "./assets/page-1.jpg";
import Page2 from "./assets/page-2.jpg";

function Words() {
  return (
    <>
      <Row
        className="row justify-content-center"
        style={{ marginBottom: "5rem" }}
      >
        <Col md={10} lg={8} className="col1 pb-4">
          <div>
            <Image
              thumbnail
              className="img w-100"
              src={Page1}
              style={{ height: "45rem" }}
            />
          </div>
        </Col>
        <Col md={10} lg={8} className="col1 pb-4">
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
    </>
  );
}

export default Words;
