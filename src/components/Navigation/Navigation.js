import "./Navigation.css";

import { Nav, Navbar } from "react-bootstrap";

const Navigation = (props) => {
  const theme = props.theme;
  return (
    <Navbar collapseOnSelect expand="xxl">
      <Navbar.Brand href="#home">
        <img
          src={require(`../../assets/a-to-zion-logo-${theme}-100.png`)}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#servicesDiv">Services</Nav.Link>
          <Nav.Link href="#portfolioDiv">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
