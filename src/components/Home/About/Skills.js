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
      <Row className="no-margin">
        <Col sm={6}>
          <h2>FRONT-END</h2>
          {frontend.map((skill, index) => (
            <Row
              key={index}
              className="justify-content-center align-items-center"
            >
              <Col sm={6}>
                <p className="skill skill-right">{skill.skill}</p>
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
          <h2>BACK-END</h2>
          {backend.map((skill, index) => (
            <Row
              key={index}
              className="justify-content-center align-items-center"
            >
              <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }}>
                <ProgressBar
                  animated
                  now={skill.progress}
                  label={`${skill.progress}%`}
                  visuallyHidden
                  className="progress-right"
                />
              </Col>
              <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }}>
                <p className="skill skill-left">{skill.skill}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      <h1 className="yellow" style={{ marginTop: "25px" }}>
        GRAPHIC DESIGN / OTHER SKILLS
      </h1>
      <Row className="no-margin">
        <Col sm={6}>
          <h2>GRAPHIC DESIGN</h2>
          {graphic.map((skill, index) => (
            <Row
              key={index}
              className="justify-content-center align-items-center"
            >
              <Col sm={6}>
                <p className="skill skill-right">{skill.skill}</p>
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
          <h2>OTHER SKILLS</h2>
          {other.map((skill, index) => (
            <Row
              key={index}
              className="justify-content-center align-items-center"
            >
              <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }}>
                <ProgressBar
                  animated
                  now={skill.progress}
                  label={`${skill.progress}%`}
                  visuallyHidden
                  className="progress-right"
                />
              </Col>
              <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }}>
                <p className="skill skill-left">{skill.skill}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
