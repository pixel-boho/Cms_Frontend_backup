import React, { useState } from "react";
import "./../../css/BlogDedicatedCss/SecondBlog.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/GetQuote.css";

const SecondBlog = () => {
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
      <div className="row secondblog w-100">
        <div className="col-lg-7 recent-top-pad">
          <div className="row">
            <div className="col-lg">
              <p className="centered-clr-text">
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
                FROM PAPERWORK TO PAPERLESS: EMBRACING DIGITAL DOCUMENTATION
              </h6>
              <p className="centered-clr-text">
                At customs checkpoints, the days of laborious paperwork and
                manual document processing are long gone. Through the
                digitization of paperwork processes, the digital revolution has
                completely changed customs clearance. Oman’s shipping and
                logistics businesses now submit declarations and other required
                documents using advanced electronic systems. The smooth flow of
                information is made possible through electronic data exchange
                (EDI), which enables seamless contact between parties. The
                transition to paperless customs clearance increases data
                security and accuracy while lowering the risk of mistakes and
                delays, resulting in a more efficient and open trading
                environment.
              </p>

              <img
                src="/images/Services/Customs_Clearence/centered-bg-two.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />

              <h6 className="blog-compliance">
                ENHANCING RISK MANAGEMENT WITH BIG DATA ANALYTICS
              </h6>
              <p className="centered-clr-text">
                Big data has created new opportunities for efficient risk
                management in the customs clearing process. Authorities in
                charge of customs can examine a great amount of data to find
                potential dangers and abnormalities with the use of data
                analytics. Authorities can identify suspicious patterns, enhance
                risk assessments, and speed up clearance for low-risk shipments
                by using past shipping data. This improved risk management
                strategy benefits shipping companies by lowering inspection
                rates and accelerating the clearance procedure. Big data
                analytics gives customs authorities’ insightful information that
                helps them manage resources effectively while maintaining strict
                security procedures.
              </p>
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
                BLOCKCHAIN: A SECURE AND TRANSPARENT SOLUTION
              </h6>
              <p className="centered-clr-text">
                Blockchain technology has become a game-changing factor in the
                customs clearance process. Data is safely preserved and cannot
                be altered thanks to its decentralized and unchangeable nature.
                Blockchain offers a transparent and reliable platform for
                tracking and verifying shipment data for shipping and logistics
                companies in Oman. Customs procedures may be carried out without
                a hitch because to smart contracts’ ability to automate and
                streamline processes. Real-time visibility of shipments is
                ensured through the usage of blockchain, lowering the
                possibility of fraud and increasing supply chain transparency.
                The potential of blockchain to revolutionize customs clearance
                is becoming more and more clear as it continues to develop.
              </p>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  IOT AND SENSOR TECHNOLOGIES: REAL-TIME TRACKING AND MONITORING
                </h6>
                <p className="centered-clr-text">
                  Real-time tracking and monitoring of cargo from Shipping
                  company in Oman during customs clearance is now possible
                  thanks to the Internet of Things (IoT) and sensor
                  technologies. Smart sensors that are affixed to shipping
                  containers give crucial data including location, humidity, and
                  temperature. Real-time transmission of this information to
                  shipping companies and customs officials ensures adherence to
                  security and legal standards. IoT devices also help in the
                  early detection of possible problems, like delays or route
                  deviations, enabling stakeholders to take immediate corrective
                  action. IoT technology has made customs clearance a fluid and
                  dynamic procedure by enabling real-time tracking and shipment
                  monitoring.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  AI-DRIVEN CUSTOMS CLEARANCE: INTELLIGENT DECISION-MAKING
                </h6>
                <p className="centered-clr-text">
                  Customs clearance is now more capable of making intelligent
                  decisions thanks to artificial intelligence (AI). Customs
                  inspectors can detect high-risk cargo and concentrate
                  inspections on potential hazards by using AI algorithms to
                  examine enormous volumes of data. Systems for clearing customs
                  powered by AI can also spot anomalies in declarations and spot
                  patterns linked to fraud. AI-powered chatbots improve the
                  customer experience for shipping and logistics companies by
                  offering real-time support and direction during the clearing
                  process. AI integration in customs clearing operations
                  enhances accuracy, streamlines procedures, and creates a more
                  responsive and effective trading environment.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">CONCLUSION</h6>
                <p className="centered-clr-text">
                  International trade has been transformed by the digitalization
                  of customs clearance, which has given shipping companies in
                  Oman a more streamlined, secure, and open procedure. Customs
                  clearance has developed into a streamlined and dynamic process
                  thanks to digital documents, powerful data analytics,
                  blockchain technology, IoT, and AI-driven solutions. Adopting
                  this cutting-edge technology has improved risk management and
                  security procedures, in addition to speeding up the approval
                  process. The environment of customs clearance will continue to
                  change as technology develops, supporting a more
                  interconnected and wealthy global commerce ecosystem.
                </p>
              </div>
            </div>

            <div className="link-quote-font">
              <a
                className="centered-get-quotes-font"
                style={{ textDecoration: "none", color: "white" }}
                onClick={handleModalOpen}
              >
                Get A Quote
              </a>
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

        <div className="col-lg-5 secondblog-recent-clr-bg">
          <div className="row" style={{ padding: "30px" }}>
            <h5 style={{ fontWeight: "800" }}>Recent Posts</h5>
            <div className="col-12 mt-3">
              <img
                src="/images/Services/Customs_Clearence/recent-one.png"
                alt="Recent Post "
                className="w-100"
              />
              <h6 className="my-3" style={{ fontWeight: "800" }}>
                Smooth sailing through customs clearance in Oman: A guide to
                ensuring compliance, avoiding penalties, and navigating
                potential pitfalls
              </h6>
              <p className="" style={{ fontSize: "12px" }}>
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
              <a
                href="/"
                className="recent-read"
                style={{ textDecoration: "none", padding: 0 }}
              >
                Read More
              </a>
            </div>

            <div className="col-12 mt-3">
              <img
                src="/images/Services/Customs_Clearence/recent-two.png"
                alt="Recent Post "
                className="w-100"
              />
              <h6 className="my-3" style={{ fontWeight: "800" }}>
                How GCC free trade zones can help businesses simplify customs
                clearance?
              </h6>
              <p className="" style={{ fontSize: "12px" }}>
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
                href="/"
                className="recent-read"
                style={{ textDecoration: "none", padding: 0 }}
              >
                Read More
              </a>
            </div>
            <div className="col-12 mt-3">
              <img
                src="/images/Services/Customs_Clearence/recent-three.png"
                alt="Recent Post "
                className="w-100"
              />
              <h6 className="my-3" style={{ fontWeight: "800" }}>
                The impact of UAE-Oman transportation on trade and commerce to
                driving economic growth
              </h6>
              <p className="" style={{ fontSize: "12px" }}>
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
                href="/"
                className="recent-read"
                style={{ textDecoration: "none", padding: 0 }}
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

export default SecondBlog;
