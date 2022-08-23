import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";


export default function ClientesModal() {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="App">
        <button className="showModalButton" onClick={toggleModal}> Gerenciar clientes </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <button className="modalButton" onClick={toggleModal}> X </button>
        </Modal>
      </div>
    );
  }