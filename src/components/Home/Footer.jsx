import React from "react";
import styles from "./../../css/Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={`container-fluid ${styles["footer-head"]}`}>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div
              className={`col-lg-12 text-center ${styles["footer-head-logo"]}`}
            >
              <img src="images/nav_logo.png"  alt="" />
            </div>
          </div>
          <div className={`row m-4 ${styles["center-content"]}`}>
            <div className="col-lg-3">
              <h6>Oman Head Office</h6>
              <p>
                Alsi For Marine Services LLC
                <br />
                P.O. Box 608, P.C: 322,
                <br />
                W. Sohar Sultanate Of Oman
                <br />
                +968 26755598, +968 26755550
                <br />
                Info@alsioman.com
              </p>
            </div>
            <div className="col-lg-3">
              <h6>UAE Branch</h6>
              <p>
                Alsi For Marine Services LLC
                <br />
                Business Bay, Churchil Tower
                <br />
                Office No: 3409, Dubai, UAE.
                <br />
                 +97145850934, +971523767001
                <br />
                P.O. Box: 392585
              </p>
            </div>
            <div className="col-lg-3">
              <h6>Qatar Branch</h6>
              <p>
                C12 AL Emadi Business Center
                <br />
                2nd Floor Office 35
                <br />
                Doha, Qatar
                <br />
                 +974 4047 8563, 974 3362 5333
                <br />
                P.O. Box: 30611
              </p>
            </div>
            <div className="col-lg-3">
              <h6>Saudi Arabia Branch</h6>
              <p>
                ALSI For Marine Services Branch
                <br />
                Building No. 3475, Al Tail Street,
                <br />
                PC 12564, Riyadh,
                <br />
                 +966503625981
                <br />
                Kingdom of Saudi Arabia 
              </p>
            </div>
          </div>
        </div>
        <div className={`row ${styles["footerline-img"]}`}>
          <div className="col-lg-12 text-center">
            <p className={`footer-rights ${styles["footer-rights"]}`}>
              © ALSI Global 2023, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
