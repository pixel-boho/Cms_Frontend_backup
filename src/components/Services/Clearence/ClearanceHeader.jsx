import React, { useState } from "react";
import "./../../../css/ServicesCss/Clearance/ClearanceHeader.css";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../../GetAQuote";

const ClearanceHeader = () => {
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
      <div className="container-fluid cc-serv-nav-bg cc-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <h1 className="cc-serv-text text-center">Customs Clearance</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row cc-serv-text-nav-pad">
            <p className="text-nav">
              ALSI offers nationwide customs clearance services for air, ocean,
              and road freight shipments. As a leading customs clearance
              provider in Oman, we consistently deliver reliable and compliant
              services. Our experienced team ensures swift and efficient customs
              clearance through online systems and at the entry ports. We
              specialise in expediting even the most complex shipments,
              guaranteeing a seamless customs clearance process for our clients.{" "}
            </p>
          </div>
          <div className="row cc-serv-text-nav-pad pb-5">
            <p className="cc-serv-text-nav">
              ALSI's dedicated offices at border crossings, seaports, and
              airports, operating round-the-clock, guarantee timely clearance of
              shipments, minimising unnecessary delays and demurrages. Our
              extensive expertise in duty exemptions and temporary clearance
              options enables us to maximise client savings. Compliance is not
              an extra service; it's an integral part of our company culture and
              operations, ultimately benefiting our clients. We are unwavering
              in our commitment to delivering comprehensive and
              compliance-focused customs clearance services and solutions to our
              valued clients.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default ClearanceHeader;
