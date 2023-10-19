import React, { useState } from "react";
import styles from "../../css/Header.module.scss";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/GetQuote.css";
import headerImage from "../../images/Landing Page image.jpg";
const Header = () => {
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
    <div>
      <div className={`${styles["imag-first-header"]} layout-container`}>
        <div
          className={`row position-relative ${styles["header-container"]} px-4`}
        >
          <div
            className={`${styles["left-pane"]} col-lg-6`}
            style={{ zIndex: 2 }}
          >
            <div className={`${styles["text-fields"]}  py-md-5`}>
              <h2 className={styles["font-bold"]}>
                Complete Logistics <br /> Solutions
              </h2>
              <p className={styles["font-paragraph"]}>
                {" "}
                Reliable. Efficient. Seamless.
              </p>
              <div className="col-lg-9 p-0">
                <p className={styles["font-paragraph-one"]}>
                  ALSI: Your dedicated partner for comprehensive logistics
                  services and solutions. With expertise in customs clearance,
                  transportation, freight forwarding, project cargo services and
                  warehousing, we optimize your supply chain. Partner with ALSI
                  and experience hassle-free logistics that help achieve your
                  business goals.
                </p>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <a href="/about_us" className={`${styles["read-more-link"]}`}>
                  Read More
                  <img
                    style={{ width: "40px", paddingLeft: "5px" }}
                    src="/images/select-arrow.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6   ${styles["right-pane"]} `}
            style={{ zIndex: 1, height: "100%" }}
          >
            <div className="position-relative" style={{ height: "100%" }}>
              <img src={headerImage} alt="header" className="" />
            </div>
          </div>
        </div>
        <div onClick={handleModalOpen}>
          <img
            src="/images/get-a-quote.png"
            className={styles["home-quote-direct"]}
            alt=""
            style={{ top: 0 }}
          />
        </div>
        {/* Render the modal */}
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
                  <div className="col-lg-6 col-md-6 form-field3 mb-3">
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
                  <div className="col-lg-6 col-md-6 mb-3 form-field4">
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
    </div>
  );
};

export default Header;
