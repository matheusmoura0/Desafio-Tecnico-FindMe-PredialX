const cliente_model = require("./clienteModel");
const employe_model = require("./clienteModel");

module.exports = (sequelize, dataTypes) => {
    const ServiceOrder = sequelize.define('service_order', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        client_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: { model: 'clients', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        employee_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: { model: 'employes', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        related_problem: {
            type: dataTypes.STRING,
            allowNull: false
        }
    });



    return ServiceOrder;
}