import React from "react";
import "../../css/IndustriesCss/IndustriesBeverages.scss";

const IndustriesBeverages = () => {
  return (
    <div className="container-fluid f-beverage-def-start pt-2">
      <div className="row">
        <div className="col-lg-6 f-beverage-def-right">
          <div className="content-overlay">
            <h5 className="f-beverage-def-head">Food & Beverages</h5>
            <p className="f-beverage-def-parag">
              <p className="f-beverage-def-parag">
                In the fast-paced landscape of the Food and Beverage industry,
                ALSI stands as a steadfast provider of reliable logistics
                solutions. Our primary goal is to preserve the freshness and
                timeliness of your products. Through temperature-controlled
                warehousing, efficient transportation, and specialized expertise
                in handling delicate cargo, we have honed our capabilities to
                become the ideal partner for F&B businesses. In today's
                competitive market, your success hinges on the quality and
                consistency of your supply chain. ALSI understands the critical
                nature of this relationship and is dedicated to delivering both.
                When you choose ALSI, you are choosing a partner committed to
                upholding the highest standards in logistics, ensuring your
                products reach their destinations fresh and on time, every time.
                Trust ALSI for the unwavering quality and reliability your Food
                and Beverage business demands.
              </p>
            </p>
            {/* <p className="f-beverage-def-parag-one">
              <a href="" className="f-beverage-def-learn">
                Learn More
                <img className="spare-bi" src="/images/blue-arrow-right.png" alt="" />
              </a>
            </p> */}
          </div>
        </div>
        <div className="col-lg-6 f-beverage-def-left"></div>
      </div>
    </div>
  );
};

export default IndustriesBeverages;
