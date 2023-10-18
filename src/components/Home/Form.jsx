import React, { useState } from "react";
import "./../../css/Form.scss";

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your form submission logic.
    // For example, send the form data to the server.

    // Assuming the form submission is successful, update the state to show the thank you message.
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="container-fluid split-form-container">
        <div className="split-form-image"></div>
        {isSubmitted ? (
          <div className="thank-you-message-main-form split-form">
            <h3
              className="thank-you-message-main-form-one ZoomIn"
              style={{ color: "#fff", fontWeight: "800", paddingTop: "50px" }}
            >
              Thank you for submitting your enquiry!
            </h3>
          </div>
        ) : (
          <div className="split-form">
            <h2>How can</h2>
            <h4 className="split-first-head">We Help You?</h4>
            <form className="form-market" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control transparent-input"
                  id="name"
                  name="name"
                  style={{ color: "white" }}
                  placeholder="Enter first and last name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control transparent-input"
                  id="email"
                  name="email"
                  style={{ color: "white" }}
                  placeholder="Eg. youremail@email.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label">
                  Phone Number*
                </label>
                <input
                  type="text"
                  className="form-control transparent-input"
                  id="phonenumber"
                  name="phonenumber"
                  style={{ color: "white" }}
                  placeholder="Enter 10-digit mobile number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message*
                </label>
                <textarea
                  style={{ minHeight: "150px", color: "white" }}
                  className="form-control transparent-input"
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-custom">
                Get A Quote
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
