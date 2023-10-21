import React, { useState } from "react";
import "../../css/Highlights.css";

const Highlights = () => {
  const highlightsData = [
    {
      icon: "/images/Highlights/highlights-mark.png",
      title:
        "130+ employees inclusive of 65 Customs Clearance Clerks <br /><br />",
      description: "",
    },

    {
      icon: "/images/Highlights/highlights-mark.png",
      title:
        "Average of 7,000 Customs Declarations processed per month <br /><br />",
      description: "",
    },

    {
      icon: "/images/Highlights/highlights-mark.png",
      title: "10 Offices across Oman<br /><br /><br />",
      description: "",
    },

    {
      icon: "/images/Highlights/highlights-mark.png",
      title: "Branch Offices in UAE, Qatar and Saudi Arabia <br /><br />",
      description: "",
    },

    {
      icon: "/images/Highlights/highlights-mark.png",
      title: "24/7 Operations<br /><br /><br />",
      description: "",
    },

    {
      icon: "/images/Highlights/highlights-mark.png",
      title: "ISO 9001:2015 certified company <br /><br /><br /> ",
      description: "",
    },

    {
      icon: "/images/Highlights/highlights-mark.png",
      title: "Registered member of WCA and FIATA Freight Network<br/><br/>",
      description: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>

      <div
        className="highlights-container-bg d-none d-lg-block"
        id="justify-swipper"
      >
        <div className="row justify-content-end">
          <div className="col read-icon-a">
            <h1 className="high-txt-stl">Highlights</h1>
          </div>
          {highlightsData.map((highlight, index) => (
            <div
              className={`swiper-slide-higlight ${
                index === currentIndex ? "active" : ""
              }`}
              key={index}
            >
              <div className="highlight-item">
                <img
                  src={highlight.icon}
                  className="multi-pad pb-4"
                  style={{ width: "55px" }}
                  alt="Highlight"
                />
                <h1
                  className="highlights-text pb-2"
                  dangerouslySetInnerHTML={{ __html: highlight.title }}
                />
                <p
                  className="highlight-text-one"
                  dangerouslySetInnerHTML={{ __html: highlight.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid highlights-bg-second d-lg-none">
        {/* Responsive highlight items */}
        <div className="row highlights-second-head">
          <div className="col-lg-12 highlights-second-main">
            <h1>Highlights</h1>
          </div>
        </div>

        <div className="row highlights-f-mode">
          {highlightsData.map((highlight, index) => (
            <div
              className={`col-lg card-wrap-second marquee ${
                index === currentIndex ? "active" : ""
              }`}
              key={index}
            >
              <div
                className={`highlight-item-second ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <img
                  src={highlight.icon}
                  className="multi-pad-second pb-4"
                  style={{ width: "50px" }}
                  alt="Highlight"
                />
                <h1
                  className="highlights-text pb-2"
                  dangerouslySetInnerHTML={{ __html: highlight.title }}
                />
                <p
                  className="highlight-text-one"
                  dangerouslySetInnerHTML={{ __html: highlight.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Highlights;
