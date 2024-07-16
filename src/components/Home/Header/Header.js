import "./Header.css";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  useEffect(() => {});

  return (
    <Row id="headerDiv" className="page-header justify-content-center align-items-center">
      <Col>
        <div id="logoDiv">
          <img
            src={require("../../../assets/crown-1.svg").default}
            alt=""
            id="crown"
          />
          <div id="computerDiv">
            <div id="computerTextDiv">
              <p>
                <span>&#123;A</span>
                <span> &#8594; </span>
                <span> Z&#125;</span>
              </p>
            </div>
            <img
              src={require("../../../assets/computer-2.svg").default}
              alt=""
              id="computer"
            />
          </div>
          <div id="titleDiv">
            <p>
              <span className="title jumbo-text-solid teal">A</span>
              <span id="toTitle" className="title yellow">
                TO
              </span>
              <span className="title jumbo-text-solid teal">
                ZION WEB DESIGN
              </span>
              <span className="title yellow" style={{ marginLeft: "-2px" }}>
                ,
              </span>
              <span className="title jumbo-text-solid teal">LLC</span>
            </p>
          </div>
          <div id="subtitleDiv">
            <span>est</span>
            <span className="yellow">. </span>
            <span>ii</span>
            <span className="yellow"> - </span>
            <span>ix</span>
            <span className="yellow"> - </span>
            <span>xxii</span>
          </div>
        </div>
        <div id="recentDiv">
          <span style={{ color: "var(--lighter-yellow)" }}>
            - BY FULL-STACK DEVELOPER,{" "}
          </span>
          <span style={{ color: "var(--yellow)", fontSize: "larger" }}>
            ASHLEY STITH
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
