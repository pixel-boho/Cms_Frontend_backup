import React, { useState, useEffect } from "react";
import "./../../css/BlogDedicatedCss/FirstBlogHeader.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const FirstBlogHeader = () => {
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
      <div className="container-fluid firsts-blog-nav-bg firsts-blog-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12">
              <h1 className="firsts-blog-text text-center">
                How GCC free trade zones can help businesses simplify customs
                clearance?
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
                  <a
                    href="https://twitter.com/ALSI_OFFICIAL"
                    className="icon-link-c-h"
                  >
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/twitter-white.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/alsi-official/"
                    className="icon-link-c-h"
                  >
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/linkedin-white.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/alsiformarineservices_official/"
                    className="icon-link-c-h"
                  >
                    <img
                      className="bi-custom-bi-ch"
                      src="/images/instagram-white.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/alsimarineservice"
                    className="icon-link-c-h"
                  >
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
      </div>

      <div className="container-custom mx-auto">
        <div className="row ">
          <div className="col-lg-12 firsts-blog-txt-pad px-4">
            <p className="firsts-blog-text-nav">
              The customs laws in GCC Free Trade Zones are typically more
              liberal compared to non-FTZ areas.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default FirstBlogHeader;
