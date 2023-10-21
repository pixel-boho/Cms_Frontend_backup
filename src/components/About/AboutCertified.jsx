import React from "react";
import styles from "../../css/AboutCss/AboutCertified.module.scss";

const AboutCertified = () => {
  return (
    <div className="container">
      <div className="col-lg-12">
        <div className="row">
          <h1 className={styles.AboutCertifiedHOne}>
            Memberships And Certifications
          </h1>
        </div>
      </div>

      <div className="row certified-about-top">
        <div className="col-lg-3">
          <div className={`col-lg ${styles.certifiedBox}`}>
            <div className={`row ${styles.cerifiedImgRow}`}>
              <img
                src="/images/Certified/riyada.png"
                style={{ width: "58%" }}
                alt=""
              />
            </div>
          </div>
          <div className={`col-lg ${styles.rowDescription}`}></div>
        </div>

        <div className="col-lg-3">
          <div className={`col-lg ${styles.certifiedBox}`}>
            <div className={`row ${styles.cerifiedImgRow}`}>
              <img
                src="/images/Certified/wca.png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
          <div className={`col-lg ${styles.rowDescription}`}></div>
        </div>

        <div className="col-lg-3">
          <div className={`col-lg ${styles.certifiedBox}`}>
            <div className={`row ${styles.cerifiedImgRow}`}>
              <img
                src="/images/Certified/fiata.png"
                style={{ width: "70%" }}
                alt=""
              />
            </div>
          </div>
          <div className={`col-lg ${styles.rowDescription}`}></div>
        </div>

        <div className="col-lg-3">
          <div className={`col-lg ${styles.certifiedBox}`}>
            <div className={`row ${styles.cerifiedImgRow}`}>
              <img
                src="/images/Certified/ISOLogo.jpg"
                style={{ width: "42%" }}
                alt=""
              />
            </div>
          </div>
          <div className={`col-lg ${styles.rowDescription}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutCertified;
