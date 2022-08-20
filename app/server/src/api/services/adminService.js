const { admin }  =  require('../../database/models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const findOne = async (email, password) => { 
    const adminByEmail = await admin.findOne({ where: { email } });
    if (adminByEmail ) {
        const isPasswordValid = await bcrypt.compare(password, adminByEmail.password);
        if (isPasswordValid) { 
            const Token = jwt.sign({ id: adminByEmail.id }, secret, { expiresIn: '1h' });
            return { admin: adminByEmail, token: Token };
        } else { 
            return { message: 'Senha inválida' };
        }
}   
};

module.exports = { 
    findOne
}