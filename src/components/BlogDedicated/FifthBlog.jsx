import React, { useState } from "react";
import "./../../css/BlogDedicatedCss/FifthBlog.css";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/GetQuote.css";

const FifthBlog = () => {
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
                Events and exhibitions are an increasingly important part of
                business and marketing in the GCC region. For event and
                exhibition logistics, ALSI is the perfect partner to help
                organisations unlock the full potential of their activities.
                With a wealth of experience in the industry and a commitment to
                delivering the best possible service, ALSI is the ideal choice
                for those looking to make the most of their events and
                exhibitions. Our innovative approach to logistics and our team
                of experts ensures that even the most demanding of requirements
                can be met. What’s more, ALSI is committed to creating a
                seamless experience for all of our customers, from start to
                finish. With ALSI, organisations can be confident that their
                events and exhibitions will be managed to the highest standards
                and will be a success.
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
                Know About Event and Exhibition Logistics
              </h6>
              <p className="centered-clr-text">
                Event and exhibition logistics is the process of planning,
                organising, and executing the necessary activities to ensure the
                success of an event or exhibition. This includes everything from
                selecting venues to arranging transportation, managing
                logistics, and ensuring the necessary supplies and materials are
                in place. This can be a complex process and one that requires
                detailed planning and organisation. Event and exhibition
                logistics can also include the services of a third-party
                logistics provider.
              </p>

              <p className="centered-clr-text">
                The GCC region is rapidly becoming an important hub for events
                and exhibitions. With the increasing number of international
                business conferences, exhibitions, and other events taking
                place, the potential for growth and development in the region is
                huge. The future of event and exhibition logistics in the GCC
                region is bright. With the growing demand for events and
                exhibitions, there is a need for companies that can provide
                reliable and efficient event and exhibition logistics services.
                This is where ALSI comes in. We specialise in providing event
                and exhibition logistics services, offering everything from
                event planning to supply chain management. By working with a
                third-party provider, organisations can benefit from the
                expertise and experience of a dedicated team of professionals
                who can ensure that all aspects of the event or exhibition are
                managed to the highest standards.
              </p>

              <img
                src="/images/Services/Customs_Clearence/centered-bg-two.png"
                className="customs-center-bg"
                alt="Customs Clearance Image"
              />

              <h6 className="blog-compliance">
                The Benefits of Working with ALSI; Our Innovative Approach to
                Event and Exhibition Logistics
              </h6>
              <p className="centered-clr-text">
                At ALSI, we offer a multitude of benefits for those seeking
                event and exhibition logistics services. Our team brings decades
                of experience and expertise to the table, ensuring that every
                aspect of your event is planned and executed to the highest
                standards. We are committed to providing exceptional customer
                service, with a dedicated team that will work closely with you
                from beginning to end, ensuring that all of your needs are met.
                From venue selection to transportation and logistics management,
                ALSI will ensure that everything runs smoothly. We provide
                innovative solutions to enhance the success of your event,
                utilising cutting-edge technologies and streamlining supply
                chain processes.
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
                Unlock the Full Potential of Organizations’ Events and
                Exhibitions; Our Experienced Team in Event and Exhibition
                Logistics
              </h6>
              <p className="centered-clr-text">
                ALSI provides comprehensive event and exhibition management
                services to organisations, ensuring that all aspects of their
                event or exhibition are managed to the highest standards. Our
                team of experienced professionals is dedicated to delivering the
                best possible service to our customers. Each team member is
                highly trained and knowledgeable in their field, and we are
                committed to providing top-quality service. We understand that
                events and exhibitions can be complex and challenging, which is
                why we have a team of experienced event planners and logistics
                professionals who can ensure that all requirements are met.
                Moreover, we have extensive knowledge of the different venues
                and locations in the GCC region, allowing us to select the
                perfect venue for each event or exhibition.
              </p>
              <p className="centered-clr-text">
                At ALSI, we take an innovative approach to logistics. We
                understand that no two events or exhibitions are the same and
                that each one requires a tailored solution. This is why we work
                closely with our customers to develop a customised plan that
                meets their specific needs. We also use the latest technologies
                to ensure that all aspects of the event or exhibition are
                managed efficiently and effectively. From GPS tracking systems
                to sophisticated warehouse management systems, we have the tools
                and expertise to ensure the smooth running of the event or
                exhibition.
              </p>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  Quality Assurance Process in Event and Exhibition Logistics
                </h6>
                <p className="centered-clr-text">
                  At ALSI, we take quality assurance very seriously. We have a
                  rigorous quality control process in place to ensure that all
                  aspects of the event or exhibition are managed to the highest
                  standards. The quality assurance process includes regular
                  inspections and reviews of all aspects of the event or
                  exhibition. This includes everything from the selection of
                  venues to the logistics of the event or exhibition. This
                  ensures that all aspects are managed to the highest standards
                  and that the event or exhibition is a success.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg">
                <h6 className="blog-compliance">
                  Commitment to Creating a Seamless Logistics Experience
                </h6>
                <p className="centered-clr-text">
                  In conclusion, ALSI is the complete logistics solutions
                  provider to help organisations unlock the full potential of
                  their events and exhibitions in the GCC region. With a wealth
                  of experience in the industry and a commitment to delivering
                  the best possible service in events and exhibition logistics
                  in GCC, ALSI is the perfect choice for those looking to make
                  the most of their events and exhibitions. Our innovative
                  approach to logistics and our team of experts ensures that
                  even the most demanding of requirements can be met. What’s
                  more, ALSI is committed to creating a seamless experience for
                  all of its customers, from start to finish. With ALSI,
                  organisations can be confident that their events and
                  exhibitions will be managed to the highest standards and will
                  be a success.
                </p>
              </div>
            </div>

            <div className="link-quote-font">
              <a className="centered-get-quotes-font" style={{textDecoration:"none",color:"white"}} onClick={handleModalOpen}>
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
              How GCC free trade zones can help businesses simplify customs clearance?
              </h6>
              <p className="recent-parag">
              In today’s competitive business environment, operational efficiency and streamlining processes are of paramount importance. One of the regions that has embraced this perspective with open arms is the Gulf Cooperation Council (GCC), particularly with the introduction and expansion of Free Trade Zones (FTZs). A fundamental area that stands to benefit immensely from these FTZs is the realm of customs clearance. Through optimising Free Trade Zone Customs Procedures, businesses can enjoy smoother transitions, reduced costs, and quicker turnaround times. This article delves into the free trade zone customs procedures in GCC countries, focusing on Oman, Qatar, and Dubai, and how companies can benefit from them.
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
        </div>
      </div>
    </div>
  );
};

export default FifthBlog;
