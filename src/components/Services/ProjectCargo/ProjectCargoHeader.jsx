import React, { useState } from "react";
import "./../../../css/ServicesCss/ProjectCargo/ProjectCargoHeader.css";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../../GetAQuote";

const ProjectCargoHeader = () => {
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
      <div className="container-fluid pc-serv-nav-bg pc-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <h1 className="pc-serv-text text-center">
                Project Cargo Services
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row pc-serv-text-nav-pad">
            <p className="text-nav">
              ALSI stands out as the expert in heavy lift and oversized cargo
              transportation, providing adaptable multimodal solutions. Our
              proficiency in integrated logistics project management and turnkey
              project transport services guarantees the secure and efficient
              movement of your cargo.{" "}
            </p>
          </div>
          <div className="row pc-serv-text-nav-pad pb-5">
            <p className="pc-serv-text-nav">
              Managing heavy lift projects demands exceptional expertise,
              meticulous care, and an unwavering attention to detail. At ALSI,
              we have established a formidable reputation in project cargo
              logistics and heavy lift shipments. Our dedicated team possesses
              an in-depth understanding of handling project cargoes, liaising
              with carriers, navigating ports, customs procedures, and
              coordinating with heavy lift trucking companies. Over the years,
              we have successfully managed numerous high-value project
              movements, consistently surpassing our customers' expectations.
              Our team of experts is committed to delivering project cargo
              safely, eliminating potential shipping risks, and optimising costs
              through meticulous project planning and execution.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default ProjectCargoHeader;
