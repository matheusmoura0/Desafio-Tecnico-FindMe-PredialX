const orderService = require('../services/serviceOrderService');

const getAll = async (req, res) => { 
    const orders =  await orderService.getAll();

    res.status(200).json(orders);
}

const create = async (req, res) => { 
    console.log(req.body);
    const{ related_problem, client_id, employee_id } = req.body;
    const order = await orderService.create({client_id, employee_id, related_problem} );

    return res.status(201).json(order);
}

module.exports ={
    getAll,
    create,
}