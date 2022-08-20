import React, { useEffect, useState } from "react";

import axios from "axios";
import Modal from "react-modal";
import {Input } from './style';
import SaveIcon from '@mui/icons-material/Save';
import "./styles.css";

import EditIcon from '@mui/icons-material/Edit';


export default function EditModal({related_problem}) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState('');
    const  [id, setId] = useState('');
    const [dropdown, setDropdown] = useState([]);

const updateContent = async (id, content) => { 
    await axios.put(`http://localhost:3003/orders/${id}`, { related_problem: content});
    setIsOpen(false);
}


const getProblemid = async () => { 
  const orders = await axios.get('http://localhost:3003/orders/');
  const id = orders.data.map(order => order.id);
  setDropdown(id);
};


useEffect(() => { 
  getProblemid();
}, [])
  
    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="App">
        <EditIcon className="editpen" onClick={toggleModal}> Editar </EditIcon>
  
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <label htmlFor="editOS">
            <h2>Editar problema</h2>
        <Input 
        onChange={(e) => setContent(e.target.value)}
        type='text'>
          
        </Input>

        <select onChange={(e) => setId(e.target.value)} >
          {dropdown.map(id => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <SaveIcon onClick={ () => updateContent(id, content)} className="SaveIcon"/>   
        </label>
          <p className="problem">{related_problem}</p>
          <button className="modalButton" onClick={toggleModal}> X </button>
        </Modal>
      </div>
    );
  }