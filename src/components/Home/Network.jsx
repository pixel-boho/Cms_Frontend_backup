import React, { useState } from "react";
import "./../../css/Network.css";
import oman from "../../images/Network/oman02.png";
import omanHovered from "../../images/Network/omanhovered.png";
import saudi from "../../images/Network/saudi01.png";
import quatar from "../../images/Network/qatar04.png";
import quatarHovered from "../../images/Network/qutarhovered.png";
import saudiHovered from "../../images/Network/saudihovered.png";
import uae from "../../images/Network/uae03.png";
import uaeHovered from "../../images/Network/uaehovered.png";
import mapMask from "../../images/Network/mapmasks.png";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";

function Network() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState({
    oman: false,
    saudi: false,
    qatar: false,
    uae: false,
  });
  const handleMouseEnter = (event) => {
    let initialState = {
      oman: false,
      saudi: false,
      qatar: false,
      uae: false,
    };
    setIsHovered({ ...initialState, [event.target.name]: true });
  };
  const handleLeave = (event) => {
    // setIsOpen(false);
    setIsHovered({ ...isHovered, [event.target.name]: false });
  };

  const handleParentMouseOver = (event) => {
    const { id } = event.target;
    if (id === "map-container") {
      let initialState = {
        oman: false,
        saudi: false,
        qatar: false,
        uae: false,
      };
      setIsOpen(false);
      setIsHovered(initialState);
    }
  };
  return (
    <div className=" network-bg-main  position-relative">
      <img
        src={mapMask}
        className="position-absolute top-0 left-0"
        style={{ height: "100%", width: "100%" }}
        alt=""
      />
      <div className="row h-100">
        <div className="col-12  h-100 d-flex flex-column">
          <h1 className="network-map-heading text-center mb-5">
            Our Global Network
          </h1>

          <div
            className="map-container"
            id="map-container"
            onMouseOver={handleParentMouseOver}
          >
            <img
              src={oman}
              className={` map-image oman`}
              name="oman"
              alt=""
              onMouseEnter={handleMouseEnter}
              data-tooltip-id="my-tooltip"
              data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
                <div className="" name="oman" onMouseEnter={() => alert()}>
                  <h3 className="fw-bold">ALSI Oman</h3>
                  <p className="display-7 mb-2" style={{ fontSize: "12px" }}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a
                    href="/r"
                    className="btn d-flex align-items-center fw-bold"
                    style={{ fontSize: "12px" }}
                  >
                    Get Direction
                    <img
                      src="/images/select-arrow.png"
                      width="30px"
                      className="ms-3"
                      alt=""
                    />
                  </a>
                </div>
              )}
            />
            {isHovered.oman && (
              <img
                src={omanHovered}
                className="map-image oman map-oman-hovered"
                alt=""
                name="oman"
                onMouseEnter={() => setIsOpen(true)}
                // onMouseOver={() => setIsOpen(true)}
              />
            )}
            <div>
              <img
                src={uae}
                className="map-image uae"
                name="uae"
                onMouseEnter={handleMouseEnter}
                alt=""
                data-tooltip-id="my-tooltip"
                data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
                  <div className="">
                    <h3 className="fw-bold">ALSI UAE</h3>
                    <p className="display-7" style={{ fontSize: "12px" }}>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <a
                      href="/r"
                      className="btn d-flex align-items-center fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      Get Direction
                      <img
                        src="/images/select-arrow.png"
                        width="30px"
                        className="ms-3"
                        alt=""
                      />
                    </a>
                  </div>
                )}
              />
              {isHovered.uae && (
                <img
                  src={uaeHovered}
                  name="uae"
                  className="map-image uae map-uae-hovered"
                  onMouseEnter={() => setIsOpen(true)}
                  alt=""
                />
              )}
            </div>
            <div>
              <img
                src={saudi}
                className="map-image saudi"
                name="saudi"
                alt=""
                onMouseEnter={handleMouseEnter}
                data-tooltip-id="my-tooltip"
                data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
                  <div className="">
                    <h3 className="fw-bold">ALSI Saudi</h3>
                    <p className="display-7" style={{ fontSize: "12px" }}>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <a
                      href="/r"
                      className="btn d-flex align-items-center fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      Get Direction
                      <img
                        src="/images/select-arrow.png"
                        width="30px"
                        className="ms-3"
                        alt=""
                      />
                    </a>
                  </div>
                )}
              />
              {isHovered.saudi && (
                <img
                  src={saudiHovered}
                  alt=""
                  onMouseEnter={() => setIsOpen(true)}
                  // onMouseLeave={() => setIsOpen(false)}
                  className="map-image saudi map-saudi-hovered "
                />
              )}
            </div>
            <div>
              <img
                src={quatar}
                className="map-image quatar"
                alt=""
                name="qatar"
                onMouseEnter={handleMouseEnter}
                data-tooltip-id="my-tooltip"
                data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
                  <div className="">
                    <h3 className="fw-bold">ALSI Qatar </h3>
                    <p className="display-7" style={{ fontSize: "12px" }}>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <a
                      href="/r"
                      className="btn d-flex align-items-center fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      Get Direction
                      <img
                        src="/images/select-arrow.png"
                        width="30px"
                        className="ms-3"
                        alt=""
                      />
                    </a>
                  </div>
                )}
              />
              {isHovered.qatar && (
                <img
                  src={quatarHovered}
                  alt=""
                  onMouseEnter={() => setIsOpen(true)}
                  // onMouseLeave={() => setIsOpen(false)}
                  className="map-image quatar map-quatar-hovered"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "7px",
          maxWidth: "200px",
          zIndex: "9999",
        }}
        offset={-10}
        isOpen={isOpen}
        clickable={true}
      />
    </div>
  );
}

export default Network;
