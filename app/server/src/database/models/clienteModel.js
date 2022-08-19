module.exports =  (sequelize, DataTypes) => { 
    const Clientes = sequelize.define('Clientes', { 
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        
    },
    {
        timestamps: false,
    }
    
    );
    return Clientes;
};