import React from "react";
import styles from "../../css/ModalCss/Modal.module.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalMain}>
        <button
          className={`close ${styles.closeButton} ${show ? "visible" : ""}`}
          onClick={handleClose}
          aria-label="Close"
        >
          <i
            className="bi bi-x-circle"
            style={{ padding: "30px 5px 0px 0px" }}
          ></i>
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
