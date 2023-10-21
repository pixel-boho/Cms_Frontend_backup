import React, { useState } from "react";
import "../../css/CareersCss/CareersHeaderUae.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const CareersHeaderUae = () => {
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
      <div className="container-fluid careers-uae-nav-bg careers-uae-quote-img">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 careers-uae-quote">
              <h1 className="careers-uae-text text-center">UAE</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row careers-uae-text-nav-pad"></div>
          <div className="row careers-uae-text-nav-pad ">
            <p className="careers-uae-text-nav-1">
              Welcome to ALSI UAE Branch, your trusted partner in navigating the
              intricate world of logistics in the United Arab Emirates. Since
              our inception, we have stood as a beacon of reliability and
              excellence in the industry. With branches established in Hatta and
              Dubai, ALSI UAE has been at the forefront of providing top-tier
              logistics solutions since 2020. Our commitment to service quality
              and customer satisfaction is exemplified by our 'Smart Workplace
              Award' from Dubai Customs in 2022. We offer a comprehensive suite
              of logistics services, including customs clearance, freight
              forwarding, and transportation, all tailored to meet your specific
              needs. Backed by our global network and affiliation with WCA and
              the FIATA Freight Network, ALSI UAE provides seamless
              international trade solutions. Whether you are a local business or
              an international corporation, our team of experts is dedicated to
              simplifying your logistics processes and ensuring your cargo
              reaches its destination efficiently and securely. Explore how ALSI
              UAE can be your logistics partner of choice, propelling your
              business forward in the dynamic UAE market.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default CareersHeaderUae;
