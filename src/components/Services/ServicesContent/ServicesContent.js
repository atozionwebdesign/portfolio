import "./ServicesContent.css";
import { Row, Col } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";

import { services } from "../../../data/ServicesData";

const ServicesContent = () => {
  const webServices = services.filter((service) => service.type === "web");
  const graphicServices = services.filter(
    (service) => service.type === "graphic"
  );

  return (
    <div id="servicesList">
      <div className="section-header">OUR SERVICES</div>
      <Row>
        <Col xs={2}>
          <div className="jumbo-text-solid left-number">1</div>
        </Col>
        <Col xs={10}>
          <div className="jumbo-text-solid services-right">
            WEB DESIGN & DEVELOPMENT
          </div>
          <p
            style={{
              textAlign: "left",
              marginBottom: 0,
              color: "var(--light-teal)",
            }}
          >
            Full-stack web application development designed to fit your custom
            workflow. Front-end <i className="bi bi-arrow-right"></i> back-end
            and database capabilities.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: "50px" }}>
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
      <Row>
        <Col xs={10}>
          <div className="jumbo-text-solid services-left">
            GRAPHIC DESIGN & BRANDING
          </div>
          <p
            style={{
              textAlign: "right",
              marginBottom: 0,
              color: "var(--light-teal)",
            }}
          >
            Visual concept creation to communicate your ideas and captivate your
            target market. From new logos <i className="bi bi-arrow-right"></i>{" "}
            flyers, I deliver stunning and high quality graphic design services.
          </p>
        </Col>
        <Col xs={2}>
          <div className="jumbo-text-solid right-number">2</div>
        </Col>
      </Row>
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
  );
};

export default ServicesContent;
