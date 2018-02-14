import React from 'react';
import Modal from 'react-modal';

const optionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.closeModal}
      ariaHideApp={false}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.closeModal}>Okay</button>
    </Modal>
);

export default optionModal;