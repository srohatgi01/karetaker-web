import React from 'react';
import Modal from 'react-modal';
function Services(props) {



    return (
        <div>
            <Modal isOpen={props.modalIsOpen}>
            <button>Appointments</button>
            <button>Add reports</button>
            <button>Add Readings</button>
            </Modal>
        </div>
    )
}

export default Services;
