import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { TextArea, Container, Form, Title, Button } from './style';
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
    getColaboradorId();
    getClienteId();
  }, [])



  
const getColaboradorId = async () => { 
  const colaboradores = await axios.get('http://localhost:3001/clientes/');
  setDropdown(colaboradores.data);

}


const getClienteId = async () => { 
  const clientesData = await axios.get('http://localhost:3001/colaboradores/');
  setDropdownContent(clientesData.data);
};



const register = async () => { 
  await axios.post('http://localhost:3001/orders/', { client_id: cliente[0], employee_id: colaborador[0], related_problem: content});
  setCliente('');
  setColaborador('');
  setContent('');
  navigate('/dashboard')
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
          <option>Selecione o cliente </option>
          {dropdown.map(order => ( 
            
            <option key={order.id} value={[order.id, order.name]} >{`#${order.id}: ${order.name}` }</option>
          ))}

        </select>
        <select 
              className='select'
        onChange={(e) => setColaborador(e.target.value)} >
          <option>Selecione o  Colaborador </option>
          {dropdownContent.map(order => ( 
            <option key={order.id} value={[order.id, order.name]} >{`#${order.id}: ${order.name}` }</option>
          ))}
        </select>

        <Button 
        disabled={!content || !cliente || !colaborador}
        type='button'
        onClick={() => register()}> Registrar </Button>


        <DashboardIcon className="dashBoard" onClick={() => navigate('/dashboard')}> DashBoard </DashboardIcon>
    </div>
    </Form>
    </Container>
    
  )
}
