import React from "react";
import "../../css/IndustriesCss/IndustriesPharma.scss";

const IndustriesPharma = () => {
  return (
    <div className="container-fluid ind-pharma-start pt-2">
      <div className="row">
        <div className="col-lg-6 ind-pharma-left"></div>
        <div className="col-lg-6 ind-pharma-right">
          <div className="content-overlay">
            <h5 className="ind-pharma-head">Pharma & Healthcare</h5>
            <p className="ind-pharma-parag">
              <p className="ind-pharma-parag">
              Within the complex and critical landscape of Pharma and Healthcare logistics, ALSI takes the helm, steering excellence through our comprehensive logistics solutions. Our expertise extends from pharmaceutical manufacturing facilities to healthcare institutions, where we specialize in the precise transportation and management of vital medical supplies and healthcare equipment. This commitment ensures punctual deliveries and cost-effective supply chain management. Count on ALSI to optimize your Pharma and Healthcare logistics, enhancing your competitiveness and elevating patient care. In an industry where precision and timeliness are paramount, we are your trusted partner for success. Our unwavering dedication to seamless operations and efficient logistics processes means your healthcare business can run smoothly, meeting the high demands of the healthcare sector.
              </p>
            </p>
            {/* <p className="ind-pharma-parag-one">
              <a href="" className="ind-pharma-learn">
                Learn More
                <img className="spare-bi" src="/images/right-arrow-fir.png" alt="" />
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPharma;
