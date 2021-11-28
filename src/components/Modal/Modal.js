import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ message, setModal}) => {
    const closeModal = () => {
        setModal(false);
    }
    document.addEventListener('click',function(e) {
        setModal(false);
    });
  return (
    <div>
          <div className={styles.modal}>
            <div className={styles["modal-header"]}>Invalid Input</div>
            <div className={styles["modal-body"]}>
              <div className={styles["modal-content"]}>{message}</div>
              <button className={styles.btn} onClick={closeModal}>Close</button>
            </div>
          </div>
          <div className={styles["modal-bg"]}></div>
    </div>
  );
};
export default Modal;
