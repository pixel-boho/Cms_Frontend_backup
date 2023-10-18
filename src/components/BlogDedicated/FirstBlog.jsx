import React, { useState } from "react";
import "./../../css/BlogDedicatedCss/FirstBlog.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/GetQuote.css";

const FirstBlog = () => {
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
              <img
                src="/images/Services/Customs_Clearence/centered-bg-one.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <h6 className="blog-compliance">
                HOW CAN I GET CUSTOMS CLEARANCE IN GCC FREE TRADE ZONES?
              </h6>
              <p className="centered-clr-text">
                Customs clearance in GCC Free Trade Zones can be obtained
                through a straightforward process. Being within the FTZ,
                companies benefit from more relaxed customs regulations,
                streamlined processes, and often enjoy reduced or even zero
                customs duties. Here’s how you can get customs clearance in the
                Free Trade Zones:
              </p>

              <h6 className="blog-compliance">1. Submit Required Documents</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  Provide all necessary documentation, including a detailed
                  invoice, packing list, certificate of origin, etc.
                </p>{" "}
              </i>

              <h6 className="blog-compliance">
                2. Follow the Specific Free Trade Zone Customs Procedures
              </h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  Adhere to the unique “free trade zone customs procedures in
                  GCC countries” that cater to the specific country’s trade laws
                </p>
              </i>

              <h6 className="blog-compliance">
                3. Payment of Duties if Applicable
              </h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  Depending on the nature of the goods and the specific Free
                  Trade Zone, there may be reduced or no customs duties.
                </p>
              </i>

              <h6 className="blog-compliance">4. Inspection & Clearance</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  The customs authority will inspect the consignment, and if
                  everything is in order, clearance will be granted promptly.
                </p>
              </i>

              <img
                src="/images/Services/Customs_Clearence/centered-bg-two.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />

              <h6 className="blog-compliance">
                WHAT ARE THE CUSTOMS LAWS IN FREE TRADE ZONES IN GCC?
              </h6>
              <p className="centered-clr-text">
                The customs laws in GCC Free Trade Zones are typically more
                liberal compared to non-FTZ areas. Some key aspects include:
              </p>

              <h6 className="blog-compliance">● Duty-Free Imports</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  Goods can be imported duty-free, with some exceptions based on
                  the type of product.
                </p>
              </i>

              <h6 className="blog-compliance">● Less Stringent Regulations</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  More simplified regulations that facilitate quicker
                  processing.
                </p>
              </i>

              <h6 className="blog-compliance">
                ● Flexible Storage & Transshipment
              </h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  Goods can be stored and trans-shipped without extensive
                  customs interference.
                </p>
              </i>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <img
                src="/images/Services/Customs_Clearence/centered-bg-three.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />
              <h6 className="blog-compliance">
                DOCUMENTS REQUIRED FOR CUSTOM CLEARANCE
              </h6>
              <p className="centered-clr-text"></p>

              <h6 className="blog-compliance">1. Incomplete Documentation</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  Ensure all required documents are complete and accurate to
                  prevent delays.
                </p>
              </i>

              <h6 className="blog-compliance">2. Misclassification of Goods</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">1. Commercial Invoice</p>
              </i>

              <h6 className="blog-compliance">3. Lack of Knowledge</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">2. Packing List</p>
              </i>

              <h6 className="blog-compliance">4. Late Payment of Duties</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">3. Certificate of Origin</p>
              </i>

              <h6 className="blog-compliance">4. Late Payment of Duties</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  4. Bill of Lading or Airway Bill
                </p>
              </i>

              <h6 className="blog-compliance">4. Late Payment of Duties</h6>
              <i className="bi-blog-compliance" style={{ fontStyle: "normal" }}>
                <p className="blog-compliance-p">
                  5. Import License if required
                </p>
              </i>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  HOW MUCH IS CUSTOMS CLEARANCE IN OMAN?
                </h6>
                <p className="centered-clr-text">
                  Customs clearance in Oman’s Free Trade Zones may involve
                  minimal or no customs duties. The actual costs can vary
                  depending on the nature of the goods and the specific FTZ.
                  Consulting with a local customs broker or a company like Alsi
                  can provide accurate information tailored to your situation.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  CUSTOM CLEARANCE CHARGES ON OTHER COUNTRIES
                </h6>
                <p className="centered-clr-text">
                  Custom clearance charges in Qatar and Dubai’s Free Trade Zones
                  follow a similar model to Oman, with variations based on local
                  laws and regulations.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  HOW ALSI SIMPLIFIES CUSTOM CLEARANCE IN GULF COUNTRIES
                  ESPECIALLY IN FREE TRADE ZONES?
                </h6>
                <p className="centered-clr-text">
                  Alsi specializes in simplifying the complex customs clearance
                  process in Gulf Countries, especially in Free Trade Zones like
                  those in Oman, Qatar, and Dubai. By leveraging deep expertise
                  in local customs laws and FTZ regulations, ALSI ensures a
                  smooth, cost-effective, and hassle-free customs clearance for
                  businesses.
                </p>

                <p className="centered-clr-text">
                  GCC Free Trade Zones have emerged as an essential hub for
                  international trade, offering streamlined customs procedures
                  and cost-saving opportunities. Whether you are a business
                  looking to expand in Oman, Qatar, or Dubai, understanding and
                  leveraging the benefits of Free Trade Zone Customs Procedures
                  can significantly enhance your trading capabilities.
                  Partnering with experienced firms like Alsi can further
                  simplify this process, enabling you to focus on what matters
                  most – growing your business.
                </p>
              </div>
            </div>

            <div className="link-quote-font">
                <div 
               style={{textDecoration:"none"}} onClick={handleModalOpen} className="centered-get-quotes-font">
                  Get A Quote
                </div>
              </div>
              <Modal show={showModal} handleClose={handleModalClose}>
        {!formSubmitted ? (
          // Display the form if it has not been submitted
          <div className="container-fluid container-g-q">
            <form className="form-container-g-q" onSubmit={handleSubmit}>
              <div className="row">
                <h4
                  style={{ color: "white", padding: "25px", fontWeight: "800" }}
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
        </div>

        <div className="col-lg-4 recent-clr-bg">
          <div className="row">
            <div className="col-lg">
              <h5 className="recent-head" style={{ fontWeight: "800" }}>
                Recent Posts
              </h5>
              <img
                src="/images/Services/Customs_Clearence/recent-one.png"
                className="recent-image-pad"
                alt="Recent Post Image"
              />
              <h6 className="recent-head-one">
              Smooth sailing through customs clearance in Oman: A guide to ensuring compliance,
avoiding penalties, and navigating potential pitfalls
              </h6>
              <p className="recent-parag">
              When it comes to international trade and business operations, efficient and compliant customs clearance is crucial. For businesses operating in Oman, understanding the customs clearance process is a necessity to avoid penalties, ensure compliance, and navigate potential pitfalls. In this comprehensive guide, brought to you by ALSI in Oman, we’ll walk you through the ins and outs of customs clearance in Oman, providing valuable insights and tips to help your business thrive.
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
                src="/images/Services/Customs_Clearence/recent-two.png"
                className="recent-image-pad"
                alt="Recent Post Image"
              />
              <h6 className="recent-head-one">
              The digital transformation of customs clearance and how
technology is transforming the process
              </h6>
              <p className="recent-parag">
              Customs clearance is essential to ensure the smooth flow of products across borders in the fast-paced world of international trade. A game-changer, the digital transformation of customs clearance has streamlined procedures, increased efficiency, and decreased delays. This blog examines how technology is reshaping customs clearance to the advantage of shipping and logistics businesses in Oman and elsewhere. Join us as we explore the cutting-edge innovations that are changing the customs clearing landscape, from digitalized documentation to cutting-edge tracking technology.
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
              The impact of UAE-Oman transportation on trade and
commerce to driving economic growth
              </h6>
              <p className="recent-parag">
              In today’s global economy, businesses are always looking for ways to expand their reach and increase profits. One of the key factors in achieving this is efficient transportation and logistics. The United Arab Emirates and Oman have experienced significant growth and development in their transportation sector, leading to increased connectivity between the two countries. This has opened up new opportunities for businesses looking to expand their operations and tap into new markets for logistics companies in Oman. However, navigating the complex world of transportation and logistics can be challenging, particularly for businesses with limited experience in this area. This is where the importance of a reliable logistics partner comes in. In this article, we will explore the impact of transportation on business growth in the UAE and Oman, and the crucial role that logistics partners play in helping businesses achieve their goals.
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

export default FirstBlog;
