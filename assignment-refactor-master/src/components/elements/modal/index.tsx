import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.css";

interface Props {
  children: any;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, setIsOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={styles.reactModalContent}
      overlayClassName={styles.reactModalOverlay}
    >
      <div className={styles.modalContentHelper}>
        <div className={styles.modalClose} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.closeIcon}>&#215;</div>
        </div>

        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
