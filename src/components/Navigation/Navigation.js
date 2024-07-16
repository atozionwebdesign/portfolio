import "./Navigation.css";
import React, { useEffect, useState } from "react";
import { Navbar, Col, Modal, Button } from "react-bootstrap";
import gsap from "gsap";
import { navAnimation } from "../../utils/Animate";
import NavigationModal from "./NavigationModal/NavigationModal";

const Navigation = (props) => {
  const page = props.page;
  const [showModal, setShowModal] = useState(false);

  const info = {
    "logo-home": require(`../../assets/logo-portfolio-2.png`),
    "logo-services": require(`../../assets/logo-portfolio-2.png`),
    "logo-portfolio": require(`../../assets/logo-portfolio-2.png`),
    "tagline-home": (
      <React.Fragment>
        WEB DESIGN & DEVELOPMENT{" "}
        <span style={{ color: "var(--yellow", fontWeight: "bold" }}>||</span>{" "}
        GRAPHIC DESIGN & BRANDING
      </React.Fragment>
    ),
    "tagline-services": (
      <React.Fragment>
        SERVICES PROVIDED{" "}
        <span style={{ color: "var(--yellow", fontWeight: "bold" }}>||</span>{" "}
        CONTACT
      </React.Fragment>
    ),
    "tagline-portfolio": (
      <React.Fragment>
        SELECTED PROJECTS{" "}
        <span style={{ color: "var(--yellow)", fontWeight: "bold" }}>||</span>{" "}
        PORTFOLIO
      </React.Fragment>
    ),
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
        id="navModal"
        fullscreen={true}
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <img
            className="logo"
            src={require("../../assets/logo-portfolio-2.png")}
            alt=""
          />
        </Modal.Header>
        <Modal.Body>
          <NavigationModal closeModal={closeModal} />
        </Modal.Body>
      </Modal>
      <Navbar expand="false" sticky="top" className={`navbar-${page}`}>
        <Col sm="2">
          <Navbar.Brand href="/">
            <img className="logo" src={info[`logo-${page}`]} alt="" />
          </Navbar.Brand>
        </Col>
        <Col sm="8">
          <div id="tagline" className={`tagline-${page} tagline`}>
            {info[`tagline-${page}`]}
          </div>
        </Col>
        <Col sm="2">
          <Button
            className={`toggle toggle-${page}`}
            onClick={handleButtonClick}
          >
            <i className="bi bi-list"></i>
          </Button>
        </Col>
      </Navbar>
    </>
  );
};

export default Navigation;
