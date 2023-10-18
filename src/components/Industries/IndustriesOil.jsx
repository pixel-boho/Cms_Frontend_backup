import React from "react";
import "../../css/IndustriesCss/IndustriesOil.scss";

const IndustriesOil = () => {
  return (
    <div className="container-fluid ind-oil-start pt-3">
      <div className="row">
        <div className="col-lg-6 ind-oil-left"></div>
        <div className="col-lg-6 ind-oil-right">
          <div className="content-overlay">
            <h5 className="ind-oil-head">Oil & Gas</h5>
            <p className="ind-oil-parag">
              <p className="ind-oil-parag">
                In the oil and gas industry, we recognize its pivotal nature. At
                ALSI, we prioritize safety, precision, and efficiency, offering
                specialized logistics solutions meticulously tailored to fulfill
                its unique requirements. Whether it's the transportation of
                critical equipment or the intricate management of project cargo,
                ALSI is steadfastly positioned as your trusted partner, fully
                committed to ensuring seamless operations within the oil and gas
                sector. Our unwavering dedication stems from an understanding of
                the industry's critical role in providing essential energy
                resources. With ALSI as your logistics partner, you can rely on
                our expertise and reliability to support and enhance your
                endeavors. We are here to facilitate the uninterrupted flow of
                resources, ensuring the success of your mission within this
                vital sector. For oil and gas logistics, ALSI is the name you
                can trust for unwavering dedication and excellence.
              </p>
            </p>
            {/* <p className="ind-oil-parag-one">
              <a href="" className="ind-oil-learn">
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

export default IndustriesOil;
