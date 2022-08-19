require('dotenv').config();
const clientRouter = require('./routes/cliente_router');
const employeeRouter = require('./routes/employeeRouter');

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/clientes', clientRouter);
app.use('/funcionarios', employeeRouter);

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});