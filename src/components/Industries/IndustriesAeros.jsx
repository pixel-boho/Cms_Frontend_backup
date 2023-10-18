import React from "react";
import "../../css/IndustriesCss/IndustriesAeros.scss";

const IndustriesAeros = () => {
  return (
    <div className="container-fluid a-aeros-def-start pt-2">
      <div className="row">
        <div className="col-lg-6 a-aeros-def-right">
          <div className="content-overlay">
            <h5 className="a-aeros-def-head">Aviation & Aerospace</h5>
            <p className="a-aeros-def-parag">
              <p className="a-aeros-def-parag">
                In the aerospace industry, precision timing is of the utmost
                importance. ALSI specializes in managing time-sensitive
                shipments, including critical Aircraft on Ground (AOG) support,
                ensuring the rapid delivery of essential components to minimize
                costly downtime. As a seasoned partner for Original Equipment
                Manufacturers (OEMs), we possess an intricate understanding of
                the intricate world of aerospace logistics. Our unwavering
                commitment to precision and stringent compliance guarantees that
                your aerospace projects remain firmly on track. Place your trust
                in ALSI for excellence in aerospace logistics. We are dedicated
                to providing not only timely solutions but also precision and
                reliability at every stage of the process. In the dynamic and
                high-stakes realm of aerospace, ALSI is your dependable partner,
                committed to upholding the precision and efficiency your
                projects demand.
              </p>
            </p>
            {/* <p className="a-aeros-def-parag-one">
              <a href="" className="a-aeros-def-learn">
                Learn More
                <img className="spare-bi" src="/images/blue-arrow-right.png" alt="" />
              </a>
            </p> */}
          </div>
        </div>
        <div className="col-lg-6 a-aeros-def-left"></div>
      </div>
    </div>
  );
};

export default IndustriesAeros;
