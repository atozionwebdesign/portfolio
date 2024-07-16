import "./Portfolio.css";
import { classNames } from "../../utils/Helpers";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectInfo = (props) => {
  const data = props.project;
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1.1,
      slidesToSlide: 1,
    },
  };

  const header = data.designTypography.find((font) => font.type === "header");
  const subheader = data.designTypography.find(
    (font) => font.type === "subheader"
  );

  const otherFonts = data.designTypography.filter(
    (font) => font.type === "other"
  );

  return (
    <div className="project-info-div">
      <Row className="no-margin p-small project-summary-div">
        <Col sm={3}>
          <p
            style={{
              marginBottom: 0,
              color: "var(--light-teal)",
              fontWeight: "bold",
            }}
          >
            TECHNOLOGIES
          </p>
          <p className="no-margin">{data.technologies}</p>
        </Col>
        <Col sm={3}>
          <p
            style={{
              marginBottom: 0,
              color: "var(--light-teal)",
              fontWeight: "bold",
            }}
          >
            SERVICES
          </p>
          <p className="no-margin">{data.services}</p>
        </Col>
        <Col sm={3}>
          <p
            style={{
              marginBottom: 0,
              color: "var(--light-teal)",
              fontWeight: "bold",
            }}
          >
            GIT REPOSITORY
          </p>
          <p className="no-margin">{data.git}</p>
        </Col>
        <Col sm={3}>
          <p
            style={{
              marginBottom: 0,
              color: "var(--light-teal)",
              fontWeight: "bold",
            }}
          >
            LINK
          </p>
          <p className="no-margin">{data.link}</p>
        </Col>
      </Row>
      <div className="project-title-div">
        <p className="project-title">{data.title}</p>
        <p className="project-subtitle">{data.subtitle}</p>
      </div>
      <img src={data.logo} alt="" className="logo-img" />

      <Row className="project-about-div">
        <Col>
          <h4 className="section-header">
            ABOUT
          </h4>
          <p className="p-xlarge">{data.about}</p>
        </Col>
      </Row>

      <div className="project-technical-div">
        <Row >
          <Col sm={4} style={{ paddingRight: "100px" }}>
            <p className="project-header">
              TECHNICAL DEETS
            </p>
          </Col>
          <Col sm={8}>
            <p className="left">{data.techNarrative}</p>
            <h3 className="left">TECHNOLOGY STACK</h3>{" "}
            <div className="tech-table-div">{data.techTable}</div>
            <h3 className="left">
              DIAGRAM
            </h3>
            <p className="left">
              Click the image below to view / download the {data.project}{" "}
              Application Diagram
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <a
            href={data.diagram}
            className="application-diagram-link lighter-teal no-padding"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={data.diagramImg}
              alt=""
              className="application-diagram-img"
            />
          </a>
          </Col>

        </Row>
      </div>
      <div className="project-design-div">
        <Row>
          <Col sm={4} style={{ paddingRight: "100px" }}>
            <p className="project-header">
              DESIGN
            </p>
          </Col>
          <Col sm={8} className="left">
            <p className="">{data.designSummary}</p>

            <p className="">{data.designTheme}</p>
          </Col>
        </Row>

        <Row className="carousel-div">
          <Carousel responsive={responsive} draggable keyBoardControl>
            {data.carousel.length >= 0
              ? data.carousel.map((item, index) => (
                  <Row style={{ alignItems: "center" }}>
                    <Col sm={12}>
                      <img className="carousel-img" alt="" src={item.img} />
                    </Col>
                  </Row>
                ))
              : ""}
          </Carousel>
        </Row>
        <Row>
          <Col sm={4} style={{ paddingRight: "100px" }}></Col>
          <Col sm={8} className="left">
            <h3>COLOR PALETTE</h3>
            <p>{data.designColorNarrative}</p>
          </Col>
        </Row>
        <Row style={{ width: "90%", margin: "30px auto" }}>
          <Col>
            <Row style={{ height: "40vh" }}>
              {data.designColors.main.length > 0 &&
              data.designColors.main.length !== 0
                ? data.designColors.main.map((color) => (
                    <Col
                      className="color-swatch-div"
                      style={{
                        backgroundColor: color,
                      }}
                    >
                      <p className="color-swatch p-small">{color}</p>
                    </Col>
                  ))
                : ""}
            </Row>
            <Row style={{ height: "15vh" }}>
              {data.designColors.complementary.length > 0 &&
              data.designColors.complementary.length !== 0
                ? data.designColors.complementary.map((color) => (
                    <Col
                      className="color-swatch-div"
                      style={{ backgroundColor: color }}
                    >
                      <p className="color-swatch p-small">{color}</p>
                    </Col>
                  ))
                : ""}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={4} style={{ paddingRight: "100px" }}></Col>
          <Col sm={8} className="left">
            <h3>TYPOGRAPHY</h3>
            <p>
              The application font families were purposefully chosen to
              complement the theme of the application.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center project-typography-div">
          <Col
            className="col"
            sm={5}
            style={{
              borderRight: "1px dotted var(--teal",
              color: "var(--dark-teal)",
            }}
          >
            {data.designTypography.length > 0 &&
            data.designTypography.length !== 0 ? (
              <>
                <p className="p-small no-margin">Header:</p>

                <p
                  className={classNames(
                    "project-typography-header p-xlarge",
                    header.fontFamily
                  )}
                >
                  {header.name}
                </p>

                <p className="p-small no-margin">Body Text:</p>

                <p
                  className={classNames(
                    "project-typography-subheader p-xlarge",
                    subheader.fontFamily
                  )}
                >
                  {subheader.name}
                </p>
              </>
            ) : (
              ""
            )}
          </Col>
          <Col className="col" sm={7} style={{ color: "var(--dark-gray)" }}>
            <p className="left">{data.designTypographyNarrative}</p>
          </Col>
        </Row>

        <Row>
          <Col sm={4} style={{ paddingRight: "100px" }}></Col>
          <Col sm={8} className="left">
            <h3>GRAPHICS</h3>
            <p className="">{data.designGraphics}</p>{" "}
          </Col>
        </Row>

        {/* </div> */}
        <Col></Col>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProjectInfo;
