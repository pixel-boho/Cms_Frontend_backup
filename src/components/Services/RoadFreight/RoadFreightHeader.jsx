import React, { useState } from "react";
import "./../../../css/ServicesCss/RoadFreight/RoadFreightHeader.css";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../../GetAQuote";

const RoadFreightHeader = () => {
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
      <div className="container-fluid rf-serv-nav-bg rf-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <h1 className="rf-serv-text text-center">Road Freight</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row rf-serv-text-nav-pad">
            <p className="text-nav">
              ALSI delivers secure, flexible, and timely domestic and
              cross-border road freight services, precisely tailored to meet our
              clients' unique requirements. Our extensive range of road freight
              solutions, combined with our own fleet and a network of approved
              operators, ensures the safe and efficient transport of cargo, from
              single pallets to full truckloads.{" "}
            </p>
          </div>
          <div className="row rf-serv-text-nav-pad pb-5">
            <p className="rf-serv-text-nav">
              We excel in providing frequent and scheduled departures,
              delivering top-notch, cost-effective solutions for the
              transportation of partial and full loads within domestic and GCC
              regions for cross-border logistics. Leveraging our local
              expertise, we meticulously plan the most economical routes for
              your cargo. As part of our unwavering commitment to exceptional
              customer service, our dedicated professionals keep you informed
              with timely updates on your shipment's progress, ensuring a smooth
              door-to-door experience.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default RoadFreightHeader;
