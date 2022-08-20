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
       import {EditButton, DeleteButton} from './style';
import EditModal from '../../components/ModalEdit';
import Modal from '../../components/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css";

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
                    <Modal related_problem={order.related_problem}/>
                    </TableCell>
                    <TableCell>{order.client_id}</TableCell>
                    <TableCell>{order.employee_id}</TableCell>
                    <TableCell>{order.created_at}</TableCell>                                                                                                                                         
                    <TableCell>{order.updated_at}</TableCell>
                    <DeleteIcon className='deletIcon'  onClick={ () => (handleDelete(order.id))}>  </DeleteIcon>                   
                    <EditModal editContent={ () => handleEdit(order.related_problem.id)}> dsa </EditModal>
                    
                </TableRow>
                </>
            ))}

        </TableBody>
    </Table>
    </TableContainer>
  )
}
