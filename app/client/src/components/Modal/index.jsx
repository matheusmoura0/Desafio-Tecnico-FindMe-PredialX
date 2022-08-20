import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";


export default function App({related_problem, editContent}) {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="App">
        <button className="showModalButton" onClick={toggleModal}> Ver detalhes </button>
  
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <p className="problem">{related_problem}</p>
          <button className="modalButton" onClick={toggleModal}> X </button>
        </Modal>
      </div>
    );
  }