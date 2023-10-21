import React, { useState, useEffect } from "react";
import "./../../css/BlogDedicatedCss/ThirdBlogHeader.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/Modal.module.scss";
import GetAQuote from "../GetAQuote";

const ThirdBlogHeader = () => {
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
      <div className="container-fluid thirdss-blog-nav-bg thirdss-blog-quote-img">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-12">
              <h1 className="thirdss-blog-text text-center">
                The impact of UAE-Oman transportation on trade and
                <br /> commerce to driving economic growth
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

      <div className="container-fluid">
        <div className="col-lg-12 thirdss-blog-txt-pad px-4">
          <div className="row thirdss-blog-text-nav-pad">
            <p className="thirdss-blog-text-nav">
              Efficient transportation links between the two countries have
              opened up new opportunities for businesses looking to expand their
              operations.
            </p>
          </div>
        </div>
      </div>
      <GetAQuote />
    </>
  );
};

export default ThirdBlogHeader;
