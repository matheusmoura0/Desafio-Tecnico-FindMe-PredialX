import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { TextArea } from './style';





export default function Register() {
  const [dropdown, setDropdown] = useState([]);
  const [dropdownContent, setDropdownContent] = useState([]);
  const [cliente, setCliente] = useState('');
  const [colaborador, setColaborador] = useState(1);
  const [content, setContent] = useState(1);



  useEffect(() => { 
    getClienteId();
    getColaboradorId();
  } ,[])

  
const getClienteId = async () => { 
  const clientes = await axios.get('http://localhost:3003/clientes/');
  const clienteId = clientes.data.map(cliente => cliente.id);
  setDropdown(clienteId);
};

const getColaboradorId = async () => { 
  const colaboradores = await axios.get('http://localhost:3003/colaboradores/');
  const colaboradorId = colaboradores.data.map(colaborador => colaborador.id);
  setDropdownContent(colaboradorId);
}

const register = async () => { 
  await axios.post('http://localhost:3003/orders/', { client_id: cliente, employee_id: colaborador, related_problem: content});
  setCliente('');
  setColaborador('');
}


  return (
    <div>
          <h4> Problema Relatado: </h4>
      <TextArea 
      onChange={(e) => setContent(e.target.value)}
      >
      
       </TextArea>
       <select
       defaultValue='Selecione o Id do cliente'
        onChange={(e) => setCliente(e.target.value)}>
          <option>Selecione o Id do cliente </option>
          {dropdown.map(id => (
            <option
            key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <select   
        onChange={(e) => setColaborador(e.target.value)} >
          <option>Selecione o Id do Colaborador </option>
          {dropdownContent.map(id => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>

        <button onClick={() => register()}> Registrar </button>
    </div>
  )
}
