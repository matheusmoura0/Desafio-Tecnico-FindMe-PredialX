const adminValidation = (req, res, next) => { 
    const { email, password } = req.body;
    if (!email) { 
        return res.status(400).json(
            { message : 'O email é obrigatório'}
            );
    }
    if (!password) {	
        return res.status(400).json(
            { message : ' A senha é obrigatório'}
            );
     }
    next();
};

module.exports = { adminValidation };