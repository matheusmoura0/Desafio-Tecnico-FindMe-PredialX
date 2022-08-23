/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }from 'react'
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard'
import {useNavigate} from 'react-router-dom';
import RegisterCustomer from '../../components/ModalClientes';
import{ TableContainer,
  Table,
  TableHead,
  TableRow, 
  TableCell, 
  TableBody, 
  Paper,
  TablePagination,
  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';


export default function ClientesDashboard() {
    const [cliente, setCliente] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    
    const navigate = useNavigate();
    const getclientes = async () => { 
      const clientes = await axios.get('http://localhost:3001/clientes/');
      setCliente(clientes.data);
    };
    
    useEffect(() => {
      getclientes();
    }, [])

    
    const hadleChangePage = (event, newPage) => { 
      setPage(newPage);
  }

  const handleChangeRowsPerPage = event => { 
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  
  }

  const handleDelete = async (id) => { 
    await axios.delete(`http://localhost:3001/clientes/${id}`);
    const undeleted = cliente.filter(order => order.id !== id);
    setCliente(undeleted);
  };
   

  return (
    
      <>
      <DashboardIcon
        className='dashBoard1'
        onClick={() => navigate('/dashboard')} />
        <RegisterCustomer />
      <TableContainer>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
              className='tableheader'
              >
                ID
              </TableCell>
              <TableCell
              className='tableheader'
              >
                NOME
              </TableCell>
              <TableCell
             className='tableheader'
             >
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cliente.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((el) => (
                <TableRow>
                  <TableCell>
                    {el.id}
                  </TableCell>
                  <TableCell>
                  {el.name}
                  </TableCell>
                  <TableCell>
                  <DeleteIcon
                  className='delete'
                  onClick={() => (handleDelete(el.id))}
                  >
                    Deletar
                  </DeleteIcon>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
      <TableCell></TableCell>
      <TablePagination
        className='pagination'
        rowsPerPageOptions={[5, 10, 25]}
        count={cliente.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={hadleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Linhas por página'
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`} />
    </TableContainer>
    </>
  )
}
