import React, { useState } from "react";
import "./../../../css/ServicesCss/AeroSpace/AeroSpaceHeader.css";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/Modal.module.scss";

const AeroSpaceHeader = () => {
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
      <div className="container-fluid aspace-serv-nav-bg aspace-serv-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12 quote">
              <div onClick={handleModalOpen}>
                <img src="./images/get-a-quote.png" alt="Get a Quote" />
              </div>
              <h1 className="aspace-serv-text text-center">Aerospace</h1>
            </div>
          </div>
        </div>
        <Modal show={showModal} handleClose={handleModalClose}>
          {!formSubmitted ? (
            // Display the form if it has not been submitted
            <div className="container-fluid container-g-q">
              <form className="form-container-g-q" onSubmit={handleSubmit}>
                <div className="row">
                  <h4
                    style={{
                      color: "white",
                      padding: "25px",
                      fontWeight: "800",
                    }}
                  >
                    Get a Quote
                  </h4>
                  {/* Name */}
                  <div className="col-lg-6 col-md-6 mb-3">
                    <label htmlFor="name" className="form-label-g-q">
                      Name*
                    </label>
                    <input
                      type="text"
                      className="form-control-g-q transparent-input-g-q"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter first and last name"
                      required
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="col-lg-6 col-md-6 mb-3">
                    <label htmlFor="phonenumber" className="form-label-g-q">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      className="form-control-g-q transparent-input-g-q"
                      id="phonenumber"
                      name="phonenumber"
                      value={formData.phonenumber}
                      onChange={handleInputChange}
                      placeholder="Eg. 123-456-7890"
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 mb-3">
                    <label htmlFor="email" className="form-label-g-q">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="form-control-g-q transparent-input-g-q"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Eg. youremail@example.com"
                      required
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="row pb-4 gq-textarea">
                  <div className="col-lg-12 col-md-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label-g-q">
                        Message*
                      </label>
                      <textarea
                        className="form-control-g-q transparent-input-g-q"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-custom-g-q"
                    >
                      Get A Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            // Display a thank you message if the form has been submitted
            <div className="thank-you-message">
              <h4
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: 800,
                  padding: "30px 10px 30px 10px",
                }}
              >
                Thank you for your enquiry!
              </h4>
            </div>
          )}
        </Modal>
      </div>

      <div className="container-fluid">
        <div className="col-lg-12 pt-4">
          <div className="row aspace-serv-text-nav-pad">
            <p className="text-nav">
              The Aviation and Defense industry has distinct supply chain needs,
              and ALSI is your trusted partner for innovative solutions. With
              our expert team and extensive global network, we deliver
              high-quality, customised, and dependable logistics solutions
              tailored to meet industry requirements.{" "}
            </p>
          </div>
          <div className="row aspace-serv-text-nav-pad pb-5">
            <p className="aspace-serv-text-nav">
              ALSI is steadfast in its commitment to serving as a flexible,
              value-added logistics partner for the aviation and defence
              industry. We understand the industry's distinctive needs and
              challenges, and we seamlessly integrate logistics, transportation
              management, and information monitoring in strict accordance with
              aviation and defence requirements. Our aim is to deliver
              competitive logistics solutions that optimise the industry's
              supply chain, whether our client is a global aviation and defence
              giant or a local firm. Our end-to-end integrated solutions are
              designed to enhance the supply chain from procurement to
              distribution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AeroSpaceHeader;
