import React from "react";
import ReactDOM from "react-dom";
import ModalTaskStyle from "./Modal.style";

interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    const portalDiv = document.getElementById('modal')!;

    return ReactDOM.createPortal(
      <div className={ModalTaskStyle.modalTask}>
        {children}
      </div>,
      portalDiv
    );
  };

export default Modal;