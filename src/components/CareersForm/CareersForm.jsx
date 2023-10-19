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
          <div className="container-fluid contact-us-split-form-container">
            <div className="row">
              <div className="col-lg-6 contact-us-arrange">
                <h1 className="contact-us-heads">Let's connect and talk</h1>
                <p className="contact-us-paragh">
                  We're eager to hear from you! At ALSI, we value open
                  communication...
                </p>
              </div>
              <div className="col-lg-6 contact-us-split-form">
                {isSubmitted ? (
                  <div
                    className="thank-you-message-main-form split-form"
                    style={{ borderRadius: "5%" }}
                  >
                    <h3
                      className="thank-you-message-main-form-one ZoomIn"
                      style={{
                        color: "#fff",
                        fontWeight: "800",
                        paddingTop: "50px",
                        borderRadius: "10px",
                      }}
                    >
                      Thank you for submitting your enquiry!
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="contact-us-form-label">
                        Name*
                      </label>
                      <br />
                      <input
                        type="text"
                        className="contact-us-form-control contact-us-transparent-input"
                        id="name"
                        name="name"
                        placeholder="Enter first and last name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="contact-us-form-label">
                        Email*
                      </label>
                      <br />
                      <input
                        type="email"
                        className="contact-us-form-control contact-us-transparent-input"
                        id="email"
                        name="email"
                        placeholder="Eg. youremail@email.com"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="phonenumber"
                        className="contact-us-form-label"
                      >
                        Phone Number*
                      </label>
                      <br />
                      <input
                        type="text"
                        className="contact-us-form-control contact-us-transparent-input"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Enter 10-digit mobile number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="contact-us-form-label"
                      >
                        Message*
                      </label>
                      <br />
                      <textarea
                        className="contact-us-form-control contact-us-transparent-input"
                        id="message"
                        name="message"
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        name="file"
                        class="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <button
                      type="submit"
                      className="contact-us-btn btn-primary contact-us-btn-custom"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CareersForm;
