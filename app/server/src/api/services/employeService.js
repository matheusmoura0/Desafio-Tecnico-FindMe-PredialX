const { Employe }  =  require('../../database/models/');

const create = async (name, email, password) => {
    const employe =  await Employe.create({ name, email, password });
    return employe
}


module.exports = {
    create
}