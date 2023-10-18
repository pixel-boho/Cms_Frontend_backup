import React from "react";
import "./../../../css/ServicesCss/EventLogistics/EventLogisticsHeader.css";

const EventLogisticsHeader = () => {
  return (
    <>
      <div className="container-fluid el-serv-nav-bg el-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <a href="">
                <img src="/images/get-a-quote.png"></img>
              </a>
              <h1 className="el-serv-text text-center">Event Logistics</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row el-serv-text-nav-pad">
            <p className="text-nav">
              Behind every captivating event, there lies a hidden world of
              relentless effort, precise planning, and flawless execution. It's
              the backstage magic that truly dazzles the audience. From stage
              setup to orchestrating all the necessary logistics, a multitude of
              tasks happen before an event can unfold its grandeur. ALSI, a
              leading Event Logistics company in Oman, has been the driving
              force behind numerous remarkable events in the country, offering
              unwavering support in creating memorable shows that leave a
              lasting impact on the audience.{" "}
            </p>
          </div>
          <div className="row el-serv-text-nav-pad pb-5">
            <p className="el-serv-text-nav">
              Event Logistics in Oman is a dynamic, high-demand field that
              demands resourcefulness to execute on-stage performances
              seamlessly, and this is where ALSI truly shines. With a proficient
              network of carriers, international agents, and the right
              equipment, we efficiently transport all event-related equipment
              and items, ensuring the success of every event, without fail.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventLogisticsHeader;
