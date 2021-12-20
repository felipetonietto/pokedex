/* eslint-disable import/no-unresolved */
import React from "react";
import BootstrapModal from "react-bootstrap/Modal";

import * as Styles from "./styles";

const Modal: React.FC<{
  show: boolean;
  centered: boolean;
  handleClose: Function;
  heading: string | React.ReactNode;
  body: string | React.ReactNode;
  footer: string | React.ReactNode;
  closeButton: boolean;
}> = ({
  show,
  handleClose,
  heading,
  body,
  footer,
  closeButton = true,
  centered,
  ...props
}) => {
  return (
    <Styles.StyledModal show={show} onHide={handleClose} {...props}>
      {heading && (
        <BootstrapModal.Header className="px-5" closeButton={closeButton}>
          <BootstrapModal.Title>{heading}</BootstrapModal.Title>
        </BootstrapModal.Header>
      )}
      {body && (
        <Styles.StyledModalBody className="pt-3 px-5">
          {body}
        </Styles.StyledModalBody>
      )}
      {footer && (
        <BootstrapModal.Footer className="py-3 px-5">
          {footer}
        </BootstrapModal.Footer>
      )}
    </Styles.StyledModal>
  );
};
export default Modal;
