import "./Navigation.css";

import React, { useEffect, useState } from "react";

import gsap from "gsap";

import { Nav, Navbar, Col, Modal, Button } from "react-bootstrap";

import { navAnimation } from "../../utils/Animate";

import NavigationModal from "./NavigationModal/NavigationModal";

const Navigation = (props) => {
  const page = props.page;
  const [showModal, setShowModal] = useState(false);

  const info = {
    "logo-home": require(`../../assets/logo-home.png`),
    "logo-services": require(`../../assets/logo-services.png`),
    "logo-portfolio": require(`../../assets/logo-portfolio.png`),

    "tagline-home": (
      <React.Fragment>
        {/* LOGIC <i className="bi bi-plus plus-home"></i> IMAGINATION */}
        WEB DESIGN & DEVELOPMENT{" "}
        <span style={{ color: "var(--yellow", fontWeight: "bold" }}>
          ||
        </span>{" "}
        GRAPHIC DESIGN & BRANDING
      </React.Fragment>
    ),
    "tagline-services": <React.Fragment>SERVICES PROVIDED</React.Fragment>,
    "tagline-portfolio": <React.Fragment>SELECTED PROJECTS</React.Fragment>,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      navAnimation();
    });
    return () => {
      ctx.revert();
    };
  }, []);

  const closeModal = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowModal(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Modal
        // size="lg"
        id="navModal"
        fullscreen={true}
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <NavigationModal closeModal={closeModal} />
        </Modal.Body>
      </Modal>
      <Navbar
        // collapseOnSelect
        expand="false"
        sticky="top"
        className={`navbar-${page}`}
      >
        <Col sm="2" style={{ textAlign: "left" }}>
          <Navbar.Brand href="/">
            <img src={info[`logo-${page}`]} alt="" />
          </Navbar.Brand>
        </Col>
        <Col sm="8">
          <div id="tagline" className={`tagline-${page}`}>
            {info[`tagline-${page}`]}
          </div>
        </Col>
        <Col sm="2" style={{ textAlign: "right" }}>
          {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`toggle-${page}`}
        /> */}
          <Button
            className={`toggle toggle-${page}`}
            onClick={handleButtonClick}
          >
            <i className="bi bi-list"></i>
          </Button>
        </Col>

        {/* <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

export default Navigation;
