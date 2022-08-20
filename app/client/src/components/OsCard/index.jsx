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
    const [content, setContent] = useState();
    const [edit, setEdit] = useState(false)


    const getOrders = async () => { 
        const orders = await axios.get('http://localhost:3003/orders/');
        setOrders(orders.data);
      }
    


    useEffect(() => { 
        getOrders();
    }, [])

    const handleDelete = async (id) => { 
        await axios.delete(`http://localhost:3003/orders/${id}`);
        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
    }
    const input = React.useRef(null);
    const handleEdit = e => { 
        setEdit(true);
        console.log(input.current);
        getOrders();
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
                    Mostrar Problema </button>
                    : <input
                    onClick={handleEdit}
                    value={order.related_problem}
                    type="text"
                     readOnly={!edit}  
                    > 
                    

                        </input>
                         }
                    </TableCell>
                    <TableCell>{order.client_id}</TableCell>
                    <TableCell>{order.employee_id}</TableCell>
                    <TableCell>{order.created_at}</TableCell>                                                                                                                                         
                    <TableCell>{order.updated_at}</TableCell>
                    <button onClick={ () => (handleDelete(order.id))}> X </button>
                    
                </TableRow>
                </>
            ))}

        </TableBody>
    </Table>
    </TableContainer>
  )
}
