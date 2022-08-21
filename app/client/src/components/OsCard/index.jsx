/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import{ TableContainer,
Table,
TableHead,
TableRow, 
TableCell, 
TableBody, 
Paper,
TablePagination,
TableSortLabel
} from '@mui/material';
import {RedirectButton} from './style';
import EditModal from '../../components/ModalEdit';
import Modal from '../../components/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css";
import { useNavigate } from "react-router-dom";


  export default function OrderCard() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);;
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();
    
    const getOrders = async () => { 
        const orders = await axios.get('http://localhost:3003/orders/');
        setOrders(orders.data);
      };
    useEffect(() => { 
      getOrders();
  }, [])
  

    const hadleChangePage = (event, newPage) => { 
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => { 
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }



    const handleDelete = async (id) => { 
        await axios.delete(`http://localhost:3003/orders/${id}`);
        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
      };

  return ( 
    <div>
    <><>
          <RedirectButton
          onClick={ () => navigate('./register') }
          >
            Criar Ordem de Serviço
          </RedirectButton>
          <RedirectButton
          onClick={ () => navigate('/registerCustomer') }
          >
            Registar Cliente
          </RedirectButton>
      </><TableContainer
          component={Paper}
      >
            <Paper>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell
                          
                          >ID</TableCell>
                          <TableCell>
                            Problema relatado 
                            </TableCell>
                            <TableSortLabel>
                          <TableCell>
                            Id do cliente
                            </TableCell>
                            </TableSortLabel>
                            <TableSortLabel>
                          <TableCell>
                            Id do colaborador
                            </TableCell>
                            </TableSortLabel>
                          <TableCell>
                            Data de Criação
                            </TableCell>
                          <TableCell>Data da Ultima atualização</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage )
                      .map((order => (
                          <>
                              <TableRow>
                                  <TableCell>#{order.id}</TableCell>
                                  <TableCell>
                                      <Modal related_problem={order.related_problem} />
                                  </TableCell>
                                  <TableCell>{order.client_id}</TableCell>
                                  <TableCell>{order.employee_id}</TableCell>
                                  <TableCell>{order.created_at}</TableCell>
                                  <TableCell>{order.updated_at}</TableCell>
                                  <DeleteIcon className='deletIcon' onClick={() => (handleDelete(order.id))}>  </DeleteIcon>
                              </TableRow>
                          </>
                      )))}
                  </TableBody>
              </Table>
            </Paper>
              <TablePagination
                rowsPerPageOptions={[ 5, 10, 25]}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={hadleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage='Linhas por página'
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
            />
          </TableContainer></>

          
        <EditModal className='Editmodal'/>
          </div>
          
  )
}
