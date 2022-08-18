import cliente_model from "./cliente_model";

const create = (nome) => { 
    return cliente_model.create({ nome });
}

const findAll = () => { 
    return cliente_model.findAll();
}

const getById = (id) => { 
    return cliente_model.findByPk(id);
}

const update = (id, nome) => { 
    return cliente_model.update({ nome }, { where: { id } });
}

const deletebyId = (id) => { 
    return cliente_model.destroy({ where: { id } });
}

export default {
    create,
    findAll,
    getById,
    update,
    deletebyId
}