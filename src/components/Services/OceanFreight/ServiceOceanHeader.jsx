import React, { useState } from "react";
import "./../../../css/ServicesCss/ServiceOceanHeader.scss";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../../GetAQuote";

const ServiceOceanHeader = () => {
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
      <div className="container-fluid ocean-nav-bg ocean-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <h1 className="ocean-text text-center">Ocean Freight</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row ocean-text-nav-pad">
            <p className="text-nav">
              At ALSI, we offer comprehensive global ocean freight services,
              adeptly managing both Full Container Load (FCL) and Less than
              Container Load (LCL) shipments. This solution presents a
              cost-effective means for international goods transportation,
              particularly well-suited for accommodating large, bulkier, or less
              time-sensitive consignments. Ocean freight stands as the preferred
              choice for a multitude of our clients when shipping goods
              overseas, owing to its cost-effective pricing structure. In
              contrast to air freight, opting for sea transport yields
              substantial cost savings, all while ensuring respectable transit
              times.{" "}
            </p>
          </div>
          <div className="row ocean-text-nav-pad pb-5">
            <p className="ocean-text-nav">
              We provide adaptable sailing schedules for both LCL and FCL cargo,
              utilising renowned ocean carriers, NVOCCs, and consolidators. Our
              overseas network is strategically balanced, allowing us to
              leverage our strong carrier relationships and offer tailored
              solutions to meet our clients' specific needs.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default ServiceOceanHeader;
