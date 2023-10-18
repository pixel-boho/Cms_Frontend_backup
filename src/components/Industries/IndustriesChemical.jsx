import React from "react";
import "../../css/IndustriesCss/IndustriesChemical.scss";

const IndustriesChemical = () => {
  return (
    <div className="container-fluid ind-chem-start pt-2">
      <div className="row">
        <div className="col-lg-6 ind-chem-left"></div>
        <div className="col-lg-6 ind-chem-right">
          <div className="content-overlay">
            <h5 className="ind-chem-head">Chemical</h5>
            <p className="ind-chem-parag">
              <p className="ind-chem-parag">
                In the intricate world of the chemicals industry, ALSI emerges
                as your steadfast logistics partner, placing utmost importance
                on safety and precision. We specialize in the secure
                transportation and storage of hazardous materials, rigorously
                adhering to stringent regulations. Our expertise, coupled with
                state-of-the-art infrastructure, guarantees the absolute
                integrity of your chemical cargo. From its initiation point to
                the ultimate destination, ALSI meticulously oversees every
                aspect of the supply chain. Within the complex landscape of
                chemical logistics, ALSI is the guardian you can rely on. Our
                core values revolve around safety, precision, and compliance,
                ensuring the protection of your investments, your reputation,
                and, most crucially, the well-being of all stakeholders. ALSI is
                your unwavering partner, dedicated to safeguarding and
                optimizing your chemical supply chain, where safety and
                precision are non-negotiable.
              </p>
            </p>
            {/* <p className="ind-chem-parag-one">
              <a href="" className="ind-chem-learn">
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

export default IndustriesChemical;
