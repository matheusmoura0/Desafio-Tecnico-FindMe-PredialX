import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import { Container, Form, Title, Input, Button} from './style';

export default function RegisterEmployee() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
  }

  return (
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
      <DashboardIcon className="dashBoard" onClick={() => navigate('/dashboard')}> DashBoard </DashboardIcon>
    </div>
  )
}
