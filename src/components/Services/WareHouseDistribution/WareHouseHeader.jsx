import React, { useState } from "react";
import "./../../../css/ServicesCss/WareHouse/WareHouseHeader.css";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../../GetAQuote";

const WareHouseHeader = () => {
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
      <div className="container-fluid wh-serv-nav-bg wh-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <h1 className="wh-serv-text text-center">
                Warehousing and Distribution
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row wh-serv-text-nav-pad">
            <p className="text-nav">
              ALSI provides a diverse range of warehousing solutions in Oman,
              catering to both routine and intricate storage needs. Through
              strategic partnerships with accredited operators, we guarantee
              that the warehouse facilities we utilise offer the utmost in
              storage and management excellence for our clients' goods.{" "}
            </p>
          </div>
          <div className="row wh-serv-text-nav-pad pb-5">
            <p className="wh-serv-text-nav">
              ALSI provides a diverse range of warehousing solutions in Oman,
              catering to both routine and intricate storage needs. Through
              strategic partnerships with accredited operators, we guarantee
              that the warehouse facilities we utilise offer the utmost in
              storage and management excellence for our clients' goods.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default WareHouseHeader;
