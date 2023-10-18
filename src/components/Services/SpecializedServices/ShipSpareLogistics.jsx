import React from "react";
import "../../../css/ServicesCss/ShipSpareLogistics.scss";

const ShipSpareLogistics = () => {
  return (
    <div className="container-fluid ship-spare-start pt-3">
      <div className="row">
        <div className="col-lg-6 spare-left"></div>
        <div className="col-lg-6 spare-right">
          <div className="content-overlay">
            <h5 className="spare-head">Ship Spare Logistics</h5>
            <p className="spare-parag">
              <p className="spare-parag">
              ALSI offers a global 'door-to-deck' delivery service tailored for ship spares and marine parts. Our experts seamlessly blend local knowledge with a vast global freight network to ensure spares reach your vessel on time. Sourcing vessel spare parts can be challenging due to uncertain schedules and scattered sourcing locations. Whether you manage a fleet or a dock, timely spare part delivery is vital. Our seasoned operations specialists excel in delivering swift, cost-effective, and reliable shipping solutions for vessel repair and maintenance. We meticulously select transport modes that suit your timing and cost considerations. Our dedicated team takes full responsibility for your shipment until successful delivery. With offices strategically located at Oman's primary ports - Sohar, Duqm, and Salalah - we guarantee smooth handling and on-time delivery, even for the most time-sensitive shipments.
              </p>
            </p>
            <p className="spare-parag-one">
              <a href="/ship_spare_logistics" className="spare-learn">
                Learn More
                <img
                  className="spare-bi"
                  src="/images/right-arrow-fir.png"
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipSpareLogistics;
