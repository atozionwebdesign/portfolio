import "./Header.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <div id="headerDiv">
      <div id="imgDiv" className="vertical-center">
        <img
          src={require("../../assets/a-to-zion-logo-light-500.png")}
          alt=""
        />
      </div>
      <Row id="rowDiv">
        <Col>
          <a href="#servicesDiv">
            <h2>SERVICES</h2>
          </a>
        </Col>
        <Col>
          <a href="#portfolioDiv">
            <h2>PORTFOLIO</h2>
          </a>
        </Col>
        <Col>
          <a href="#contactDiv">
            <h2>LET'S GET TO WORK</h2>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
