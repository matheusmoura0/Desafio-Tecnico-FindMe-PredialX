const nameValidation = async (req, res, next) => { 
    const { name } = req.body;
    if (!name) { 
        return res.status(400).json(
            { message : 'Nome é obrigatório'}
            );
    }
    if (typeof(name) !== 'string') { 
        return res.status(400).json(
            { message : 'Nome deve ser uma string'}
            );
    }
    next();
}

const emailValidation = async (req, res, next) => { 
    const { email } = req.body;
    const validEmail = (email) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
        return emailRegex.test(email)
        }
    if (!email) { 
        return res.status(400).json(
            { message : 'Email é obrigatório'}
            );
    }
    if (typeof(email) !== 'string') { 
        return res.status(400).json(
            { message : 'Email deve ser uma string'}
            );
    }
    if (!validEmail(email)) {
        return res.status(400).json(
            { message : 'Email inválido'}
            );
    }
    next();
}

const passwordValidation = async (req, res, next) => { 
    const { password } = req.body;
    if (!password) { 
        return res.status(400).json(
            { message : 'Senha é obrigatório'}
            );
    }
    if (password < 6) { 
        return res.status(400).json(
            { message : 'Senha deve ter no minimo 6 caracteres'}
            );
    }
    next();
}

const existenceCondition = (req, res, next) => { 
    const { id } = req.params; 
}