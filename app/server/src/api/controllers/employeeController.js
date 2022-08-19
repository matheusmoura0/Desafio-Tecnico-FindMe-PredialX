const employeService = require('../services/employeService');

const create = async (req, res) => { 
    const{ name, email, password } = req.body;
    const employe = await employeService.create(name, email, password);

    return res.status(201).json(employe);
}

const getAll =  async (_req, res) => { 
    const employes =  await employeService.getAll();

    res.status(200).json(employes);
}

module.exports = {  
    create,
    getAll,
}