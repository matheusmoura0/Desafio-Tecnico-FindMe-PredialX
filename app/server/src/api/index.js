require('dotenv').config();

const clientRouter = require('./routes/cliente_router');
const employeeRouter = require('./routes/employeeRouter');
const orderRouter = require('./routes/orderRouter');
const adminRouter = require('./routes/adminRouter');
const { initialize } = require('./initialize')


initialize();



const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/clientes', clientRouter);
app.use('/colaboradores', employeeRouter);
app.use('/orders', orderRouter);
app.use('/admin', adminRouter);

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});