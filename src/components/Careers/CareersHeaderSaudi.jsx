import React, { useState } from "react";
import "../../css/CareersCss/CareersHeaderSaudi.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";

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
              <div onClick={handleModalOpen}>
                <img src="./images/get-a-quote.png" alt="Get a Quote" />
              </div>
              <h1 className="careers-saudi-text text-center">Saudi Arabia</h1>
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
    </>
  );
};

export default CareersHeaderSaudi;
