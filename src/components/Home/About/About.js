import "./About.css";
import { Link } from "react-router-dom";
import { Row, Col, ProgressBar } from "react-bootstrap";

import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="">
      <Row
        id="aboutQuoteText"
        className="yellow jumbo-text-bubble justify-content-center align-items-center no-margin"
      >
        <Col>
          <div className="fade">
            <span className="jumbo-text-solid">LOGIC</span> WILL GET YOU FROM{" "}
            <span className="teal jumbo-text-solid">A</span> TO{" "}
            <span className="teal jumbo-text-solid">Z</span>.{" "}
            <span className="jumbo-text-solid">IMAGINATION</span> WILL TAKE YOU
            EVERYWHERE.
          </div>
          <div
            className="jumbo-text-solid no-shadow fade albert-einstein-div"
            style={{
              textAlign: "right",
              fontSize: "var(--p-large)",
            }}
          >
            - ALBERT EINSTEIN
          </div>
          <div className="fade">I HAVE BOTH.</div>
        </Col>
      </Row>
      <div id="aboutLine" className="about-line"></div>
      <Row
        id="aboutNarrativeContainer"
        className="justify-content-center align-items-center"
      >
        <Col className="no-shadow">
          <div id="aboutNarrativeText">
            <p className="section-header">ABOUT</p>
            <div id="narrativeAnimate">
              <span
                className="narrativeClear"
                style={{
                  fontWeight: "bold",
                  fontSize: "larger",
                  color: "var(--yellow)",
                }}
              >
                A To Zion Web Design, LLC
              </span>{" "}
              <span className="narrativeClear">
                is a boutique web development and design company 'born' on
                ii-ix-xxii: the day I,
              </span>{" "}
              <span
                id="a"
                className="teal narrativeMove"
                style={{ fontWeight: "bold", fontSize: "larger" }}
              >
                A
              </span>
              <span className="narrativeClear">
                shley Stith, met the love of my life - my son,
              </span>{" "}
              <span
                id="z"
                className="teal narrativeMove"
                style={{ fontWeight: "bold", fontSize: "larger" }}
              >
                Z
              </span>
              <span className="narrativeClear">
                ion. I am a full-stack developer w/ over 15 years of experience
                designing and developing simple
              </span>{" "}
              <span
                id="arrow"
                className="yellow narrativeMove"
                style={{ fontWeight: "bold" }}
              >
                &#8594;
              </span>{" "}
              <span className="narrativeClear">
                custom, high-traffic websites and applications. My clients have
                ranged from solo founders and early stage startups to
                large-scale commercial and federal organizations worldwide. In
                addition to my work with{" "}
                <strong>
                  <i>A To Zion Web Design, LLC</i>
                </strong>
                , I work as an IT Consultant/ Software Engineer. My previous
                employers include various small, mid, and large sized companies,
                including notable firms Deloitte and Booz Allen Hamilton.
              </span>
              <div
                className="narrativeClear bold"
                style={{ marginTop: "25px" }}
              >
                --- LOGIC ---
              </div>
              <div className="narrativeClear" style={{ marginBottom: "25px" }}>
                As a trained Electrical Engineer and true full-stack developer,
                I have a wealth of experience in both front-end and back-end
                development and technologies. I love solving problems and
                creating solutions to make people's lives better.
              </div>
              <div className="narrativeClear bold">--- IMAGINATION ---</div>
              <div className="narrativeClear">
                Creativity and design have always come natural to me. From
                interior design to UI/UX branding, I LOVE creating!
              </div>
            </div>
            <div id="aboutTagline" className="jumbo-text-bubble">
              I work with my clients throughout all project phases, from
              <Row className="target-container">
                <Col></Col>
                <Col></Col>
                <Col>
                  <img
                    src={require("../../../assets/crown-1.svg").default}
                    alt=""
                    id="aboutCrown"
                  />
                </Col>
              </Row>
              <Row
                className="justify-content-center align-items-center target-container"
                id="targetDiv"
              >
                <Col>
                  <div id="aTarget"></div>
                </Col>
                <Col>
                  <div id="arrowTarget"></div>
                </Col>
                <Col>
                  <div id="zTarget"></div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <div className="about-line"></div>
      <div id="aboutTech">
        <p className="section-header">SKILLS / TECHNOLOGIES</p>
        <p className="lighter-yellow">
          I have experience and access to a vast array of tools as outlined in
          the table below.
        </p>
        <Row
          id="skillsKeyDiv"
          className="justify-content-center align-items-center"
        >
          <Col sm={3}>
            <p className="skills-key skills-key-right">EXPERT LEVEL</p>
          </Col>
          <Col sm={3}>
            <ProgressBar animated now={100} label="Expert" visuallyHidden />
          </Col>

          <Col sm={{ span: 3, order: 2 }}>
            <p className="skills-key">BEGINNER LEVEL</p>
          </Col>
          <Col sm={{ span: 3, order: 1 }}>
            <ProgressBar
              animated
              now={0}
              label="Beginner"
              visuallyHidden
              className="progress-right"
            />
          </Col>
        </Row>
        <Skills />
      </div>
      <div className="about-line"></div>
      <div
        style={{
          padding: "50px 0",
          color: "var(--light-yellow)",
        }}
      >
        <p className="section-header">VIEW MY</p>
        <div className="jumbo-text-solid">
          <h1 className="special-cursor">
            <Link to={`/portfolio`}>SELECTED PROJECTS</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
