import React, { useState } from "react";
import "../../css/Differentiators.css";

const Differentiators = (props) => {
  const items = [
    {
      image: "images/Differentiators/iteration.png",
      title: "AGILE",
    },
    {
      image: "images/Differentiators/critical.png",
      title: "CRITICAL LOGISTICS EXPERTS",
    },
    {
      image: "images/Differentiators/customer.png",
      title: "CUSTOMER CENTRIC",
    },
    {
      image: "images/Differentiators/end.png",
      title: "END-TO-END SERVICES AND SOLUTIONS",
    },
    {
      image: "images/Differentiators/flexible.png",
      title: "FLEXIBLE",
    },
    {
      image: "images/Differentiators/excellent.png",
      title: "EXCELLENT CUSTOMER SERVICE",
    },
    {
      image: "images/Differentiators/operational.png",
      title: "OPERATIONAL EXPERTISE",
    },
    {
      image: "images/Differentiators/value.png",
      title: "VALUE CREATION ",
    },
    {
      image: "images/Differentiators/round.png",
      title: "ROUND THE CLOCK SERVICE",
    },
    {
      image: "images/Differentiators/tailor.png",
      title: "TAILOR-MADE SOLUTIONS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const firstRowItems = items.slice(0, 5);
  const secondRowItems = items.slice(5, 10);

  return (
    <div className="container diffs-containers">
      <div className="row text-center">
        <p className="feature-text pt-4"></p>
        <h1 className="differentiators-header">Key Differentiators</h1>
        <p className="differentiators-description pb-5">
          ALSI stands out through a combination of expertise, reliability, and
          flexibility. Our deep industry knowledge, commitment to meeting
          deadlines, and adaptability to changing market dynamics make us the preferred
          choice for all your logistics needs We're not just a service provider; we're your trusted partner
          in streamlining your supply chain and achieving your business goals.
        </p>
      </div>

      {/* First Row (visible on larger screens) */}
      <div className="row differentiators-row-one d-none d-lg-flex">
        {firstRowItems.map((item, index) => (
          <div className="col-lg text-center" key={index}>
            <div className="diff-img-setup">
              <div className="diffs-one">
                <img src={item.image} className="differentiators-img" alt="" />
              </div>
            </div>
            <h6 className="diff-sem-parag">{item.title}</h6>
          </div>
        ))}
      </div>

      {/* Second Row (visible on larger screens) */}
      <div className="row differentiators-row d-none d-lg-flex">
        {secondRowItems.map((item, index) => (
          <div className="col-lg text-center" key={index}>
            <div className="diff-img-setup">
              <div className="diffs-one">
                <img src={item.image} className="differentiators-img" alt="" />
              </div>
            </div>
            <h6 className="diff-sem-parag">{item.title}</h6>
          </div>
        ))}
      </div>

      {/* Items for smaller screens */}
      <div className="container">
        {/* Display current item */}
        <div className="row differentiators-row d-flex d-lg-none">
          <div className="col-lg-12 text-center">
            <div className="diff-img-setup">
              <div className="diffs-one">
                <img
                  src={items[currentIndex].image}
                  className="differentiators-img"
                  alt=""
                />
              </div>
            </div>
            <h6 className="diff-sem-parag">{items[currentIndex].title}</h6>
          </div>
        </div>
        <div className="justify-content-center d-flex d-lg-none pt-4">
          <img
            style={{ width: "40px", paddingRight: "5px" }}
            src="/images/black-circle-left-arrow.png"
            onClick={handlePreviousClick}
            disabled={currentIndex === 0}
          />
          {/* Next button */}
          <img
            style={{ width: "40px", paddingLeft: "5px" }}
            src="/images/black-circle-right-arrow.png"
            onClick={handleNextClick}
            disabled={currentIndex === items.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
