const { ServiceOrder }  =  require('../../database/models/');
const { Clientes }  =  require('../../database/models/');
const { Employes }  =  require('../../database/models/');

const create = async (client_id, employe_id, related_problem) => { 
    const serviceOrder =  await ServiceOrder.create(client_id, employe_id, related_problem);
    return serviceOrder
};

const getAll =  async () => ({ 
    serviceOrders: await ServiceOrder.findAll({ 
        include: [{
            model: Clientes,
            as: 'cliente'
        }, {
            model: Employes,
            as: 'employe'
        }]
    })
});

const getById = async (id) => { 
    const serviceOrderById = await ServiceOrder.findByPk(id, { 
        include: [{
            model: Clientes,
            as: 'cliente'
        }, {
            model: Employes,
            as: 'employe'
        }]
    });
    return serviceOrderById
};

const update = async (id, related_problem) => { 
    const serviceOrderById = await ServiceOrder.findByPk(id);
    serviceOrderById.update({ related_problem });
    return serviceOrderById
};

const deletebyId =  async (id) => { 
    const serviceOrderById = await ServiceOrder.findByPk(id);
    serviceOrderById.destroy({ where: { id } });
    return serviceOrderById
};

module.exports={
    create,
    getAll,
    getById,
    update,
    deletebyId,
}