import React, { useState } from "react";
import "./../../css/CareersFormCss/CareersForm.css";

const CareersForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your form submission logic.
    // For example, send the form data to the server.

    // Assuming the form submission is successful, update the state to show the thank you message.
    setIsSubmitted(true);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className="container-fluid split-form-container">
        <div className="split-form-image-career"></div>
        {isSubmitted ? (
          <div className="thank-you-message-main-form split-form-career">
            <h3
              className="thank-you-message-main-form-one ZoomIn"
              style={{ color: "#fff", fontWeight: "800", paddingTop: "50px" }}
            >
              Thank you for submitting your enquiry!
            </h3>
          </div>
        ) : (
          <div className="split-form-career">
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
              <div className="form-label-career-choose">
                <h6>Choose File Example</h6>
                <input type="file" onChange={handleFileChange} />
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
              </div>
              <div className="submit-careers-botton pb-3">
                <button type="submit" className="btn btn-primary btn-custom ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default CareersForm;
