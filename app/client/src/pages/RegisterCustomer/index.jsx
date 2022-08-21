import React, { useState }from 'react'
import axios from 'axios';
import { Container, Form, Title, Button } from './style';

export default function RegisterCustomer() {
    const [clienteId, setClienteId] = useState('');
    const [created, setCreated] = useState(false);
    const [cliente, setCliente] = useState('');

  return (
    <div> {created ? <h1>Cliente #{clienteId} cadastrado! </h1> : null}
        <Container>
            <Form>
                <Title> Cliente </Title>
                <input
                    placeholder="Nome do cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
                <Button 
                type='button'
                onClick={() => {
                    axios.post('http://localhost:3003/clientes/', { name: cliente })
                    .then(res => {
                        setClienteId(res.data.id);
                    })
                    setCliente('');
                    setCreated(true);
                }
                }>
                    Criar
                </Button>
            </Form>
        </Container>
    </div>
  )
}
