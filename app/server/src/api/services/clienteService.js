const { Clientes }  =  require('../../database/models/');


const create = async (nome) => { 
    const customer =  await Clientes.create({ name: nome });
    return customer
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

const deletebyId =  async (id) => { 
    const customerById = await Clientes.findByPk(id);
    customerById.destroy({ where: { id } });
    return customerById
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    deletebyId
}