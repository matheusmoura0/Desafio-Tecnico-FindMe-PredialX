const admin = require ('../services/adminService');

const login = async (req, res) => { 
    const{ email, password } = req.body;
    const adminV = await admin.findOne(email, password);
    if (!adminV) { 
        return res.status(404).json(
            { message : 'Admin não encontrado'}
            );
    }
    return res.status(200).json(adminV);
}

module.exports = { 
    login
}