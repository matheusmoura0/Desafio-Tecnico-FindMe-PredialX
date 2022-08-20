const adminValidation = (req, res, next) => { 
    const { email, password } = req.body;
    if (!email) { 
        return res.status(400).json(
            { message : 'email é obrigatório'}
            );
    }
    if (!password) {	
        return res.status(400).json(
            { message : 'passowrd é obrigatório'}
            );
     }
    next();
}

module.exports = { adminValidation };