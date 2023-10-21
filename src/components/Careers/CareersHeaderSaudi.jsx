import React, { useState } from "react";
import "../../css/CareersCss/CareersHeaderSaudi.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const CareersHeaderSaudi = () => {
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
      <div className="container-fluid careers-saudi-nav-bg careers-saudi-quote-img">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 careers-saudi-quote">
              <h1 className="careers-saudi-text text-center">Saudi Arabia</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row careers-saudi-text-nav-pad"></div>
          <div className="row careers-saudi-text-nav-pad ">
            <p className="careers-saudi-text-nav-1">
              Welcome to ALSI Saudi Arabia Branch, your trusted logistics
              partner in the Kingdom of Saudi Arabia. Our presence in Saudi
              Arabia, established in 2022, marks our commitment to delivering
              top-notch logistics services to this dynamic market. ALSI Saudi
              Arabia is driven by a mission to simplify logistics, emphasising
              reliability, efficiency, and seamlessness in every operation. As a
              member of ALSI's global network and an affiliate of WCA and the
              FIATA Freight Network, we provide comprehensive logistics
              solutions, including customs clearance, freight forwarding, and
              transportation, tailored to meet your unique needs. Our dedication
              to excellence is underlined by our pursuit of industry recognition
              and our commitment to providing the highest service standards.
              What sets us apart is our agility and our own customs broker
              licence in Saudi Arabia, ensuring a swift and smooth customs
              clearance process. Whether you are a local business or an
              international corporation, ALSI Saudi Arabia stands ready to
              optimise your logistics, simplify your operations, and fuel your
              success in the thriving Saudi market.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default CareersHeaderSaudi;
