import React from "react";
import "../../css/IndustriesCss/IndustriesMfg.scss";

const IndustriesMfg = () => {
  return (
    <div className="container-fluid ind-mfg-start pt-2">
      <div className="row">
        <div className="col-lg-6 ind-mfg-left"></div>
        <div className="col-lg-6 ind-mfg-right">
          <div className="content-overlay">
            <h5 className="ind-mfg-head">Manufacturing</h5>
            <p className="ind-mfg-parag">
              <p className="ind-mfg-parag">
              In the world of manufacturing logistics, ALSI takes the lead in driving excellence through our comprehensive logistical solutions. Our expertise encompasses the entire manufacturing process, from the factory floor to distribution centers, where we specialize in the efficient transportation and management of goods and components. This unwavering commitment ensures on-time deliveries and cost-effective supply chain management. Rely on ALSI to optimize your manufacturing logistics, bolstering your competitiveness and enhancing operational efficiency. In an industry where precision and timeliness are vital, we are your trusted partner for success. Our dedication to seamless operations and efficient logistical processes means your manufacturing business can operate seamlessly and effectively, meeting the high demands of the market.
              </p>
            </p>
            {/* <p className="ind-mfg-parag-one">
              <a href="" className="ind-mfg-learn">
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

export default IndustriesMfg;
