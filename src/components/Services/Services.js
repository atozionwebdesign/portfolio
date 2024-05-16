import "./Services.css";

import ServiceCard from "../sub-components/ServiceCard/ServiceCard";

import { Row, Col } from "react-bootstrap";

// External data
import { services } from "../../data/ServicesData";

const Services = () => {
  const webServices = services.filter((service) => service.type === "web");
  const graphicServices = services.filter(
    (service) => service.type === "graphic"
  );

  return (
    <div id="servicesDiv">
      <p className="section-header">SERVICES WE PROVIDE</p>
      <div id="webServicesDiv">
        <Row>
          <Col sm={2}>
            <div className="jumbo-text-solid right right-number">1</div>
          </Col>
          <Col sm={10}>
            <div className="left">
              <span className="jumbo-text-solid service">
                WEB DESIGN & DEVELOPMENT
              </span>
              <p style={{ margin: 0 }}>
                Full-stack web application development designed to fit your
                custom workflow. Front-end <i className="bi bi-arrow-right"></i>{" "}
                back-end and database capabilities.
              </p>
              <Row>
                {webServices.map((service, index) => (
                  <ServiceCard
                    img={service.img}
                    service={service.service}
                    type={service.type}
                    description={service.description}
                    key={index}
                  />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div className="serviceDiv right">
              <span className="jumbo-text-solid service">
                GRAPHIC DESIGN & BRANDING
              </span>
              <p style={{ margin: 0 }}>
                Visual concept creation to communicate your ideas and captivate
                your target market. From new logos{" "}
                <i className="bi bi-arrow-right"></i> flyers, we deliver
                stunning and high quality graphic design services.
              </p>
              <Row>
                {graphicServices.map((service, index) => (
                  <ServiceCard
                    img={service.img}
                    service={service.service}
                    type={service.type}
                    description={service.description}
                    key={index}
                  />
                ))}
              </Row>
            </div>
          </Col>
          <Col sm={2}>
            <div className="jumbo-text-solid left left-number">2</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
