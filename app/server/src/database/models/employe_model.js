export default ( Sequelize, dataTypes ) => { 
    const Employe = Sequelize.define('employe', { 
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
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        password: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        
    });
    return Employe;
};