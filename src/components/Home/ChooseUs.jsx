import React from "react";
import "../../css/ChooseUs.css";

const ChooseUs = (props) => {
  return (
    <>
      <div className="container-fluid chooseus-wh choose-us-main-contain">
        <div className="row">
          <div className="col-lg-6">
            <div className="chooseus-p"></div>
            <div className="chooseus-h">
              <h1 className="chooseus-h-one">Why Choose Us</h1>
            </div>
            <div className="chooseus-h2 pt-2"></div>
            <div className="chooseus-parag">
              <p>
                Partner with ALSI as your trusted logistics company for our
                unwavering commitment to reliability, seamlessness, and
                personalized service. With years of industry expertise, a global
                network, and a dedication to your success, we deliver tailored
                solutions that optimize your supply chain and drive your
                business with efficiency.
              </p>
            </div>
            <div className="chooseus-readm">
              <a href="" className="chooseus-read-more">
                Read More
                <img
                  src="/images/select-arrow.png"
                  style={{ width: "45px", paddingLeft: "10px" }}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg choose-container-bg"></div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
