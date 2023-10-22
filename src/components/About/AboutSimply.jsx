import React from "react";
import styles from "../../css/AboutCss/AboutSimply.module.scss";

const AboutSimply = () => {
  return (
    <>
      <div
        className={`container-fluid ${styles.containerFluid} ${styles.simplyAboutTop}`}
      >
        <div className="col-lg-12">
          <div className="row pb-2">
            <h2 className={styles.simplyAboutHead}>
              Mission, Vision And Purpose
            </h2>
            <p className={styles.simplyAboutParagh}></p>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${styles.simplyAboutHeadOne}`}>
        <div className={`row text-center ${styles.simplyImageflex}`}>
          <div className={`col-lg ${styles.simplyAboutBg}`}>
            <img
              src="/images/AboutSimply/commitment.png"
              className={`col-lg ${styles.simplyAboutBgOne}`} style={{paddingBottom:"48px"}}
              alt="Image 1"
            />
            <h4 className={`${styles.simplyAboutHeading}`}>Mission</h4>
            <p className={`${styles.simplyAboutParag}`}>
              At ALSI, our mission is to provide logistics solutions that
              simplify operations and empower businesses. We aim to streamline
              the world of logistics, prioritizing customer satisfaction. Our
              solutions-driven approach and commitment to flexibility ensure
              consistently high service levels.
            </p>
          </div>

          <div className={`col-lg ${styles.simplyAboutBg}`}>
            <img
              src="/images/AboutSimply/eye.png"
              className={`col-lg ${styles.simplyAboutBgOne}`}
              alt="Image 2"
            />
            <h4 className={`${styles.simplyAboutHeading}`}>Vision</h4>
            <p className={`${styles.simplyAboutParag}`}>
              ALSI envisions leading the logistics industry by setting new
              standards. We aspire to bring reliability, efficiency, and
              seamlessness to the forefront. Our global expansion will be
              complemented by a customer-centric, solutions-driven approach,
              offering flexible services that exceed expectations.
            </p>
          </div>

          <div className={`col-lg ${styles.simplyAboutBg}`}>
            <img
              src="/images/OfficesSevicePage/Target.png"
              className={`col-lg ${styles.simplyAboutBgOne}`}
              alt="Image 3"
            />
            <h4 className={`${styles.simplyAboutHeading}`}>Purpose</h4>
            <p className={`${styles.simplyAboutParag}`}>
              ALSI's purpose is to simplify the world of logistics. We focus on
              delivering solutions that prioritize customers and consistently
              exceed their expectations. By doing so, we contribute to a more
              connected and prosperous global economy, leading with reliability,
              efficiency, and seamlessness as our guiding principles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSimply;
