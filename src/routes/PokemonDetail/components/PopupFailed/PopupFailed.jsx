import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './styles.scss';

export const PopupCatch = props => {
  const {
    open,
    message,
    handleModal
  } = props;

  return (
    <Modal
      show={open}
      onHide={() => handleModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="popup-failed">
          {message}
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default PopupCatch;