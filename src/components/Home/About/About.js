import "./About.css";

import { Link } from "react-router-dom";

import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="section-div">
      <div id="jumboDiv">
        <div id="aboutQuoteText" className="yellow jumbo-text-bubble">
          <div className="fade">
            <span className="jumbo-text-solid">LOGIC</span> WILL GET YOU FROM{" "}
            <span className="teal jumbo-text-solid">A</span> TO{" "}
            <span className="teal jumbo-text-solid">Z</span>.{" "}
            <span className="jumbo-text-solid">IMAGINATION</span> WILL TAKE YOU
            EVERYWHERE.
          </div>
          <div
            className="jumbo-text-solid no-shadow fade"
            style={{
              textAlign: "right",
              fontSize: "var(--p-large)",
              width: "90%",
            }}
          >
            - ALBERT EINSTEIN
          </div>
          <div className="fade">
            I HAVE <span style={{ textDecoration: "underline" }}>BOTH</span>.
          </div>
        </div>
        <div
          id="aboutLine"
          style={{
            borderBottom: "1px solid var(--yellow)",
            margin: "0 auto 0 auto",
            width: "80%",
          }}
        ></div>
        <div id="aboutNarrativeContainer">
          <div id="aboutNarrativeText" className="no-shadow">
            <div>
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
                  February 9, 2022: I,
                </span>{" "}
                <span
                  id="a"
                  className="teal narrativeMove a"
                  style={{ fontWeight: "bold", fontSize: "larger" }}
                >
                  A
                </span>
                <span className="narrativeClear">
                  shley Stith, met the love of my life - my son,
                </span>{" "}
                <span
                  id="z"
                  className="teal narrativeMove Z"
                  style={{ fontWeight: "bold", fontSize: "larger" }}
                >
                  Z
                </span>
                <span className="narrativeClear">
                  ion. I am freelance full-stack developer w/ over 15 years of
                  experience designing and developing simple
                </span>{" "}
                <span
                  id="arrow"
                  className="yellow narrativeMove arrow"
                  style={{ fontWeight: "bold" }}
                >
                  &#8594;
                </span>{" "}
                <span className="narrativeClear">
                  custom, high-traffic websites and applications. My clients
                  have ranged from solo founders and early stage startups to
                  large-scale commercial and federal organizations worldwide. In
                  addition to my work with{" "}
                  <strong>
                    <i>A To Zion Web Design, LLC</i>
                  </strong>
                  , I work as an IT Consultant/ Software Engineer. My previous
                  employers include various small, mid, and large sized
                  companies, including notable firms Deloitte and Booz Allen
                  Hamilton.
                </span>
                <div
                  className="narrativeClear"
                  style={{ marginTop: "25px", fontWeight: "bold" }}
                >
                  --- LOGIC ---
                </div>
                <div
                  className="narrativeClear"
                  style={{ marginBottom: "25px" }}
                >
                  As a trained Electrical Engineer and true full-stack
                  developer, I have a wealth of experience in both front-end and
                  back-end development and technologies. I love solving problems
                  and building things to make people's lives easier.
                </div>
                <div className="narrativeClear" style={{ fontWeight: "bold" }}>
                  --- IMAGINATION ---
                </div>
                <div
                  className="narrativeClear"
                  style={{ marginBottom: "50px" }}
                >
                  Creativity and design have always come natural to me. From
                  interior design to UI/UX branding, I LOVE creating and would
                  love to help bring your vision to fruition .
                </div>
                <div id="aTarget"></div>
                <div id="arrowTarget"></div>
                <div id="zTarget"></div>
                <img
                  src={require("../../../assets/crown-1.svg").default}
                  alt=""
                  id="aboutCrown"
                />
              </div>
              <div id="aboutTagline" className="jumbo-text-bubble">
                I work with my clients throughout all project phases, from
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid var(--yellow)",
            margin: "0 auto 0 auto",
            width: "80%",
          }}
        ></div>
        <div id="aboutTech">
          <p className="section-header">SKILLS / TECHNOLOGIES</p>
          <p style={{ color: "var(--lighter-yellow)" }}>
            I have experience and access to a vast array of tools.
          </p>
          <Skills />
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--yellow)",
          width: "80%",
          padding: "50px 0",
          color: "var(--light-yellow)",
        }}
      >
        <p className="section-header">VIEW MY</p>
        <div
          className="jumbo-text-solid special-cursor"
          style={{ fontSize: "6vw" }}
        >
          <Link to={`/portfolio`}>SELECTED PROJECTS</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
