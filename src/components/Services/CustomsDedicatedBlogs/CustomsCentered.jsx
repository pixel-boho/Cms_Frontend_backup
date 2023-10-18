import React, { useState } from "react";
import "./../../../css/ServicesCss/CustomsCenter.scss";
import Modal from "./../../Modal/Modal";
import "./../../../css/ModalCss/GetQuote.css";

const CustomsCentered = () => {
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
    <div className="container-fluid careers-firs">
      <div className="row">
        <div className="col-lg-7 recent-top-pad">
          <div className="row">
            <div className="col-lg">
              <p className="centered-clr-text">
                When it comes to international trade and business operations,
                efficient and compliant customs clearance is crucial. For
                businesses operating in Oman, understanding the customs
                clearance process is a necessity to avoid penalties, ensure
                compliance, and navigate potential pitfalls. In this
                comprehensive guide, brought to you by ALSI in Oman, we’ll walk
                you through the ins and outs of customs clearance in Oman,
                providing valuable insights and tips to help your business
                thrive.
              </p>
              <img
                src="/images/Careers/Smoothsailingthroughone.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <h6 className="blog-compliance">
                THE SIGNIFICANCE OF CUSTOM CLEARANCE IN OMAN
              </h6>
              <p className="centered-clr-text">
                Customs clearance is the process through which goods are allowed
                to enter or exit a country legally. In Oman, as in many other
                countries, it plays a pivotal role in facilitating trade and
                ensuring that businesses adhere to all regulations. Here’s why
                custom clearance in Oman should be a top priority for your
                business:
              </p>

              <h6 className="blog-compliance">
                1. Compliance with Regulations
              </h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Customs regulations in Oman are strict, and non-compliance can
                  result in substantial penalties. Ensuring your business
                  adheres to these regulations is paramount to avoid legal
                  repercussions.
                </p>{" "}
              </i>

              <h6 className="blog-compliance">2. Timely Movement of Goods</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Efficient customs clearance allows for the timely movement of
                  goods, preventing delays in your supply chain and keeping your
                  business operations on track.
                </p>
              </i>

              <h6 className="blog-compliance">3. Cost Savings</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Properly managing customs clearance can lead to cost savings,
                  as it helps avoid unnecessary fines and penalties.
                </p>
              </i>

              <img
                src="/images/Careers/SmoothTwo.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />

              <h6 className="blog-compliance">
                THE CUSTOM CLEARANCE PROCESS IN OMAN
              </h6>
              <p className="centered-clr-text">
                Navigating the customs clearance process in Oman can be complex,
                but understanding the key steps can make it smoother:
              </p>

              <h6 className="blog-compliance">1. Documentation</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Accurate and complete documentation is the foundation of
                  successful customs clearance. Ensure all required documents
                  are in order, including invoices, packing lists, and
                  certificates of origin.
                </p>
              </i>

              <h6 className="blog-compliance">2. Customs Duties and Tariff</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Understanding customs duties and tariffs is essential.
                </p>
              </i>

              <h6 className="blog-compliance">3. Clearance Declaration</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Submit a customs declaration accurately, describing the goods,
                  their value, and origin. Any discrepancies can lead to delays
                  and penalties.
                </p>
              </i>

              <h6 className="blog-compliance">4. Inspections</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Customs authorities may inspect your goods to ensure they
                  match the provided documentation. Cooperate fully to expedite
                  the process.
                </p>
              </i>

              <h6 className="blog-compliance">
                5. Payment of Duties and Taxes
              </h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Pay any applicable customs duties and taxes promptly to avoid
                  delays and legal issues.
                </p>
              </i>

              <h6 className="blog-compliance">6. Release of Goods</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Once customs authorities are satisfied, your goods will be
                  released for further distribution.
                </p>
              </i>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <img
                src="/images/Careers/SmoothThree.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />
              <h6 className="blog-compliance">
                COMMON PITFALLS AND HOW TO AVOID THEM
              </h6>
              <p className="centered-clr-text">
                Navigating customs clearance in Oman isn’t without its
                challenges. Here are some common pitfalls and tips on how to
                avoid them:
              </p>

              <h6 className="blog-compliance">1. Incomplete Documentation</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Ensure all required documents are complete and accurate to
                  prevent delays.
                </p>
              </i>

              <h6 className="blog-compliance">2. Misclassification of Goods</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Properly classify your goods to avoid disputes and penalties.
                </p>
              </i>

              <h6 className="blog-compliance">3. Lack of Knowledge</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Stay informed about Oman’s customs regulations and consult
                  with experts when needed.
                </p>
              </i>

              <h6 className="blog-compliance">4. Late Payment of Duties</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                •
                <p className="blog-compliance-p">
                  Pay customs duties and taxes promptly to prevent storage
                  charges and delays.
                </p>
              </i>

              <div className="link-quote-font">
                <div
                  style={{ textDecoration: "none" }}
                  onClick={handleModalOpen}
                  className="centered-get-quotes-font"
                >
                  Get A Quote
                </div>
              </div>
              <Modal show={showModal} handleClose={handleModalClose}>
                {!formSubmitted ? (
                  // Display the form if it has not been submitted
                  <div className="container-fluid container-g-q">
                    <form
                      className="form-container-g-q"
                      onSubmit={handleSubmit}
                    >
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
                          <label
                            htmlFor="phonenumber"
                            className="form-label-g-q"
                          >
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
        </div>

        <div className="col-lg-4 recent-clr-bg">
          <div className="row">
            <div className="col-lg">
              <h5 className="recent-head" style={{ fontWeight: "800" }}>
                Recent Posts
              </h5>
              <img
                src="/images/BlogBanner/BlogTwoRecent.png"
                className="recent-image-pad"
                alt="Recent Post Image"
              />
              <h6 className="recent-head-one">
                How GCC Free Trade Zones can Help Business Simplify Customs
                Clearance?
              </h6>
              <p className="recent-parag">
                In today’s competitive business environment, operational
                efficiency and streamlining processes are of paramount
                importance. One of the regions that has embraced this
                perspective with open arms is the Gulf Cooperation Council
                (GCC), particularly with the introduction and expansion of Free
                Trade Zones (FTZs). A fundamental area that stands to benefit
                immensely from these FTZs is the realm of customs clearance.
                Through optimising Free Trade Zone Customs Procedures,
                businesses can enjoy smoother transitions, reduced costs, and
                quicker turnaround times. This article delves into the free
                trade zone customs procedures in GCC countries, focusing on
                Oman, Qatar, and Dubai, and how companies can benefit from them.
              </p>
              <a
                href=""
                className="recent-read"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <img
                src="/images/BlogBanner/BlogThreeRecent.png"
                className="recent-image-pad"
                alt="Recent Post Image"
              />
              <h6 className="recent-head-one">
                The digital transformation of customs clearance and how
                technology is transforming the process
              </h6>
              <p className="recent-parag">
                Customs clearance is essential to ensure the smooth flow of
                products across borders in the fast-paced world of international
                trade. A game-changer, the digital transformation of customs
                clearance has streamlined procedures, increased efficiency, and
                decreased delays. This blog examines how technology is reshaping
                customs clearance to the advantage of shipping and logistics
                businesses in Oman and elsewhere. Join us as we explore the
                cutting-edge innovations that are changing the customs clearing
                landscape, from digitalized documentation to cutting-edge
                tracking technology.
              </p>
              <a
                href=""
                className="recent-read"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <img
                src="/images/Services/Customs_Clearence/recent-three.png"
                className="recent-image-pad"
                alt="Recent Post Image"
              />
              <h6 className="recent-head-one">
                The impact of UAE-Oman transportation on trade and commerce to
                driving economic growth
              </h6>
              <p className="recent-parag">
                In today’s global economy, businesses are always looking for
                ways to expand their reach and increase profits. One of the key
                factors in achieving this is efficient transportation and
                logistics. The United Arab Emirates and Oman have experienced
                significant growth and development in their transportation
                sector, leading to increased connectivity between the two
                countries. This has opened up new opportunities for businesses
                looking to expand their operations and tap into new markets for
                logistics companies in Oman. However, navigating the complex
                world of transportation and logistics can be challenging,
                particularly for businesses with limited experience in this
                area. This is where the importance of a reliable logistics
                partner comes in. In this article, we will explore the impact of
                transportation on business growth in the UAE and Oman, and the
                crucial role that logistics partners play in helping businesses
                achieve their goals.
              </p>
              <a
                href=""
                className="recent-read"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomsCentered;
