import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './styles.scss';

export const PopupCatch = props => {
  const {
    isCaught,
    message,
    pokemonDetail,
    isExist,
    isNullName,
    handleModal,
    handleSave,
    handleNaming
  } = props;

  return (
    <Modal
      show={isCaught}
      onHide={() => handleModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {message}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Make a name for your pokemon</h4>
        <input
          className={`pokemon-naming ${(isExist || isNullName) && 'error'}`}
          type='text'
          onChange={e => handleNaming(e)}
        />
        {isExist && <p className="pokemon-error">The name already exists</p>}
        {isNullName && <p className="pokemon-error">Name cannot be empty</p>}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-save" onClick={() => handleSave(pokemonDetail)}>Save</button>
        <button className="btn-close" onClick={() => handleModal(false)}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupCatch;