import "./Portfolio.css";
import { useEffect, useState } from "react";
import { Tab, Nav} from "react-bootstrap";
import { projects } from "../../data/ProjectsData";
import ProjectInfo from "./ProjectInfo";

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    console.log(project);
  }, [project]);

  const handleNavSelect = (eventKey) => {
    const currentProject = projects.find((p) => p.project === eventKey);

    setProject(currentProject);
  };

  return (
    <div id="portfolio" className="section-div">
        <Tab.Container fill justify defaultActiveKey="ZionTV">
          <Nav
            id="portfolioNav"
            className="nav-justified"
            onSelect={handleNavSelect}
          >
            {projects.map((data, index) => (
              <Nav.Link key={index} eventKey={data.project}>
                <p className="p-small">{data.project}</p>
              </Nav.Link>
            ))}
          </Nav>
          <Tab.Content>
            {projects.map((data, index) => (
              <Tab.Pane key={index} eventKey={data.project}>
                <ProjectInfo project={data} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
    </div>
  );
};

export default Portfolio;
