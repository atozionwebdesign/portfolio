import "./Header.css";

import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  useEffect(() => {});

  return (
    <div id="headerDiv">
      <div className="content">
      <div id="logoDiv">
        <img
          src={require("../../../assets/crown-1.svg").default}
          alt=""
          id="crown"
        />
        <div id="computerDiv">
          <img
            src={require("../../../assets/computer-2.svg").default}
            alt=""
            id="computer"
          />
          <div id="computerText">&#123;A &#8594; Z&#125;</div>
        </div>
        <div id="titleDiv">
          <span className="title jumbo-text-solid teal">A</span>
          <span id="toTitle" className="title yellow">
            TO
          </span>
          <span className="title jumbo-text-solid teal">ZION WEB DESIGN</span>
          <span
            className="title yellow"
            style={{ marginLeft: "-2px", marginRight: "10px" }}
          >
            ,
          </span>
          <span className="title jumbo-text-solid teal">LLC</span>
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
      <div
        id="recentDiv"
        style={{
          margin: "1vh auto 0 auto",
          textAlign: "right",
          // width: "80%",
          padding: "15px 50px",
          fontWeight: "bold",
          color: "var(--light-yellow)",
          fontSize: "1.5vw"
        }}
      >
        {/* <img
          src={require("../../../assets/icons/recent.svg").default}
          alt=""
          style={{
            height: "25px",
            margin: "0 5px 5px 0",
            filter: "drop-shadow(2px 2px var(--darker-gray))",
          }}
        />
        RECENT PROJECTS */}
        - BY FULL-STACK DEVELOPER, <span style={{color: "var(--yellow)", fontSize: "larger"}}>ASHLEY STITH</span>
      </div>
      </div>

    </div>
  );
};

export default Header;
