import React, { useState } from "react";
import "./styles.css";
import './styles.css';
import axios from 'axios';
import { Container, Form, Title, Input, Button} from './style';

import Modal from "react-modal";


export default function ColaboradorModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const regexEmail = /\S+@\S+\.\S+/;
    const validEmail = regexEmail.test(email);

    const register = async () => { 
        const data = {
          name,
          email,
          password
        }
        await axios.post('http://localhost:3001/colaboradores/', data)
        setName('');
        setEmail('');
        setPassword('');
    
        alert(`Colaborador ${name} cadastrado!`)
        window.location.reload(false);
      }


    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="App">
        <button className="showModalButtondf" onClick={toggleModal}> Cadastrar Colaborador </button>
  
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div>
      <Container>
        <Form>
          <div>
            <Title> Cadastro de colaborador </Title>
            <Input 
            value={name}
            onChange={(e) => {setName(e.target.value) } }
            placeholder="Nome" />
            <Input
            value={email}
            onChange={(e) => {setEmail(e.target.value) } }
            placeholder="E-mail" />
            <Input
            value={password}
            type='password'
            onChange={(e) => {setPassword(e.target.value) } }
            placeholder="Senha" />
            <Button
            type='button'
            onClick={() => {register()} }
            disabled={!validEmail || password.length < 6 }
            >
              Cadastrar
            </Button>
            </div>
      </Form>
      </Container>
    </div>
    <button className="modalButton" onClick={toggleModal}> X </button>
        </Modal>
      </div>
    );
  }