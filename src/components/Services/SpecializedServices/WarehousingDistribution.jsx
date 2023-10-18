import React from "react";
import "../../../css/ServicesCss/WarehousingDistribution.scss";

const WarehousingDistribution = () => {
  return (
    <div className="container-fluid warehouse-start pt-2">
      <div className="row">
        <div className="col-lg-6 warehouse-left"></div>
        <div className="col-lg-6 warehouse-right">
          <div className="content-overlay">
            <h5 className="warehouse-head">Warehousing & Distribution</h5>
            <p className="warehouse-parag">
              <p className="warehouse-parag">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </p>
            <p className="warehouse-parag-one">
              <a href="" className="warehouse-learn">
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

export default WarehousingDistribution;
