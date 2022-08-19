const clienteService = require ('../services/clienteService');

const create = async (req, res) => { 
    const{ name } = req.body;
    if (!name) { 
        return res.status(400).json(
            { message : 'O Nome do cliente é obrigatório'}
            );
    }
    const cliente = await clienteService.create(name);

    return res.status(201).json(cliente);
};

const findAll = async (_req, res) => { 
    const clientes =  await clienteService.getAll();

    res.status(200).json(clientes);
}

const getById =  async (req, res) => { 
    const{ id } = req.params;
    const cliente = await  clienteService.getById(id);
    if (!cliente) { 
        return res.status(404).json(
            { message : 'Cliente não encontrado'}
            );
    }

    return res.status(200).json(cliente);
}

const update = async  (req, res) => { 
    try {
        const{ id } = req.params;
        const{ name } = req.body;
    
        const cliente =  await clienteService.update(id, name);
    
        return res.status(200).json(cliente);
    } catch (error) { 
        return res.status(500).json(
            { message : 'Erro ao atualizar cliente'}
            );
    }
}

const deletebyId = async (req, res) => { 
    try {
        const{ id } = req.params;
        await clienteService.deletebyId(id);
        
        return res.status(200).json(
            { message : 'Cliente deletado com sucesso'}
            );
    } catch (error) { 
        return res.status(500).json(
            { message : 'Erro ao deletar cliente'}
            );
    }
}

module.exports = { 
    create,
    findAll,
    getById,
    update,
    deletebyId
}