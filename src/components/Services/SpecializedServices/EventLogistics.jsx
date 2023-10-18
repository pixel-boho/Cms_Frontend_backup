import React from "react";
import "../../../css/ServicesCss/EventLogistics.scss";

const EventLogistics = () => {
  return (
    <div className="container-fluid event-log-start pt-2">
      <div className="row">
        <div className="col-lg-6 event-log-right">
          <div className="content-overlay">
            <h5 className="event-log-head">Event Logistics</h5>
            <p className="event-log-parag">
              <p className="event-log-parag">
              ALSI, unveils the hidden world that brings extraordinary events to life. Beyond the spotlight, every remarkable occasion is a product of unrelenting effort, precise planning, and impeccable execution. We specialize in the behind-the-scenes artistry that truly captivates the audience. In the dynamic realm of Event Logistics in Oman, ALSI is your unwavering partner. We excel in delivering seamless on-stage performances. With a well-connected network of carriers, international agents, and top-tier equipment, we ensure the efficient transport of all event-related items, ensuring the success of every event. Our track record boasts numerous remarkable events in Oman, leaving a lasting impact on audiences. Choose ALSI for an event logistics partner known for excellence, dependability, and creating unforgettable experiences. Your vision, our dedication – together, we craft memorable moments.
              </p>
            </p>
            <p className="event-log-parag-one">
              <a href="/event_logistics" className="event-log-learn">
                Learn More
                <img
                  className="spare-bi"
                  src="/images/blue-arrow-right.png"
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-6 event-log-left"></div>
      </div>
    </div>
  );
};

export default EventLogistics;
