import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./../../css/ServicesCss/ServicePageNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ServicesNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const linkStyles = {
    textDecoration: "none",
    color: isOpen ? "white" : "black",
    marginLeft: "22px",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row icons-service-navi">
          <div className="col-lg-12">
            <nav
              className="d-flex justify-content-end"
              style={{ padding: "0 25px" }}
            >
              <a href="https://www.facebook.com/alsimarineservice">
                <i className="bi-navi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/alsiformarineservices_official/">
                <i className="bi-navi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/alsi-official/">
                <i className="bi-navi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/ALSI_OFFICIAL">
                <i className="bi-navi bi-twitter"></i>
              </a>
              <a href="https://in.pinterest.com/alsiformarineservicellc/">
                <i className="bi-navi bi-pinterest"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <Navbar
        expand="lg"
        className={`navbar navbar-expand-lg navbar-custom-service sticky-top ${
          isOpen ? "bg-primary" : "bg-white "
        }`}
      >
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <img
              className="alsi-ser-nav"
              src="./images/service-alsi-nav.png"
              alt=""
              width="80"
              height="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ border: "none", borderRadius: "none" }}
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse
            className="navbar-second-adjusted"
            id="responsive-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/" style={linkStyles}>
                Home
              </Nav.Link>
              <Nav.Link href="/about_us" style={linkStyles}>
                About Us
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className={`custom-dropdown-title-s ${
                  isOpen ? "nav-link" : "lg-nav-link"
                }`}
                style={linkStyles}
              >
                <NavDropdown.Item href="/customs_clearance">
                  Customs Clearance
                </NavDropdown.Item>
                <NavDropdown.Item href="/road_freight">
                  Road Freight
                </NavDropdown.Item>
                <NavDropdown.Item href="/sea_freight">
                  Sea Freight
                </NavDropdown.Item>
                <NavDropdown.Item href="/air_freight">
                  Air Freight
                </NavDropdown.Item>
                <NavDropdown.Item href="/project_cargo_services">
                  Project Cargo Services
                </NavDropdown.Item>
                <NavDropdown.Item href="/aerospace">Aerospace</NavDropdown.Item>
                <NavDropdown.Item href="/warehouse_distribution">
                  Warehousing and Distribution
                </NavDropdown.Item>
                <NavDropdown.Item href="/specialized_services">
                  Specialized Services
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Global Network"
                id="basic-nav-dropdown"
                className={`custom-dropdown-title-s ${
                  isOpen ? "nav-link" : "lg-nav-link"
                }`}
                style={linkStyles}
              >
                <NavDropdown.Item href="/oman">Oman</NavDropdown.Item>
                <NavDropdown.Item href="/uae">UAE</NavDropdown.Item>
                <NavDropdown.Item href="/qatar">Qatar</NavDropdown.Item>
                <NavDropdown.Item href="/saudi">Saudi Arabia</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/industries" style={linkStyles}>
                Industries
              </Nav.Link>
              <Nav.Link href="/market_updates" style={linkStyles}>
                Market Updates
              </Nav.Link>
              <Nav.Link href="/contact_us" style={linkStyles}>
                Contact Us
              </Nav.Link>
              <Nav.Link href="/careers" style={linkStyles}>
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default ServicesNavbar;
