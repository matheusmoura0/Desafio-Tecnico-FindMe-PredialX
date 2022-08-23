import React, { useState }from 'react'
import axios from 'axios';
import { Container, Form, Title, Button, Input } from './style';
import Modal from "react-modal";
import './styles.css';



export default function ModalClientes() {
    const [cliente, setCliente] = useState('');

    
        const [isOpen, setIsOpen] = useState(false);
      
        function toggleModal() {
          setIsOpen(!isOpen);
        }
      
        return (
          <div className="App">
            <button className="showModalButton1" onClick={toggleModal}> Cadastrar novo cliente </button>
      
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
            >

<Container>
            <Form>
                <Title> Cadastro de cliente </Title>
                <Input
                    placeholder="Nome do cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
                <Button 
                disabled={!cliente}
                type='submit'
                onClick={() => {
                    axios.post('http://localhost:3001/clientes/', { name: cliente })
                    setCliente('');
                    window.location.reload(false);
                }
                }>
                    Criar
                </Button>
            </Form>

        
        </Container>
              <button className="modalButton" onClick={toggleModal}> X </button>
            </Modal>
          </div>
        );
      }