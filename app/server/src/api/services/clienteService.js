const { Clientes }  =  require('../../database/models/');


const create = (nome) => { 
    return clienteModel.create({ nome });
}

const getAll =  async () => { 
    const customer = await Clientes.findAll();
    return customer
}

const getById = (id) => { 
    return Clientes.findByPk(id);
}

const update = (id, nome) => { 
    return Clientes.update({ nome }, { where: { id } });
}

const deletebyId = (id) => { 
    return Clientes.destroy({ where: { id } });
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    deletebyId
}