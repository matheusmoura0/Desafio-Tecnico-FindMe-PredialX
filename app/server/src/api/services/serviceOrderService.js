const { OrdemdeServico }  =  require('../../database/models/');
const { Clientes }  =  require('../../database/models/');
const { Colaboradores }  =  require('../../database/models/');

const create = async (client_id, employe_id, related_problem) => { 
    const OrdemdeServico1 =  await OrdemdeServico.create(client_id, employe_id, related_problem);
    return OrdemdeServico1
};

const getAll = async () => {
    const allOrders = await OrdemdeServico.findAll({
        include: [{
            model: Clientes,
            as: 'cliente',
        attributes: ['name']
        }, {
            model: Colaboradores,
            as: 'employe',
        attributes: ['name']
        }],
    });
    return allOrders;
}

const getById = async (id) => { 
    const OrdemdeServicoById = await OrdemdeServico.findByPk(id, { 
        include: [{
            model: Clientes,
            as: 'cliente'
        }, {
            model: Colaboradores,
            as: 'employe'
        }]
    });
    return OrdemdeServicoById
};

const update = async (id, related_problem) => { 
    const OrdemdeServicoById = await OrdemdeServico.findByPk(id);
    OrdemdeServicoById.update({ related_problem });
    return OrdemdeServicoById
};

const deletebyId =  async (id) => { 
    const OrdemdeServicoById = await OrdemdeServico.findByPk(id);
    OrdemdeServicoById.destroy({ where: { id } });
    return OrdemdeServicoById
};

module.exports={
    create,
    getAll,
    getById,
    update,
    deletebyId,
}