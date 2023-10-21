import React, { useState } from "react";
import "../../css/CareersCss/CareersHeaderQatar.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const CareersHeaderQatar = () => {
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
      <div className="container-fluid careers-qatar-nav-bg careers-qatar-quote-img">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 careers-qatar-quote">
              <h1 className="careers-qatar-text text-center">Qatar</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row careers-qatar-text-nav-pad"></div>
          <div className="row careers-qatar-text-nav-pad ">
            <p className="careers-qatar-text-nav-1">
              Welcome to ALSI Qatar Branch, your trusted logistics partner in
              the heart of the Arabian Gulf. Our journey in Qatar began in 2022,
              and since then, we have been dedicated to simplifying and
              optimising logistics solutions for businesses in the region. At
              ALSI Qatar, we understand the importance of efficiency and
              reliability in the fast-paced world of trade. As an extension of
              ALSI's global network and with our affiliation with WCA and the
              FIATA Freight Network, we offer a comprehensive range of logistics
              services, including customs clearance, freight forwarding, and
              transportation, all designed to meet your unique requirements. Our
              commitment to excellence is exemplified by our industry
              recognition and our pursuit of the highest service standards. We
              take pride in holding our own customs broker license in Qatar,
              ensuring swift and reliable customs clearance. Whether you are a
              local enterprise or an international corporation, ALSI Qatar is
              your go-to partner for seamless logistics operations. We look
              forward to working with you, supporting your business, and
              simplifying logistics to drive success in the vibrant Qatari
              market.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default CareersHeaderQatar;
