module.exports =  (sequelize, DataTypes) => { 
    const administrador = sequelize.define('administrador', { 
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        
    },
    
    {
        timestamps: false,
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
    }
    
    );
    return administrador;
};