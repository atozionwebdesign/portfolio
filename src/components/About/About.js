import "./About.css";

const About = () => {
  return (
    <div id="aboutDiv">
      <div id="jumboDiv" className="jumbo-text-bubble yellow">
        <p className="section-header">ABOUT</p>
        <span className="jumbo-text-solid">LOGIC</span> WILL GET YOU FROM{" "}
        <span className="teal jumbo-text-solid">A</span> TO{" "}
        <span className="teal jumbo-text-solid">Z</span>.{" "}
        <span className="jumbo-text-solid">IMAGINATION</span> WILL TAKE YOU
        EVERYWHERE.
        <div
          className="jumbo-text-solid no-shadow"
          style={{
            textAlign: "right",
            fontSize: "var(--p-large)",
            width: "90%",
          }}
        >
          - ALBERT EINSTEIN
        </div>
        WE HAVE <span style={{ textDecoration: "underline" }}>BOTH</span>.
        <div
          style={{
            borderBottom: "1px solid var(--yellow)",
            margin: "50px 0",
          }}
        ></div>
        <div
          className="p-xlarge no-shadow"
          style={{ fontFamily: "Roboto Condensed, sans-serif" }}
        >
          <span style={{ fontWeight: "bold" }}>A To Zion Web Design, LLC</span>{" "}
          was born on February 9, 2022: the day our founder,{" "}
          <span className="teal" style={{ fontWeight: "bold" }}>
            A
          </span>
          shley Stith, met the love of her life - her son,{" "}
          <span className="teal" style={{ fontWeight: "bold" }}>
            Z
          </span>
          ion. We are a boutique web development and design company with over 15
          years of experience designing and developing simple{" "}
          <i className="bi bi-arrow-right"></i> custom, high-traffic websites
          and applications.
          <div style={{ margin: "50px 0" }}>
            Have an idea for a site or web application or graphic design
            project? It's what we do. Let us work with you to bring it to
            fruition!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
