const { Employes }  =  require('../../database/models/');

const create = async (name, email, password) => {
    const employees =  await Employes.create({ name, email, password });
    return employees
}

const getAll =  async () => { 
    const employees = await Employes.findAll();
    return employees
}


module.exports = {
    create,
    getAll,
}