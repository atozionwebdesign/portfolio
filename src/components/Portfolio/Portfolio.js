import "./Portfolio.css";

import { useEffect } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";

import { projects } from "../../data/ProjectsData";

const Portfolio = () => {

  useEffect(()=> {
  })
  return (
    <div id="portfolio" className="section-div">
      <div className="content">
        <Tab.Container defaultActiveKey="ZionTV">
          <Nav id="portfolioNav" variant="pills" className="flex-column">
            {projects.map((data, index) => (

              <Nav.Link key={index} eventKey={data.project}>
                <p style={{ fontSize: "larger" }}>{data.project}</p>
              </Nav.Link>
            ))}
          </Nav>
          <Tab.Content>
            {projects.map((data, index) => (
              <Tab.Pane key={index} eventKey={data.project}>
                <Row>
                  <Col sm={4}>
                    <p style={{ marginBottom: 0, color: "var(--light-teal)" }}>
                      TECHNOLOGIES
                    </p>
                    <p style={{ fontWeight: "bold" }}>{data.technologies}</p>
                  </Col>
                  <Col sm={4}>
                    <p style={{marginBottom: 0, color: "var(--light-teal)"}}>GIT Repository</p>
                    <p style={{ fontWeight: "bold" }}>{data.git}</p>
                  </Col>
                  <Col sm={4}>
                    <p style={{ marginBottom: 0, color: "var(--light-teal)" }}>
                      LINK
                    </p>
                    <p style={{ fontWeight: "bold" }}>{data.link}</p>
                  </Col>
                </Row>
                <div style={{ textAlign: "right" }}>
                  <p style={{ width: "70%", marginLeft: "auto" }}>
                    {data.description}
                  </p>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Portfolio;
