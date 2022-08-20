const { administrador }  =  require('../../database/models/');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const findOne = async (email, password) => { 
    const adminByEmail = await administrador.findOne({ where: { email } });
    console.log(adminByEmail);

    if (adminByEmail ) {
        if (adminByEmail.password === password) { 
            const Token = jwt.sign({ id: adminByEmail.id }, secret, { expiresIn: '1h' });
            return { admin: adminByEmail, token: Token };
        } 
             else { 
            return { message: 'Senha inválida' };
        }
}   
};

module.exports = { 
    findOne
}