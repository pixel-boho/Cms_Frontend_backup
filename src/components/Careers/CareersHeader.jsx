import React, { useState } from "react";
import "../../css/CareersCss/CareersHeader.scss";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";

const CareersHeader = () => {
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
      <div className="container-fluid careers-nav-bg careers-quote-img">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 careers-quote">
              <div onClick={handleModalOpen}>
                <img src="./images/get-a-quote.png" alt="Get a Quote" />
              </div>
              <h1 className="careers-text text-center">Oman</h1>
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
          <div className="row careers-text-nav-pad"></div>
          <div className="row careers-text-nav-pad ">
            <p className="careers-text-nav-1">
              Welcome to ALSI Oman Branch, your trusted gateway to seamless
              logistics solutions in the Sultanate. Since our establishment in
              2008, ALSI Oman has consistently exemplified excellence in the
              world of logistics. We proudly hold the title of 'Best Customs
              Clearance Company' awarded by Oman Customs for consecutive years,
              reflecting our unwavering commitment to delivering top-tier
              services. With a dedicated team of over 100 professionals,
              including 60 Omani National Customs Clearance Clerks, ALSI Oman is
              not just a local service provider; we are an integral part of the
              community. Our network spans 10 strategic locations across Oman,
              ensuring that your logistics needs are met efficiently and
              effectively. We are ISO 9001:2015 certified, a testament to our
              dedication to delivering high-quality logistics solutions. As a
              registered member of WCA and the FIATA Freight Network, ALSI Oman
              offers comprehensive and globally connected logistics services.
              Whether you require customs clearance, freight forwarding, or
              transportation solutions, ALSI Oman is your reliable partner,
              committed to simplifying logistics and helping your business
              thrive in the dynamic world of international trade.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersHeader;
