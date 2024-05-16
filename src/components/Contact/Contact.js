import "./Contact.css";

import { Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contactDiv">
      <div id="contactLogoDiv">
        <img
          src={require("../../assets/a-to-zion-logo-light-100.png")}
          alt=""
        />
      </div>
      <div id="formContainer">
        <Row>
          <Col
            sm={8}
            style={{
              // border: "solid 2px rgba(34, 34, 34, .2)",
              borderRadius: "5px 0 0 5px",
              // padding: "20px",
              textAlign: "left",
            }}
          >
            <div>
              <h1 style={{ fontWeight: "300" }}>Contact Us</h1>
              <p className="gray">
                We are ready to get to work! Send us a message with questions or
                project ideas and we will be in touch as soon as possible.
              </p>
            </div>
            <Form id="contactForm">
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-5">
                    <Form.Label>Name (required)</Form.Label>
                    <Form.Control type="text"></Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-5">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text"></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-5">
                    <Form.Label>Email (required)</Form.Label>
                    <Form.Control type="email"></Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-5">
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control type="text"></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-5">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3}></Form.Control>
              </Form.Group>
              <Button className="primary-btn">Send Message</Button>
            </Form>
          </Col>
          <Col sm={4} style={{ padding: 0 }}>
            <div
              id="contactInfoDiv"
              style={{
                backgroundColor: "var(--dark-gray)",
                padding: "20px",
                borderRadius: "2px",
              }}
            >
              <Row style={{ textAlign: "left" }}>
                <Col sm={1} style={{ textAlign: "right" }}>
                  <i className="bi bi-geo-alt-fill gray"></i>
                </Col>
                <Col sm={11}>
                  <span style={{ fontWeight: "bold", color: "var(--gray)" }}>
                    Location:
                  </span>
                  <p>Northern Virginia</p>
                </Col>
              </Row>
              <Row style={{ textAlign: "left" }}>
                <Col sm={1} style={{ textAlign: "right" }}>
                  <i className="bi bi-envelope-fill gray"></i>
                </Col>
                <Col sm={11}>
                  <span style={{ fontWeight: "bold", color: "var(--gray)" }}>
                    Email:
                  </span>
                  <p>contact@atozionwebdesign.com</p>
                </Col>
              </Row>
              <p className="gray p-large" style={{ marginTop: "20px" }}>
                <i className="bi bi-facebook sm-icon"> </i>
                <i className="bi bi-instagram sm-icon"></i>
                <i className="bi bi-twitter-x sm-icon"></i>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
