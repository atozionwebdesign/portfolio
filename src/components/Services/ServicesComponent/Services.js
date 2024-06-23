import "./Services.css";

import { Row, Col } from "react-bootstrap";

// External data
import { services } from "../../../data/ServicesData";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const webServices = services.filter((service) => service.type === "web");
  const graphicServices = services.filter(
    (service) => service.type === "graphic"
  );

  return (
    <div id="services" className="section-div">
      <div className="content">
        <div className="jumbo-text-solid services-header">
          <div id="servicesHeader1">
            <div>
              WE{" "}
              <span className="services-emphasis">
                DES
                <img
                  id="paintBrush"
                  src={
                    require("../../../assets/services/paint-brush.svg").default
                  }
                  alt=""
                />
                GN{" "}
              </span>
            </div>
            <div>
              &{" "}
              <span className="services-emphasis">
                DEVEL
                <img
                  id="gear"
                  src={require("../../../assets/services/gear.svg").default}
                  alt=""
                />
                P
              </span>{" "}
            </div>
            <div>WEBSITES</div>
          </div>
          <div id="servicesHeader2">
            <div>WE ALSO DO</div>
            <div>
              <span className="services-emphasis">
                BR
                <img
                  id="lightbulb"
                  src={
                    require("../../../assets/services/lightbulb.svg").default
                  }
                  alt=""
                />
                NDING
              </span>{" "}
              &
            </div>
            <div>
              <span className="services-emphasis">
                MARKETING
                <img
                  id="bullhorn"
                  src={require("../../../assets/services/bullhorn.svg").default}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div id="servicesContent">
          <div
            className="jumbo-text-bubble"
            style={{
              width: "60%",
              margin: "0 auto",
              fontSize: "8vw",
              lineHeight: "8vw",
              color: "var(--teal)",
              paddingBottom: "100px",
            }}
          >
            <div id="servicesLogic" style={{ textAlign: "left" }}>
              LOGIC
            </div>
            <div
              id="servicesPlus"
              className="jumbo-text-solid"
              style={{ fontSize: "larger" }}
            >
              +
            </div>
            <div id="servicesImagination" style={{ textAlign: "right" }}>
              IMAGINATION
            </div>
          </div>
          <div style={{ fontSize: "2vw" }} id="servicesQuote">
            <strong>A To Zion Web Design, LLC</strong> is a boutique web
            development and design company offering a special blend of high
            quality technical expertise, inspired creativity, and strategic
            empathy.
          </div>
        </div>
        <div id="servicesList">
          <div className="section-header">OUR SERVICES</div>
          <Row>
            <Col sm={2}>
              <div className="jumbo-text-solid left-number">1</div>
            </Col>
            <Col sm={10}>
              <p
                style={{
                  textAlign: "left",
                  marginBottom: 0,
                  color: "var(--light-teal)",
                }}
              >
                Full-stack web application development designed to fit your
                custom workflow. Front-end <i className="bi bi-arrow-right"></i>{" "}
                back-end and database capabilities.
              </p>
              <div className="jumbo-text-solid right">
                WEB DESIGN & DEVELOPMENT
              </div>
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
            <Col sm={10}>
              <p
                style={{
                  textAlign: "right",
                  marginBottom: 0,
                  color: "var(--light-teal)",
                }}
              >
                Visual concept creation to communicate your ideas and captivate
                your target market. From new logos{" "}
                <i className="bi bi-arrow-right"></i> flyers, we deliver
                stunning and high quality graphic design services.
              </p>
              <div className="jumbo-text-solid left">
                GRAPHIC DESIGN & BRANDING
              </div>
            </Col>
            <Col sm={2}>
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
      </div>
    </div>
  );
};

export default Services;
