import "./NavigationModal.css";

import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationModal = () => {
  return (
    <>
<div id="navModalDiv">
      <Row>
        <Col
          sm={6}
          className="centerVertical"
          style={{ borderRight: "1px solid var(--light-yellow)" }}
        >
          <div>
            <h1>
              <Link to={`/`}>HOME</Link>
            </h1>
            <h1>
              <Link to={`/portfolio`}>PORTFOLIO</Link>
            </h1>
            <h1>
              <Link to={`/services`}>SERVICES</Link>
            </h1>
            <h1>
              <Link to={`/blog`}>BLOG</Link>
            </h1>
            <div>
              <p
                style={{
                  display: "inline-block",
                  marginRight: "25px",
                  marginTop: "25px",
                }}
              >
                RESUME
              </p>
              <p style={{ display: "inline-block" }}>CONTACT</p>
            </div>
          </div>
        </Col>
        <Col sm={6} className="centerVertical">
          <div>
            <p>LET'S DISCUSS A</p>
            {/* <h1 style={{ transform: "scale(2)", marginBottom:"25px" }}>NEW</h1> */}
            <h1 className="special-cursor" style={{ transform: "scale(1.75)" }}>
              <Link to={`/contact`}>NEW PROJECT</Link>
            </h1>

          </div>
        </Col>
      </Row>

    </div>
    <div id="navModalFooter">
    <i className="bi bi-github"></i>
    <i className="bi bi-linkedin"></i>
    </div>
    </>

  );
};

export default NavigationModal;
