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
import './styles.css';


export default function ClientesDashboard() {
    const [cliente, setCliente] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    
    const navigate = useNavigate();
    const getclientes = async () => { 
      const clientes = await axios.get('http://localhost:3001/clientes/');
      setCliente(clientes.data);
      console.log(cliente)
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
    
      <><TableContainer>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Id
              </TableCell>
              <TableCell>
                Name
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
                  <button
                    onClick={() => (handleDelete(el.id))}
                  > delete </button>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={cliente.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={hadleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Linhas por página'
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`} />
    </TableContainer><DashboardIcon
        className='dashBoard'
        onClick={() => navigate('/dashboard')} /><RegisterCustomer /></>
  )
}
