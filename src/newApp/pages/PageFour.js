import React from "react";
import NavBarHead from "../components/NavBarHead";
import { Row, Col } from "react-bootstrap";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function PageFour() {
  return (
    <div>
      <NavBarHead />
      <Row>
        <Col md={2}>
          <SideNav />
        </Col>
        <Col md={10}>
          <h1>Page Four</h1>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
