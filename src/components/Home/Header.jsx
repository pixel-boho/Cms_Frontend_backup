import React, { useState } from "react";
import styles from "../../css/Header.module.scss";
import Modal from "./../Modal/Modal";
import "./../../css/ModalCss/GetQuote.css";
import headerImage from "../../images/Landing Page image.jpg";
import GetAQuote from "../GetAQuote";
const Header = () => {
  return (
    <>
    <div>
      <div className={`${styles["imag-first-header"]} layout-container`}>
        <div
          className={`row position-relative ${styles["header-container"]} px-4`}
        >
          <div
            className={`${styles["left-pane"]} col-lg-6`}
            style={{ zIndex: 2 }}
          >
            <div className={`${styles["text-fields"]}  py-md-5`}>
              <h2 className={styles["font-bold"]}>
                Complete Logistics <br /> Solutions
              </h2>
              <p className={styles["font-paragraph"]}>
                {" "}
                Reliable. Efficient. Seamless.
              </p>
              <div className="col-lg-9 p-0">
                <p className={styles["font-paragraph-one"]}>
                  ALSI: Your dedicated partner for comprehensive logistics
                  services and solutions. With expertise in customs clearance,
                  transportation, freight forwarding, project cargo services and
                  warehousing, we optimize your supply chain. Partner with ALSI
                  and experience hassle-free logistics that help achieve your
                  business goals.
                </p>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <a href="/about_us" className={`${styles["read-more-link"]}`}>
                  Read More
                  <img
                    style={{ width: "40px", paddingLeft: "5px" }}
                    src="/images/select-arrow.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6   ${styles["right-pane"]} `}
            style={{ zIndex: 1, height: "100%" }}
          >
            <div className="position-relative" style={{ height: "100%" }}>
              <img src={headerImage} alt="header" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      <GetAQuote />
      </>
  );
};

export default Header;
