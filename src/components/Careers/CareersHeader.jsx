import React, { useState } from "react";
import "../../css/CareersCss/CareersHeader.scss";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const CareersHeader = () => {
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
      <div className="container-fluid careers-nav-bg careers-quote-img">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 careers-quote">
              <h1 className="careers-text text-center">Oman</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row careers-text-nav-pad"></div>
          <div className="row careers-text-nav-pad ">
            <p className="careers-text-nav-1">
              Welcome to ALSI Oman Branch, your trusted gateway to seamless
              logistics solutions in the Sultanate. Since our establishment in
              2008, ALSI Oman has consistently exemplified excellence in the
              world of logistics. We proudly hold the title of 'Best Customs
              Clearance Company' awarded by Oman Customs for consecutive years,
              reflecting our unwavering commitment to delivering top-tier
              services. With a dedicated team of over 100 professionals,
              including 60 Omani National Customs Clearance Clerks, ALSI Oman is
              not just a local service provider; we are an integral part of the
              community. Our network spans 10 strategic locations across Oman,
              ensuring that your logistics needs are met efficiently and
              effectively. We are ISO 9001:2015 certified, a testament to our
              dedication to delivering high-quality logistics solutions. As a
              registered member of WCA and the FIATA Freight Network, ALSI Oman
              offers comprehensive and globally connected logistics services.
              Whether you require customs clearance, freight forwarding, or
              transportation solutions, ALSI Oman is your reliable partner,
              committed to simplifying logistics and helping your business
              thrive in the dynamic world of international trade.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default CareersHeader;
