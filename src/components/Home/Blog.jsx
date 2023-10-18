import React, { useState } from "react";
import "./../../css/Blog.css";

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      imageUrl: "images/BlogBanner/cs02.png",
      heading:
        "Smooth sailing through customs clearance in Oman: A guide to ensuring compliance,....",
      content:
        "When it comes to international trade and business operations, efficient and compliant customs....",
      link: "/smooth_sailing_through_customs_clearance_in_oman:_a_guide_to_ensuring_compliance,_avoiding_penalties,_and_navigating_potential_pitfalls",
    },
    {
      imageUrl: "images/BlogBanner/cs01.png",
      heading:
        "How GCC free trade zones can help business simplify customs clearance?....",
      content:
        "In today’s competitive business environment, operational efficiency and streamlining processes are....",
      link: "/how_gcc_free_trade_zones_can_help_businesses_simplify_customs_clearance?",
    },
    {
      imageUrl: "images/BlogBanner/cs03.png",
      heading:
        "The digital transformation of customs clearance and how technology is transforming the....",
      content:
        "Customs clearance is essential to ensure the smooth flow of products across borders in the fast-paced....",
      link: "/the_digital_transformation_of_customs_clearance_and_how_technology_is_transforming_the_process",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const cardStyle = {
    maxWidth: "300px",
    border: "12px solid #ffffff",
    borderRadius: "0px",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  };

  const headingStyle = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "14px",
    marginBottom: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#193377",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container-fluid blogs-bg-main-bg d-none d-lg-block">
        <div className="col-lg-12">
          <h1>Market Updates</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <div style={cardStyle} className="card card-blog-main">
              <img
                src="images/BlogBanner/cs02.png"
                alt="Image description"
                style={imgStyle}
              />
              <h6 style={headingStyle}>
                Smooth sailing through customs clearance in Oman: A guide to
                ensuring compliance,
              </h6>
              <p style={paragraphStyle}>
                When it comes to international trade and business operations,
                efficient and compliant customs
              </p>
              <a
                href="/smooth_sailing_through_customs_clearance_in_oman:_a_guide_to_ensuring_compliance,_avoiding_penalties,_and_navigating_potential_pitfalls"
                style={linkStyle}
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={cardStyle} className="card card-blog-main">
              <img
                src="images/BlogBanner/cs01.png"
                alt="Image description"
                style={imgStyle}
              />
              <h6 style={headingStyle}>
                How GCC free trade zones can help business simplify customs
                clearance?
              </h6>
              <p style={paragraphStyle}>
                In today’s competitive business environment, operational
                efficiency and streamlining processes are
              </p>
              <a
                href="/how_gcc_free_trade_zones_can_help_businesses_simplify_customs_clearance?"
                style={linkStyle}
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={cardStyle} className="card card-blog-main">
              <img
                src="images/BlogBanner/cs03.png"
                alt="Image description"
                style={imgStyle}
              />
              <h6 style={headingStyle}>
                The digital transformation of customs clearance and how
                technology is transforming the
              </h6>
              <p style={paragraphStyle}>
                Customs clearance is essential to ensure the smooth flow of
                products across borders in the fast-paced
              </p>
              <a
                href="/the_digital_transformation_of_customs_clearance_and_how_technology_is_transforming_the_process"
                style={linkStyle}
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="view-more-blogs">
          <a href="/market_updates" className="view-all-blogs">
            <p>
              View More <img src="images/right-white-arrow.png" alt="" />
            </p>
          </a>
        </div>
      </div>

      <div className="container-fluid blogs-bg-main-bg d-block d-lg-none">
        <div className="col-lg-12">
          <h1>Market Updates</h1>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            <div style={cardStyle} className="card card-blog-main-second">
              <img
                src={cardData[currentIndex].imageUrl}
                alt="Image description"
                style={imgStyle}
              />
              <h6 style={headingStyle}>{cardData[currentIndex].heading}</h6>
              <p style={paragraphStyle}>{cardData[currentIndex].content}</p>
              <a
                href={cardData[currentIndex].link}
                style={linkStyle}
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="next-prev-blog text-center">
          <img
            style={{ width: "40px", paddingRight: "5px" }}
            src="/images/left-white-arrow.png"
            onClick={handlePrevious}
          />
          <img
            style={{ width: "40px", paddingLeft: "5px" }}
            src="/images/right-white-arrow.png"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
