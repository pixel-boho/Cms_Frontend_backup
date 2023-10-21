import React, { useState } from "react";
import "../../css/ContactCss/ContactUsHeader.scss";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const ContactUs = () => {
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
      <div className="container-fluid contact-us-nav-bg contact-us-quote-img">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 contact-us-quote">
              <h1 className="contact-us-text text-center">Contact Us</h1>

              <p className="contact-us-text1 text-center"></p>
            </div>
          </div>
        </div>
      </div>
      <GetAQuote/>
    </>
  );
};

export default ContactUs;
