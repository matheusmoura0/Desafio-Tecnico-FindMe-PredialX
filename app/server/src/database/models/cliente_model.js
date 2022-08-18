export default ( Sequelize, dataTypes ) => { 
    const Cliente = Sequelize.define('cliente', { 
        id: { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        
    });
    return Cliente;
};