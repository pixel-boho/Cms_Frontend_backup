import React from "react";
import "./../../../css/ServicesCss/ShipSpare/ShipSpareHeader.css";

const ShipSpareHeader = () => {
  return (
    <>
      <div className="container-fluid ss-logs-nav-bg ss-logs-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <a href="">
                <img src="/images/get-a-quote.png"></img>
              </a>
              <h1 className="ss-logs-text text-center">Ship Spare Logistics</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row ss-logs-text-nav-pad">
            <p className="text-nav">
              ALSI extends ship owners and management companies a global
              'door-to-deck' delivery service tailored for ship spares and
              marine parts. Our specialised service seamlessly integrates our
              local knowledge with our expansive global freight network,
              ensuring the on-time delivery of spares directly on-board your
              vessel.{" "}
            </p>
          </div>
          <div className="row ss-logs-text-nav-pad pb-5">
            <p className="ss-logs-text-nav">
              Sourcing vessel spare parts poses a significant challenge,
              especially given the uncertainties of vessel schedules and the
              global dispersion of sourcing locations. Whether managing a fleet
              or overseeing a dock, the timely and dependable delivery of spare
              parts is paramount to the business. Our seasoned operations
              specialists excel in delivering swift end-to-end solutions,
              ensuring cost-effective and reliable shipping of parts for vessel
              repair and maintenance.
            </p>

            <p className="ss-logs-text-nav">
              We meticulously choose the most suitable transport modes that
              align with our clients' timing and cost considerations. Our
              dedicated team takes full responsibility for your shipment until
              it's successfully delivered. With strategically positioned offices
              at Oman's primary ports—Sohar, Duqm, and Salalah—we guarantee
              smooth handling and on-time delivery for even the most
              time-sensitive shipments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipSpareHeader;
