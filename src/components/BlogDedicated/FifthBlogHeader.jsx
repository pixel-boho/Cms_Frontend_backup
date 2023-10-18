import React, { useState, useEffect } from "react";
import "./../../css/BlogDedicatedCss/FifthBlogHeader.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";

const FifthBlogHeader = () => {
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
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    function displayCurrentDateTime() {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const dateTimeString = now.toLocaleDateString(undefined, options);
      setCurrentDateTime(dateTimeString);
    }
    displayCurrentDateTime();
  }, []);
  return (
    <>
      <div className="container-fluid fifthss-blog-nav-bg fifthss-blog-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12">
              <div onClick={handleModalOpen}>
                {/* <img src="./images/get-a-quote.png" alt="Get a Quote" /> */}
              </div>
              <h1 className="fifthss-blog-text text-center">
                The future outlook for event and exhibition logistics in GCC,{" "}
                <br />
                including the potential for growth and development
              </h1>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 date-time-fix">
                  <p className="format-date-icons">{currentDateTime}</p>
                </div>
                <div className="col-lg-6 date-fixx-icon">
                  <a href="#" className="icon-link-c-h">
                    <img
                      className="bi-custom-bi-ch"
                      src="images/more-icon-white.png"
                      alt=""
                    />
                  </a>
                  <a href="#" className="icon-link-c-h">
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/link-white.png"
                      alt=""
                    />
                  </a>
                  <a href="https://twitter.com/ALSI_OFFICIAL" className="icon-link-c-h">
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/twitter-white.png"
                      alt=""
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/alsi-official/" className="icon-link-c-h">
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/linkedin-white.png"
                      alt=""
                    />
                  </a>
                  <a href="https://www.instagram.com/alsiformarineservices_official/" className="icon-link-c-h">
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/instagram-white.png"
                      alt=""
                    />
                  </a>
                  <a href="https://www.facebook.com/alsimarineservice" className="icon-link-c-h">
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/facebook-white.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
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
        <div className="col-lg-12 fifthss-blog-txt-pad">
          <div className="row fifthss-blog-text-nav-pad">
            <p className="fifthss-blog-text-nav">
            The GCC region is rapidly becoming an important hub for events and exhibitions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthBlogHeader;
