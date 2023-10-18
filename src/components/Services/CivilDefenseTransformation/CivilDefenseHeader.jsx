import React from "react";
import "./../../../css/ServicesCss/CivilDefenseTransformation/CivilDefenseHeader.css";

const CivilDefenseHeader = () => {
  return (
    <>
      <div className="container-fluid cdt-serv-nav-bg cdt-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <a href="">
                <img src="/images/get-a-quote.png"></img>
              </a>
              <h1 className="cdt-serv-text text-center">
                Civil Defense Approved Transportation
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row cdt-serv-text-nav-pad">
            <p className="text-nav">
              In the world of logistics, the safe and compliant transport of
              critical materials and goods is paramount. When it comes to
              sensitive cargo, particularly in the Aviation and Defense
              industry, the stakes are even higher. This is where ALSI steps in
              as your trusted partner, offering innovative and tailored
              solutions that meet the unique supply chain needs of this
              industry.{" "}
            </p>
          </div>
          <div className="row cdt-serv-text-nav-pad pb-5">
            <p className="cdt-serv-text-nav">
              With years of experience and a seasoned team of industry experts,
              ALSI is well-equipped to handle the intricacies of Civil Defense
              Approved Transportation. We understand that each movement of
              critical goods requires meticulous planning, adherence to safety
              standards, and absolute compliance with regulations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CivilDefenseHeader;
