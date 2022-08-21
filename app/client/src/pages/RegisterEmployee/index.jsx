import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import { Container, Form, Title, Input, Button } from './style';

export default function RegisterEmployee() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async () => { 
    const data = {
      name,
      email,
      password
    }
    await axios.post('http://localhost:3003/colaboradores', data)
    navigate('/')
  }

  return (
    <div>
      <Container>
        <Form>
          <div>
            <Title> Cadastro de colaborador </Title>
            <Input  
            onChange={(e) => {setName(e.target.value) } }
            placeholder="Nome" />
            <Input 
            onChange={(e) => {setEmail(e.target.value) } }
            placeholder="E-mail" />
            <Input
            onChange={(e) => {setPassword(e.target.value) } }
            placeholder="Senha" />

            <Button 
            type="button"
            onClick={() => {register()} }>Cadastrar</Button>
            </div>
      </Form>
      </Container>
      <DashboardIcon className="dashBoard" onClick={() => navigate('/dashboard')}> DashBoard </DashboardIcon>
    </div>
  )
}
