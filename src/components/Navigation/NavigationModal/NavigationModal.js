import "./NavigationModal.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationModal = () => {
  return (
    <>
      <Row
        id="navModalDiv"
        className="justify-content-center align-items-center no-margin"
      >
        <Col>
          <Row className="justify-content-center align-items-center">
            <Col sm={6} className="right-bordered-col">
              <div>
                <h1>
                  <Link to={`/`}>HOME</Link>
                </h1>
                <h1>
                  <Link to={`/services`}>SERVICES</Link>
                </h1>
                <h1>
                  <Link to={`/portfolio`}>PORTFOLIO</Link>
                </h1>
                <h1>
                  {/* <Link to={`/blog`}>BLOG</Link> */}
                  BLOG
                </h1>
                <div>
                  <a href={require("../../../documents/Resume-Stith,Ashley-Jul24.pdf")} alt="" target="_blank" rel="noreferrer">
                  <p
                    className="resume-link"
                    style={{
                      display: "inline-block",
                      // marginRight: "25px",
                    }}
                  >
                    RESUME
                  </p>
                  </a>
                  {/* <p style={{ display: "inline-block" }}>CONTACT</p> */}
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="top-bordered-col">
                <p className="no-margin">LET'S DISCUSS A</p>
                <h1 className="special-cursor">
                  <Link to={`/contact`}>NEW PROJECT</Link>
                </h1>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div id="navModalFooter">
        <a
          href="https://github.com/atozionwebdesign"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ashleystith/"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default NavigationModal;
