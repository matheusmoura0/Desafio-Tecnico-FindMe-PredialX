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


    useEffect(() => { 
        axios.get('http://localhost:3003/orders')
        .then(res => {
            console.log(res.data);
            setOrders(res.data);
            console.log(orders.map(order => order.id));
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            console.log(orders);
        } )
    }, [''])


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
                <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{ !showProblem ?  
                    <button 
                    onClick={ () => setShowProblem(true)}> 
                    Mostrar Problema </button> : <p> {order.related_problem} <button  onClick={ () => setShowProblem(false)}> Esconder </button> </p> }</TableCell>
                    <TableCell>{order.client_id}</TableCell>
                    <TableCell>{order.employee_id}</TableCell>
                    <TableCell>{order.created_at}</TableCell>
                    <TableCell>{order.updated_at}</TableCell>
                </TableRow>
            ))}

        </TableBody>
    </Table>
    </TableContainer>
  )
}
