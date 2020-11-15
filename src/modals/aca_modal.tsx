import React from 'react';
import Modal from 'react-modal';

export default props => {
    const {
        isOpen,
        askToClose,
        onRequestClose
    } = props;

    return (
        <Modal
            id="test"
            contentLabel="modalA"
            closeTimeoutMS={150}
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <h1>HELLO</h1>
            <button onClick={askToClose}>close</button>
        </Modal>
    );
}