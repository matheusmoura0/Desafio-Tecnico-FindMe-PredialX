import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { TextArea, Container, Form, Title, Button } from './style';
import ClearIcon from '@mui/icons-material/Clear';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import './styles.css';





export default function Register() {
  const [dropdown, setDropdown] = useState([]);
  const [dropdownContent, setDropdownContent] = useState([]);
  const [cliente, setCliente] = useState('');
  const [colaborador, setColaborador] = useState('');
  const [content, setContent] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => { 
    getClienteId();
    getColaboradorId();
  } ,[])

  
const getClienteId = async () => { 
  const clientes = await axios.get('http://localhost:3001/clientes/');
  const clienteId = clientes.data.map(cliente => cliente.id);
  setDropdown(clienteId);
};

const getColaboradorId = async () => { 
  const colaboradores = await axios.get('http://localhost:3001/colaboradores/');
  const colaboradorId = colaboradores.data.map(colaborador => colaborador.id);
  setDropdownContent(colaboradorId);
}

const register = async () => { 
  await axios.post('http://localhost:3001/orders/', { client_id: cliente, employee_id: colaborador, related_problem: content});
  setCliente('');
  setColaborador('');
  setContent('');
}


  return (

    <Container>
      <Form>
    <div>
          <Title> Ordem de serviço </Title>
      <TextArea 
      placeholder="Descrição do problema"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      >
      
       </TextArea>
       <select
        className="select"
       selected={cliente}
        onChange={(e) => setCliente(e.target.value)}>
          <option>Id do cliente </option>
          {dropdown.map(id => (
            <option
            key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <select 
              className='select'
        onChange={(e) => setColaborador(e.target.value)} >
          <option>Id do Colaborador </option>
          {dropdownContent.map(id => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>

        <Button 
        disabled={!content || !cliente || !colaborador}
        type='submit'
        onClick={() => register()}> Registrar </Button>

        <ClearIcon className='clearIcon' onClick={() => setContent('')}> Limpar </ClearIcon>

        <DashboardIcon className="dashBoard" onClick={() => navigate('/dashboard')}> DashBoard </DashboardIcon>
    </div>
    </Form>
    </Container>
    
  )
}
