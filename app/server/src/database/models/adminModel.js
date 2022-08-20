module.exports =  (sequelize, DataTypes) => { 
    const admin = sequelize.define('admin', { 
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
    }
    
    );
    return admin;
};