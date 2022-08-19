const { Clientes }  =  require('../../database/models/');


const create = (nome) => { 
    return clienteModel.create({ nome });
}

const getAll =  async () => { 
    const customer = await Clientes.findAll();
    return customer
}

const getById = async (id) => { 
    const customerById = await Clientes.findByPk(id);
    return customerById
}

const update = async  (id, name) => { 
    const customerById = await Clientes.findByPk(id);
    customerById.update({ name });
    return customerById
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