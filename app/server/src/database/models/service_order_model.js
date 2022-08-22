const { Clientes }  = require("./clienteModel");
const { Colaboradores } = require("./employeModel");

module.exports = (sequelize, dataTypes) => {
    const OrderDeServiço = sequelize.define('OrderDeServiço', {
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
            references: { model: 'Colaboradores', key: 'id' },
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



    OrderDeServiço.associate = (models) => { 
        OrderDeServiço.belongsTo(models.Clientes, {
            foreignKey: 'client_id',
            as: 'cliente',
            onDelete: 'CASCADE'
        });
        OrderDeServiço.belongsTo(models.Colaboradores, {
            foreignKey: 'employee_id',
            as: 'employe',
            onDelete: 'CASCADE'
        });
    }

    return OrderDeServiço;
    
}