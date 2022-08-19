const { Employes }  =  require('../../database/models/');

const create = async (name, email, password) => {
    const employees =  await Employes.create({ name, email, password });
    return employees
}

const getAll =  async () => { 
    const employees = await Employes.findAll();
    return employees
}

const getById = async (id) => { 
    const employeeById = await Employes.findByPk(id);
    return employeeById
}

const update = async (id, name) => { 
    const employeeById = await Employes.findByPk(id);
    employeeById.update({ name });
    return employeeById
}


module.exports = {
    create,
    getAll,
    getById,
    update,
}