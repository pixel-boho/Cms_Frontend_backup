import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./../../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const burgerLine = "4px";
const burgerColor = "#2044A2";
const sidemenuBackground = "linear-gradient(to top, #193377, #009ADB)";
const sidemenuLink = "#fff";
const sidemenuFooter = "#2044A2";

const Burger = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 6rem;
  width: 45px;
  background: none;
  border: none;
  outline: none;
  z-index: 5;
  @media (max-width: 768px) {
    top: 1rem;
    right: 3rem;
  }

  @media (max-width: 360px) {
    top: 1rem;
    right: 2rem;
    width: 43px;
    height: 43px;
  }

  span {
    position: relative;
    height: ${burgerLine};
    width: 100%;
    background: ${burgerColor};
    display: inline-block;
    transition: all 0.5s ease;
    &:before,
    &:after {
      content: "";
      height: ${burgerLine};
      width: 100%;
      background: ${burgerColor};
      position: absolute;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
    }
    &:before {
      top: -10px;
      right: 0;
    }
    &:after {
      bottom: -10px;
      right: 0;
    }
  }

  &.open span {
    background: transparent;
    &:before {
      opacity: 1;
      transform: rotate(41deg);
      width: 50%;
      top: -29px;
      background: #ffffff;
      left: 60px;
      z-index: 2;
      position: absolute;
      @media (max-width: 768px) {
        left: 15px;
        top: -28px;
      }
    
      @media (max-width: 360px) {
        left: 15px;
        top: -28px;
      }
    }

    &:after {
      opacity: 1;
      transform: rotate(-40deg);
      width: 50%;
      bottom: 20px;
      background: #fff;
      left: 60px;
      @media (max-width: 768px) {
        left: 15px;
        top: -20px;
      }
    
      @media (max-width: 360px) {
        left: 15px;
        top: -20px;
      }
    }
  }
`;

const Sidemenu = styled.div`
  background: ${sidemenuBackground};
  top: 0;
  position: fixed;
  right: 0;
  width: 20%; /* Use full width for mobile */
  height: 100%; /* Use full height for mobile */
  border-radius: 0;
  transform: translateX(100%);
  transition: all 0.5s cubic-bezier(0.04, 0.79, 0.34, 1.3);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 360px) {
    width: 100%;
    height: 100%;
  }

  ul {
    padding: 3.2rem;
    @media (max-width: 360px) {
      padding: 6rem;
    }
    li {
      display: block;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.04, 0.79, 0.34, 1.3);
      a {
        color: ${sidemenuLink};
        font-weight: 200;
        text-decoration: none;
        padding: 0px;
        font-size: 18px;
        &:hover {
          color: ${sidemenuLink};
        }
        @media (max-width: 768px) {
          font-size: 14px;
        }
      
        @media (max-width: 360px) {
          font-size: 14px;
        }
      }
    }
  }

  ul .submenu {
    padding: 0;
    margin: 0;
  }

  .sidemenu_footer {
    background: ${sidemenuFooter};
    color: #2044a2;
    padding: 1rem;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.04, 0.79, 0.34, 1.3);
  }

  &.open {
    transform: translateX(0);
    z-index: 3;

    ul {
      li {
        opacity: 0.9;
        transform: translateY(30px);
      }
    }
  }
`;

const NavbarContainer = styled.nav`
  background: transparent;
  top: 0;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 460px) {
    max-width: 100%;
    padding-left: 12px;
  }
`;

const LogoImage = styled.img`
  max-width: 95%;
  height: auto;
  margin-left: 63px;
  z-index: 5;

  @media (max-width: 768px) {
    max-width: 50%;
    margin-left: 5px;
    position: absolute;
    top: 40;
  }

  @media (max-width: 360px) {
    max-width: 13%;
    margin-left: 5px;
  }
`;

const Navbar = () => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [globalNetworkDropdownOpen, setGlobalNetworkDropdownOpen] =
    useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const socialIconStyle = {
    display: "flex",
    zIndex: "1",
    marginRight: "90px",
    paddingBottom: "10px",
  };

  if (window.innerWidth <= 460) {
    socialIconStyle.marginRight = "36px";
    socialIconStyle.paddingBottom = "2px";
  }

  const socialIconsStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "70px",
  };

  const iconStyle = {
    marginRight: "15px",
    color: "#707070",
    fontSize: "15px",
    marginLeft: "10px",
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
  };

  const iconStyleSidebar = {
    color: "#ffffff",
    fontSize: "14px",
    marginLeft: "22px",
    "@media (max-width: 768px)": {
      fontSize: "10px",
      marginLeft: "8px",
    },

    "@media (max-width: 375px)": {
      fontSize: "10px",
    },
  };
  return (
    <>
      <ul className="nav justify-content-end mt-3 navbar-pos">
        <li className="nav-item" style={socialIconStyle}>
          <Link
            to="https://www.facebook.com/alsimarineservice"
            className="nav-link-navbar-main"
          >
            <div className="social-icons" style={iconStyle}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </Link>

          <Link
            to="https://www.instagram.com/alsiformarineservices_official/"
            className="nav-link-navbar-main"
          >
            <div className="social-icons" style={iconStyle}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </Link>

          <Link
            to="https://www.linkedin.com/company/alsi-official/"
            className="nav-link-navbar-main"
          >
            <div className="social-icons" style={iconStyle}>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </Link>

          <Link
            to="https://twitter.com/ALSI_OFFICIAL"
            className="nav-link-navbar-main"
          >
            <div className="social-icons" style={iconStyle}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </Link>

          <Link
            to="https://in.pinterest.com/alsiformarineservicellc/"
            className="nav-link-navbar-main"
          >
            <div className="social-icons" style={iconStyle}>
              <FontAwesomeIcon icon={faPinterest} />
            </div>
          </Link>
        </li>
      </ul>

      {/* Main Navbar */}
      <NavbarContainer className="navbar sticky">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{ zIndex: "15" }}>
            <LogoImage src="images/nav_logo.png" alt="Logo" />
          </Link>

          <Burger className={menuOpen ? "open" : ""} onClick={toggleMenu}>
            <span></span>
          </Burger>
        </div>
      </NavbarContainer>

      {/* Side Menu */}
      <Sidemenu className={menuOpen ? "open" : ""}>
        <ul className="main_menu">
          <li>
            <Link to="/">Home</Link>
            <img src="images/nav-line.png" alt="nav line"></img>
          </li>
          <li>
            <Link to="/about_us">About Us</Link>
            <img src="images/nav-line.png" alt="nav line"></img>
          </li>

          <li onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}>
            <Link
              to="#"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Services
              <i
                className="bi bi-chevron-down"
                style={{
                  color: "white",
                  paddingLeft: "5px",
                  border: "none",
                  fontWeight: "800",
                }}
              ></i>
            </Link>
            <img src="images/nav-line.png" alt="line" />
            {servicesDropdownOpen && (
              <ul className="submenu">
                <div>
                  <Link to="/customs_clearance" style={{ fontSize: "15px" }}>
                    Customs Clearance
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
                <div>
                  <Link to="/road_freight" style={{ fontSize: "15px" }}>
                    Road Freight
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
                <div>
                  <Link to="/sea_freight" style={{ fontSize: "15px" }}>
                    Sea Freight
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
                <div>
                  <Link to="/air_freight" style={{ fontSize: "15px" }}>
                    Air Freight
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
                <div>
                  <Link
                    to="/project_cargo_services"
                    style={{ fontSize: "15px" }}
                  >
                    Project Cargo Services
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
                <div>
                  <Link to="/specialized_services" style={{ fontSize: "15px" }}>
                    Specialized Services
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
                <div>
                  <Link
                    to="/warehousing_and_distribution"
                    style={{ fontSize: "15px" }}
                  >
                    Warehousing and Distribution
                  </Link>
                  <img src="images/nav-line.png" alt="line" />
                </div>
              </ul>
            )}
          </li>

          <li
            onClick={() =>
              setGlobalNetworkDropdownOpen(!globalNetworkDropdownOpen)
            }
          >
            <Link
              to="#"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Global Network
              <i
                className="bi bi-chevron-down"
                style={{
                  color: "white",
                  paddingLeft: "5px",
                  border: "none",
                  fontWeight: "800",
                }}
              ></i>
            </Link>

            <img src="images/nav-line.png" alt="line" />
            {globalNetworkDropdownOpen && (
              <ul className="submenu">
                <div>
                  <a href="/oman" style={{ fontSize: "15px" }}>
                    Oman
                  </a>
                  <img src="images/nav-line.png"></img>
                </div>
                <div>
                  <a href="/uae" style={{ fontSize: "15px" }}>
                    UAE
                  </a>
                  <img src="images/nav-line.png"></img>
                </div>
                <div>
                  <a href="/qatar" style={{ fontSize: "15px" }}>
                    Qatar
                  </a>
                  <img src="images/nav-line.png"></img>
                </div>
                <div>
                  <a href="/saudi" style={{ fontSize: "15px" }}>
                    Saudi Arabia
                  </a>
                </div>
                <img src="images/nav-line.png"></img>
              </ul>
            )}
          </li>

          <li>
            <Link to="/industries">Industries</Link>
            <img src="images/nav-line.png" alt="line" />
          </li>
          <li>
            <Link to="/market_updates">Market Updates</Link>
            <img src="images/nav-line.png" alt="line" />
          </li>
          <li>
            <Link to="/contact_us">Contact Us</Link>
            <img src="images/nav-line.png" alt="line" />
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
        <div className="nav">
          <ul>
            <li className="nav-item" style={socialIconsStyle}>
              <div className="social-icons" style={iconStyleSidebar}>
                <Link
                  className="nav-link-navbar-main"
                  to="https://www.facebook.com/alsimarineservice"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>

              <div className="social-icons" style={iconStyleSidebar}>
                <Link
                  className="nav-link-navbar-main"
                  to="https://www.instagram.com/alsiformarineservices_official/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>

              <div className="social-icons" style={iconStyleSidebar}>
                <Link
                  className="nav-link-navbar-main"
                  to="https://www.linkedin.com/company/alsi-official/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>

              <div className="social-icons" style={iconStyleSidebar}>
                <Link
                  className="nav-link-navbar-main"
                  to="https://twitter.com/ALSI_OFFICIAL"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>

              <div className="social-icons" style={iconStyleSidebar}>
                <Link
                  className="nav-link-navbar-main"
                  to="https://in.pinterest.com/alsiformarineservicellc/"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
              </div>
            </li>

            <li>
              <p
                style={{
                  fontSize: "9px",
                  color: "#ffffff",
                  marginLeft: "12px",
                }}
              >
                © ALSI Global 2023, All Rights Reserved.
              </p>
            </li>
          </ul>
        </div>
      </Sidemenu>
    </>
  );
};

export default Navbar;
