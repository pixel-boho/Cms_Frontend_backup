import React from "react";
import "../../css/IndustriesCss/IndustriesEnergy.scss";

const IndustriesEnergy = () => {
  return (
    <div className="container-fluid ind-ene-start pt-2">
      <div className="row">
        <div className="col-lg-6 ind-ene-left"></div>
        <div className="col-lg-6 ind-ene-right">
          <div className="content-overlay">
            <h5 className="ind-ene-head">Energy</h5>
            <p className="ind-ene-parag">
              <p className="ind-ene-parag">
                Energy logistics is the lifeblood of our modern world, ensuring
                the seamless flow of essential energy resources. At ALSI, we
                specialize in energy logistics, providing comprehensive
                solutions tailored to the unique needs of the industry. From
                resource extraction and production to efficient distribution and
                timely delivery, ALSI serves as your trusted partner at every
                step. We understand the critical significance of the energy
                sector and the imperative for secure, reliable, and
                cost-effective logistics. With cutting-edge infrastructure, a
                seasoned team of experts, and an unwavering commitment to safety
                and compliance, ALSI stands as a leader in energy logistics.
                Whether it's managing the supply chain for oil, gas, renewables,
                or electricity, we are dedicated to optimizing your operations
                and minimizing downtime.
              </p>
            </p>
            {/* <p className="ind-ene-parag-one">
              <a href="" className="ind-ene-learn">
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

export default IndustriesEnergy;
