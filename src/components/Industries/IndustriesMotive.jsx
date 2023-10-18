import React from "react";
import "../../css/IndustriesCss/IndustriesMotive.scss";

const IndustriesMotive = () => {
  return (
    <div className="container-fluid a-motive-def-start pt-2">
      <div className="row">
        <div className="col-lg-6 a-motive-def-right">
          <div className="content-overlay">
            <h5 className="a-motive-def-head">Automotive</h5>
            <p className="a-motive-def-parag">
              <p className="a-motive-def-parag">
                In the automotive sector, ALSI takes the wheel in driving
                excellence through our comprehensive logistics solutions. Our
                expertise spans from the manufacturing floor to dealerships,
                where we specialize in the efficient transportation and
                management of vehicles and automotive components. This
                dedication ensures on-time deliveries and cost-effective supply
                chain management. Count on ALSI to optimize your automotive
                logistics, bolstering your competitiveness and elevating
                customer satisfaction. In an industry where precision and
                timeliness are paramount, we are your trusted partner for
                success. Our commitment to seamless operations and efficient
                logistics processes means that your automotive business can run
                smoothly and effectively, meeting the high demands of the
                market. Choose ALSI to be your driving force in the automotive
                sector, and let us steer your supply chain toward excellence,
                delivering results that satisfy both your business goals and
                your customers.
              </p>
            </p>
            {/* <p className="a-motive-def-parag-one">
              <a href="" className="a-motive-def-learn">
                Learn More
                <img className="spare-bi" src="/images/blue-arrow-right.png" alt="" />
              </a>
            </p> */}
          </div>
        </div>
        <div className="col-lg-6 a-motive-def-left"></div>
      </div>
    </div>
  );
};

export default IndustriesMotive;
