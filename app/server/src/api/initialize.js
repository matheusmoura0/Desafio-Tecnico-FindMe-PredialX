const env = process.env.NODE_ENV || 'development';
const config = require('../database/config/config.js')[env];
const { date } = require('joi');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const { administrador }  =  require('../database/models/');
const { Clientes }  =  require('../database/models/');
const { Colaboradores }  =  require('../database/models/');
const { OrdemdeServico }  =  require('../database/models/');



 async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({host:config.host, user: config.username, password: config.password});
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\`;`);

    // connect to db
    const sequelize = new Sequelize(config.database, config.username, config.password, config);

    // sync all models with database
    await Clientes.sync();
    await Colaboradores.sync();
    await OrdemdeServico.sync();
    await administrador.sync();
    
    await administrador.upsert({
        id: 1,
        email: 'admin@admin.com',
        password: '12345678',
    })

    await Clientes.upsert ({
        name: 'Cliente Teste',
    })
    await Colaboradores.upsert({
        name: 'Colaborador Teste',
        email: 'test@medium.com',
        password: '12345678'
    })
    await OrdemdeServico.upsert({
        client_id: 1,
        employee_id: 1,
        related_problem: 'Problema Teste',
        created_at: Date.now(),

    })
};

module.exports = {
    initialize
}