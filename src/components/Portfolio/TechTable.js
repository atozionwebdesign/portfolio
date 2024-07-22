import { Row, Col } from "react-bootstrap";

const TechTable = (props) => {
  const frontEnd = props.frontEnd;
  const platform = props.platform;
  const backEnd = props.backEnd;
  const api = props.api;
  const graphics = props.graphics;

  const technologies = {
    "react-bootstrap": {
      name: "React Bootstrap",
      icon: require("../../assets/portfolio/icons/react-bootstrap.svg").default,
    },
    react: {
      name: "React",
      icon: require("../../assets/portfolio/icons/react.svg").default,
    },
    gsap: {
      name: "GSAP",
      icon: require("../../assets/portfolio/icons/gsap.svg").default,
    },
    lottie: {
      name: "LottieFiles",
      icon: require("../../assets/portfolio/icons/lottie.svg").default,
    },
    redux: {
      name: "REDUX",
      icon: require("../../assets/portfolio/icons/redux.svg").default,
    },
    "font-awesome": {
      name: "Font Awesome",
      icon: require("../../assets/portfolio/icons/font-awesome.svg").default,
    },
    "weather-gov": {
      name: "Weather.gov API",
      icon: require("../../assets/portfolio/icons/weather-gov.svg").default,
      url: "https://www.weather.gov/documentation/services-web-api",
    },
    geocode: {
      name: "Geocoding API",
      icon: require("../../assets/portfolio/icons/geocode.svg").default,
      url: "https://geocode.maps.co/",
    },
    typescript: {
      name: "TypeScript",
      icon: require("../../assets/portfolio/icons/typescript.svg").default,
    },
    mongoose: {
      name: "Mongoose",
      icon: require("../../assets/portfolio/icons/mongoose.svg").default,
    },
    axios: {
      name: "Axios",
      icon: require("../../assets/portfolio/icons/axios.svg").default,
    },
    bcrypt: {
      name: "bcrypt",
      icon: require("../../assets/portfolio/icons/node.svg").default,
    },
    node: {
      name: "Node.js",
      icon: require("../../assets/portfolio/icons/node.svg").default,
    },
    mongodb: {
      name: "MongoDB",
      icon: require("../../assets/portfolio/icons/mongodb.svg").default,
    },
    "espn-api": {
      name: "ESPN API",
      icon: require("../../assets/portfolio/icons/espn-api.svg").default,
    },
    express: {
      name: "Express.js",
      icon: require("../../assets/portfolio/icons/express.svg").default,
    },
  };

  return (
    <>
      {platform.length > 0 && platform.length !== 0 ? (
        <Row className="">
          <Col sm="3" >
            <p className="p-mid tech-table-heading">PLATFORM:</p>
          </Col>
          <Col className="left" sm="9">
            <Row>
              {platform.map((item) => (
                    <div className="tech-icon-div">
                      <img
                        src={technologies[item].icon}
                        alt=""
                        className="tech-icon"
                      />
                    <p style={{display: "block"}} className="p-small">{technologies[item].name}</p>
                  </div>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {frontEnd.length > 0 && frontEnd.length !== 0 ? (
        <Row className="bordered-row">
          <Col sm="3">
            <p className="p-mid tech-table-heading">FRONT-END:</p>
          </Col>
          <Col className="left" sm="9">
            <Row>
              {frontEnd.map((item) => (
                    <div className="tech-icon-div">
                      <img
                        src={technologies[item].icon}
                        alt=""
                        className="tech-icon"
                      />
                    <p className="p-small">{technologies[item].name}</p>
                  </div>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {backEnd.length > 0 && backEnd.length !== 0 ? (
        <Row className="bordered-row">
          <Col sm="3">
            <p className="p-mid tech-table-heading">BACK-END:</p>
          </Col>
          <Col className="left" sm="9">
            <Row>
              {backEnd.map((item) => (
                    <div className="tech-icon-div">
                      <img
                        src={technologies[item].icon}
                        alt=""
                        className="tech-icon"
                      />
                    <p className="p-small">{technologies[item].name}</p>
                  </div>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {api.length > 0 && api.length !== 0 ? (
        <Row className="bordered-row">
          <Col sm="3">
            <p className="p-mid tech-table-heading">API:</p>
          </Col>
          <Col className="left" sm="9">
            <Row>
              {api.map((item) => (
                    <div className="tech-icon-div">
                      <img
                        src={technologies[item].icon}
                        alt=""
                        className="tech-icon"
                      />
                    <p className="p-small">{technologies[item].name}</p>
                  </div>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {graphics.length > 0 && graphics.length !== 0 ? (
        <Row className="bordered-row">
          <Col sm="3">
            <p className="p-mid tech-table-heading">GRAPHICS:</p>
          </Col>
          <Col className="left" sm="9">
            <Row>
              {graphics.map((item) => (
                    <div className="tech-icon-div">
                      <img
                        src={technologies[item].icon}
                        alt=""
                        className="tech-icon"
                      />
                    <p className="p-small">{technologies[item].name}</p>
                  </div>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default TechTable;
