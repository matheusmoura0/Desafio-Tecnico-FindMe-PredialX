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
} from '@mui/material';
import {RedirectButton} from './style';
import EditModal from '../../components/ModalEdit';
import Modal from '../../components/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import SortIcon from '@mui/icons-material/Sort';

const localeCompare = (a, b) => { 
  if (a.id < b.id) {
    return -1;
  } if (a.id > b.id) {
    return 1;
  }
  return 0;
}


  export default function OrderCard() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [order, setOrder] = useState('DESC');

    const sorting = (order) => { 
      if (order === 'ASC') {
        const sorted = orders.sort((a, b) => a.id - b.id);
        setOrders(sorted);
        setOrder('DESC');
      } if (order === 'DESC') { 
        const sorted = orders.sort((a, b) => b.id - a.id);
        setOrders(sorted);
        setOrder('ASC');
      }
      console.log(orders);
    }

      const sortcreated_at = (order) => { 
      if (order === 'ASC') {
        const sorted = [...orders].sort((a, b) =>
          a.created_at.toLowerCase() > b.created_at.toLowerCase() ? 1 : -1 
        )
        setOrders(sorted);
        setOrder('DESC');
    }
    if (order === 'DESC') { 
      const sorted = [...orders].sort((a, b) =>
      b.created_at.toLowerCase() > a.created_at.toLowerCase() ? 1 : -1 
      )
      setOrders(sorted);
      setOrder('ASC');
    }
    console.log(orders);
  }

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
          <RedirectButton
          onClick={ () => navigate('/registerEmployee') }
          >
            Registrar colaborador
          </RedirectButton>
          <SortIcon  onClick={() => sortcreated_at(order)} > Ordenar mais {} </SortIcon>
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
                          <TableCell>
                           cliente
                            </TableCell>
                          <TableCell>
                           colaborador
                            </TableCell>
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
                                  <TableCell>
                                    {order.cliente.name}
                                    <p> ID:#{ order.client_id } </p>
                                  </TableCell>
                                  <TableCell>{order.employe.name}
                                    <p className='pId'>ID:#{ order.employee_id }</p>
                                  </TableCell>
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

        <LogoutIcon 
        className='logoutIcon'
        onClick={ () => navigate('/') }
        />
        <EditModal className='Editmodal'/>
          </div>
          
  )
}
