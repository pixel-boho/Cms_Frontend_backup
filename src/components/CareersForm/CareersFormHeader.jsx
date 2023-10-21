import React, { useState } from "react";
import "../../css/CareersFormCss/CareersFormHeader.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const CareersFormHeader = () => {
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
      <div className="container-fluid careers-form-header-page-nav-bg careers-form-header-page-quote-img">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 careers-form-header-page-quote">
              <h1 className="careers-form-header-page-text text-center">
                Careers
              </h1>
            </div>
          </div>
        </div>
        {/* Render the modal */}
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 col-sm col-md "></div>
      </div>
      <GetAQuote />
    </>
  );
};

export default CareersFormHeader;
