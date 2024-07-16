import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footerContainer">
      <div id="footerDiv">
        <Row>
          <Col sm={6}>
            <p>
              <span className="footer-header">A To Zion Web Design, LLC</span>{" "}
              is a boutique web development and design company. From business
              cards to simple websites to complex custom web applications, I
              have got you covered!
            </p>

            <p className="no-margin">
              <i className="bi bi-envelope sm-icon"></i>{" "}
              ashley.stith@atozionwebdesign.com
            </p>
            <p className="no-margin">
              <i className="bi bi-telephone sm-icon"></i> 202.681.3589
            </p>
          </Col>
          <Col className="right" sm={6}>
            <a
              href={require("../../documents/Resume-Stith,Ashley-Jul24.pdf")}
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              <p className="no-margin">RESUME</p>
            </a>
            <p>Let's discuss a new project</p>
            <p>
            <a
          href="https://github.com/atozionwebdesign"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github sm-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ashleystith/"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
              {/* <i className="bi bi-youtube sm-icon"></i> */}
            </p>
          </Col>
        </Row>
        <div id="copyrightDiv">
          <p id="copyright">
            <i className="bi bi-c-circle"></i> 2024 A To Zion Web Design, LLC |
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
