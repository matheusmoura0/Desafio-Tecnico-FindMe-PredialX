/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import{ TableContainer,
     Table,
      TableHead,
       TableRow, 
       TableCell, 
       TableBody, 
       Paper } from '@mui/material';
       import {ModalS} from './style';
import Modal from '../../components/Modal';
       
       
  export default function OrderCard() {
    const [orders, setOrders] = useState([]);
    const [showProblem, setShowProblem] = useState(false);
    const [content, setContent] = useState(orders.related_problem);
    const [edit, setEdit] = useState(false);


const getOrders = async () => { 
        const orders = await axios.get('http://localhost:3003/orders/');
        setOrders(orders.data);
      };

    useEffect(() => { 
        getOrders();
    }, [])

const handleDelete = async (id) => { 
        await axios.delete(`http://localhost:3003/orders/${id}`);
        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
    };


const handleEdit = async (id) => {    
     setEdit(true);
     await axios.put(`http://localhost:3003/orders/${id}`, { related_problem: content});
     
;

        getOrders();
        
    };


const stopEdit = () => { 
    setEdit(false);
    getOrders();
};

const showProblemo = (id) => { 
    setShowProblem(true);
    setContent(orders.find(order => order.id === id).related_problem);
}
const startEdit = (id) => {
    setEdit(true);
    setContent(orders.find(order => order.id === id).related_problem);
}


  return (
    <TableContainer
    component={Paper}
    >
        

    <Table aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Problema relatado </TableCell>
                <TableCell>Id do cliente</TableCell>
                <TableCell>Id do colaborador</TableCell>
                <TableCell>Data de Criação</TableCell>
                <TableCell>Data da Ultima atualização</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {orders.map(order => (   
                <>
                <TableRow >
                    <TableCell>#{order.id}</TableCell>
                    <TableCell>
                    <Modal classname="modalbu" related_problem={order.related_problem}/>
                    </TableCell>
                    <TableCell>{order.client_id}</TableCell>
                    <TableCell>{order.employee_id}</TableCell>
                    <TableCell>{order.created_at}</TableCell>                                                                                                                                         
                    <TableCell>{order.updated_at}</TableCell>
                     {
                        showProblem ?
                        <button 
                        onClick={ () =>startEdit(order.id)}
                        hidden={!showProblem}> Editar </button> : null
                     }
                    <button onClick={ () => (handleDelete(order.id))}> X </button>
                    
                    {
                        edit ? <div>
                        <button onClick={ () => handleEdit(order.id)} hidden={!edit}> Salvar </button>
                        <button onClick={stopEdit}> Parar de editar </button> 
                        </div> : null
                    }
                </TableRow>
                </>
            ))}

        </TableBody>
    </Table>
    </TableContainer>
  )
}
