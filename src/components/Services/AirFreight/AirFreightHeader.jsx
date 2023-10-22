import React, { useState } from "react";
import "./../../../css/ServicesCss/AirFreight/AirFreightHeader.css";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../../GetAQuote";

const AirFreightHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Reset form data and formSubmitted state when modal is closed
    setFormData({
      name: "",
      phonenumber: "",
      email: "",
      message: "",
    });
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // After successful form submission, setFormSubmitted(true);
    // For example purposes, let's assume the form submission is successful
    setFormSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="container-fluid air-f-serv-nav-bg air-f-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <h1 className="air-f-serv-text text-center">Air Freight</h1>
            </div>
          </div>
        </div>
        
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row air-f-serv-text-nav-pad">
            <p className="text-nav">
              ALSI specialises in international air freight services, perfect
              for time-sensitive consignments. With a global reach through
              various freight networks, we collaborate with top airline carriers
              and consolidators to deliver comprehensive air freight solutions.
              Whether you require swift export or import services, we offer Door
              to Airport and Door to Door solutions. From individual packages to
              multi-pallet shipments, our integrated, tailored, and
              cost-effective air freight services ensure seamless solutions for
              your needs.{" "}
            </p>
          </div>
          <div className="row air-f-serv-text-nav-pad pb-5">
            <p className="air-f-serv-text-nav">
              We comprehend the paramount significance of urgency and precision
              within the realm of air freight services. Our ability to access
              capacity precisely when it's required ensures we can accommodate
              the transportation of all types of cargo, whether it's oversized,
              hazardous, or high-value goods.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default AirFreightHeader;
