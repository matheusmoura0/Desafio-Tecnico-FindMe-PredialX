/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import{ TableContainer,
     Table,
      TableHead,
       TableRow, 
       TableCell, 
       TableBody, 
       Paper } from '@mui/material'

       
       
  export default function OrderCard() {
    const [orders, setOrders] = useState([]);
    const [showProblem, setShowProblem] = useState(false);

    const getOrders = async () => { 
        const todos = await axios.get('http://localhost:3003/orders/');
        setOrders(todos.data);
      }
    


    useEffect(() => { 
        getOrders();
    }, [])

    const handleDelete = async (id) => { 
        await axios.delete(`http://localhost:3003/orders/${id}`);

        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
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
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{ !showProblem ?  
                    <button 
                    onClick={ () => setShowProblem(true)}> 
                    Mostrar Problema </button> : <p> {order.related_problem} <button  onClick={ () => setShowProblem(false)}> Esconder </button> </p> }</TableCell>
                    <TableCell>{order.client_id}</TableCell>
                    <TableCell>{order.employee_id}</TableCell>
                    <TableCell>{order.created_at}</TableCell>                                                                                                                                         
                    <TableCell>{order.updated_at}</TableCell>
                    <button onClick={ () => (handleDelete(order.id))}> X </button>
                    <button> Editar </button>
                </TableRow>
                </>
            ))}

        </TableBody>
    </Table>
    </TableContainer>
  )
}
