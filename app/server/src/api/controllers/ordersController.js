const orderService = require('../services/serviceOrderService');

const getAll = async (req, res) => { 
    const orders =  await orderService.getAll();

    res.status(200).json(orders);
}

const create = async (req, res) => { 
    console.log(req.body);
    const{ related_problem, client_id, employee_id } = req.body;
    
    const order = await orderService.create({client_id, employee_id, related_problem} );
    if (!order) { 
        return res.status(404).json(
            { message : 'campos invalidos'}
            );
    }
    return res.status(201).json(order);
}

const getById = async (req, res) => { 
    const{ id } = req.params;
    const order = await orderService.getById(id);
    if (!order) { 
        return res.status(404).json(
            { message : 'Pedido não encontrado'}
            );
    }
    return res.status(200).json(order);
}

const update = async (req, res) => { 
    try {
        const{ id } = req.params;
        const{ related_problem, client_id, employee_id } = req.body;
    
        const order =  await orderService.update(id, {client_id, employee_id, related_problem});
    
        return res.status(200).json(order);
    } catch (error) { 
        return res.status(500).json(
            { message : 'Erro ao atualizar pedido'}
            );
    }
}

module.exports ={
    getAll,
    create,
    getById,
    update,
}