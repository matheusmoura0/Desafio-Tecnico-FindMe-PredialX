const { Clientes }  = require("./clienteModel");
const { Employes } = require("./employeModel");

module.exports = (sequelize, dataTypes) => {
    const ServiceOrder = sequelize.define('ServiceOrder', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        client_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: { model: 'Clientes', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        employee_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: { model: 'Employes', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        related_problem: {
            type: dataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        timestamps: false,
    }
    );



    ServiceOrder.associate = (models) => { 
        ServiceOrder.belongsTo(models.Clientes, {
            foreignKey: 'client_id',
            as: 'cliente',
            onDelete: 'CASCADE'
        });
        ServiceOrder.belongsTo(models.Employes, {
            foreignKey: 'employee_id',
            as: 'employe',
            onDelete: 'CASCADE'
        });
    }

    return ServiceOrder;
    
}