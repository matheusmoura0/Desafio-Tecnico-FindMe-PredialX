const { ServiceOrder }  =  require('../../database/models/');
const { Clientes }  =  require('../../database/models/');
const { Employes }  =  require('../../database/models/');

const create = async (client_id, employe_id, related_problem) => { 
    const serviceOrder =  await ServiceOrder.create(client_id, employe_id, related_problem);
    return serviceOrder
}

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
})


module.exports={
    create,
    getAll
}