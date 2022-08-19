const nameValidation = (req, res, next) => { 
    const { name } = req.body;
    if (!name) { 
        return res.status(400).json(
            { message : 'Nome é obrigatório'}
            );
    }
    next();
};


module.exports = { nameValidation };