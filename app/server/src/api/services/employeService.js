const { Employes }  =  require('../../database/models/');

const create = async (name, email, password) => {
    const employees =  await Employes.create({ name, email, password });
    return employees
};

const getAll =  async () => { 
    const employees = await Employes.findAll();
    return employees
};

const getById = async (id) => { 
    const employeeById = await Employes.findByPk(id);
    return employeeById
};

const update = async (id, name, email) => { 
    const employeeById = await Employes.findByPk(id);
    employeeById.update({ name, email });
    return employeeById
};

const updatePassword = async (id, password) => { 
    const employeeById = await Employes.findByPk(id);
    employeeById.update({ password });
    return employeeById
}

const deletebyId =  async (id) => { 
    const employeeById = await Employes.findByPk(id);
    employeeById.destroy({ where: { id } });
    return employeeById
};


module.exports = {
    create,
    getAll,
    getById,
    update,
    deletebyId,
    updatePassword
}