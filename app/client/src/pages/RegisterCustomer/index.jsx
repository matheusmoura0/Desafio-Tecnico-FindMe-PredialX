import React, { useState }from 'react'
import axios from 'axios';
import { Container, Form, Title, Button, Input } from './style';
import DashboardIcon from '@mui/icons-material/Dashboard'
import {useNavigate} from 'react-router-dom';
import './styles.css';


export default function RegisterCustomer() {
    const [clienteId, setClienteId] = useState('');
    const [cliente, setCliente] = useState('');

    const navigate = useNavigate();
    

  return (
    <div>
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
                type='button'
                onClick={() => {
                    axios.post('http://localhost:3001/clientes/', { name: cliente })
                    .then(res => {
                        setClienteId(res.data.id);
                    })
                    setCliente('');
                    alert( `Cliente #${clienteId} Criado com sucesso!`)
                }
                }>
                    Criar
                </Button>
            </Form>
        </Container>
        <DashboardIcon className="dashBoard" onClick={() => navigate('/dashboard')}> DashBoard </DashboardIcon>
    </div>
  )
}
