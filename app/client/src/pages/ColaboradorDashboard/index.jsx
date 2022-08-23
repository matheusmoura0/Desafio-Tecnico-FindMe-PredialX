import React, { useState, useEffect } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import ColaboradorModal from '../../components/ModalColaborador'
import{ TableContainer,
  Table,
  TableHead,
  TableRow, 
  TableCell, 
  TableBody, 
  Paper,
  TablePagination,
  } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RegisterEmployee() {
const [colaborador, setColaborador] = useState([]);
const [showPassword, setShowpassword] = useState(true)
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);


const show = ( ) => {
  setShowpassword(!showPassword)
}


const getColaboradores = async () => { 
  const colaborador1 = await axios.get('http://localhost:3001/colaboradores/');
  setColaborador(colaborador1.data);
  console.log(colaborador)
};

useEffect(() => {
  getColaboradores();
}, [])




const hadleChangePage = (event, newPage) => { 
  setPage(newPage);
}

const handleChangeRowsPerPage = event => { 
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);

}

const handleDelete = async (id) => { 
  await axios.delete(`http://localhost:3001/colaboradores/${id}`);
  const undeleted = colaborador.filter(cobaborador => cobaborador.id !== id);
  setColaborador(undeleted);
};

const navigate = useNavigate();



  return (
    <div>
      <ColaboradorModal/>
      <>
      <DashboardIcon
        className='dashBoard1'
        onClick={() => navigate('/dashboard')} />
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
                EMAIL
              </TableCell>
              <TableCell
              type='password'
             className='tableheader'
             >
                Senha
              </TableCell>
              <TableCell
             className='tableheader'
             >
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colaborador.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((el) => (
                <TableRow>
                  <TableCell>
                    {el.id}
                  </TableCell>
                  <TableCell>
                  {el.name}
                  </TableCell>
                  <TableCell>
                  {el.email}
                  </TableCell>
                  <TableCell
                  > 
                  { !showPassword ? '**********' : el.password }
                  </TableCell>
                  
                  <TableCell>
                  <DeleteIcon
                  className='delete'
                  onClick={() => (handleDelete(el.id))}
                  >
                    Deletar
                  </DeleteIcon>
                  <VisibilityIcon
                  onClick={() => (show())}
                 />
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
        count={colaborador.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={hadleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Linhas por página'
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`} />
    </TableContainer>
    </>
    </div>
  )
}
