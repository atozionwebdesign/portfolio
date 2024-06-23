import "./About.css";
import { Col, Row, ProgressBar } from "react-bootstrap";
import { skills } from "../../../data/SkillsData";

const Skills = () => {
  const backend = skills.filter((skill) => skill.type === "backend");
  const frontend = skills.filter((skill) => skill.type === "frontend");
  const graphic = skills.filter((skill) => skill.type === "graphic");
  const other = skills.filter((skill) => skill.type === "other");

  return (
    <div id="skillsDiv">
      <h1 className="yellow">WEB DEVELOPMENT / DESIGN SKILLS</h1>
      <Row>
        <Col sm={6}>
          <h3>FRONT-END</h3>
          {frontend.map((skill, index) => (
            <Row key={index}>
              <Col sm={6} style={{ textAlign: "right" }}>
                {skill.skill}
              </Col>
              <Col sm={6} style={{ textAlign: "left" }}>
                <ProgressBar
                  animated
                  now={skill.progress}
                  label={`${skill.progress}%`}
                  visuallyHidden
                />
              </Col>
            </Row>
          ))}
        </Col>

        <Col sm={6}>
          <h3>BACK-END</h3>
          {backend.map((skill, index) => (
            <Row key={index}>
              <Col sm={6} style={{ textAlign: "right" }}>
                {skill.skill}
              </Col>
              <Col sm={6}>
                <ProgressBar
                  animated
                  now={skill.progress}
                  label={`${skill.progress}%`}
                  visuallyHidden
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      <h1 className="yellow" style={{ marginTop: "25px" }}>
        GRAPHIC DESIGN / OTHER SKILLS
      </h1>
      <Row style={{paddingBottom: "50px"}}>
        <Col sm={6}>
        <h3>GRAPHIC DESIGN</h3>

          {graphic.map((skill, index) => (
            <Row key={index}>
              <Col sm={6} style={{ textAlign: "right" }}>
                {skill.skill}
              </Col>
              <Col sm={6}>
                <ProgressBar
                  animated
                  now={skill.progress}
                  label={`${skill.progress}%`}
                  visuallyHidden
                />
              </Col>
            </Row>
          ))}
        </Col>
        <Col sm={6}>
        <h3>OTHER SKILLS</h3>

          {other.map((skill, index) => (

            <Row key={index}>
              <Col sm={6} style={{ textAlign: "right" }}>
                {skill.skill}
              </Col>
              <Col sm={6}>
                <ProgressBar
                  animated
                  now={skill.progress}
                  label={`${skill.progress}%`}
                  visuallyHidden
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

    </div>
  );
};

export default Skills;
