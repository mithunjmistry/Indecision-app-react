import React from 'react';
import Modal from 'react-modal';

const optionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.closeModal}
      ariaHideApp={false}
      className={'modal'}
    >
        <h3 className={'modal__title'}>Selected Option</h3>
        {props.selectedOption && <p className={'modal__body'}>{props.selectedOption}</p>}
        <button onClick={props.closeModal}>Okay</button>
    </Modal>
);

export default optionModal;