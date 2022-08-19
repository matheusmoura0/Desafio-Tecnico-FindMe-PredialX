const { Employes }  =  require('../../database/models/');

const create = async (name, email, password) => {
    const funcionarios =  await Employes.create({ name, email, password });
    return funcionarios
}


module.exports = {
    create
}