import React, { useState } from "react";
import "../../css/ContactCss/FrequentlyQuestions.scss";

const FrequentlyQuestions = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleFAQ = (faqNumber) => {
    switch (faqNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container container-bg-faq pt-2 pb-5">
      <div className="container-text-faq">
        <div className="faq-box">
          <h2>Frequently Asked Questions</h2>

          {/* FAQ Item 1 */}
          <div className="faq-item faq-sm-box">
            <div
              className="faq-header"
              data-bs-toggle="collapse"
              data-bs-target="#faq-1"
              aria-expanded={isOpen1}
              onClick={() => toggleFAQ(1)}
            >
              <h5 className="faq-header-pad">01</h5>
              <h6>Does this travel agency offer custom travel packages?</h6>
              <div className="faq-content-wrapper">
                <img
                  src={
                    isOpen1
                      ? "/images/icons/icon-left-minus.svg"
                      : "/images/icons/Icon-plus.svg"
                  }
                  alt={isOpen1 ? "minus icon" : "plus icon"}
                />
              </div>
            </div>
            <div id="faq-1" className={`collapse ${isOpen1 ? "show" : ""}`}>
              <div className="faq-content">
                <p>
                  Yes, we provide custom travel services that can be tailored to
                  your needs and preferences. Please contact our team to discuss
                  your custom itinerary.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="faq-item faq-sm-box">
            <div
              className="faq-header"
              data-bs-toggle="collapse"
              data-bs-target="#faq-2"
              aria-expanded={isOpen2}
              onClick={() => toggleFAQ(2)}
            >
              <h5 className="faq-header-pad">02</h5>
              <h6>Does this travel agency provide travel insurance?</h6>
              <div className="faq-content-wrapper">
                <img
                  src={
                    isOpen2
                      ? "/images/icons/icon-left-minus.svg"
                      : "/images/icons/Icon-plus.svg"
                  }
                  alt={isOpen2 ? "minus icon" : "plus icon"}
                  className="plus-icon"
                />
              </div>
            </div>
            <div id="faq-2" className={`collapse ${isOpen2 ? "show" : ""}`}>
              <div className="faq-content">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="faq-item faq-sm-box">
            <div
              className="faq-header"
              data-bs-toggle="collapse"
              data-bs-target="#faq-3"
              aria-expanded={isOpen3}
              onClick={() => toggleFAQ(3)}
            >
              <h5 className="faq-header-pad">03</h5>
              <h6>
                How can I contact this travel agency's customer service if I
                have questions or problems?
              </h6>
              <div className="faq-content-wrapper">
                <img
                  src={
                    isOpen3
                      ? "/images/icons/icon-left-minus.svg"
                      : "/images/icons/Icon-plus.svg"
                  }
                  alt={isOpen3 ? "minus icon" : "plus icon"}
                  className="plus-icon"
                />
              </div>
            </div>
            <div id="faq-3" className={`collapse ${isOpen3 ? "show" : ""}`}>
              <div className="faq-content">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="faq-item faq-sm-box">
            <div
              className="faq-header"
              data-bs-toggle="collapse"
              data-bs-target="#faq-4"
              aria-expanded={isOpen4}
              onClick={() => toggleFAQ(4)}
            >
              <h5 className="faq-header-pad">04</h5>
              <h6>
                Does this travel agency have a cancellation and refund policy?
              </h6>
              <div className="faq-content-wrapper">
                <img
                  src={
                    isOpen4
                      ? "/images/icons/icon-left-minus.svg"
                      : "/images/icons/Icon-plus.svg"
                  }
                  alt={isOpen4 ? "minus icon" : "plus icon"}
                  className="plus-icon"
                />
              </div>
            </div>
            <div id="faq-4" className={`collapse ${isOpen4 ? "show" : ""}`}>
              <div className="faq-content">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
