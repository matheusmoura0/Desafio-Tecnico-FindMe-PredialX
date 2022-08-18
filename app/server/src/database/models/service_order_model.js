import cliente_model from "./cliente_model";
import employe_model from "./empleado_model";

export default  (Sequelize, dataTypes) => {
    const ServiceOrder = Sequelize.define('service_order', {
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
    ServiceOrder.belongsTo(cliente_model, { foreignKey: 'client_id', as: 'id_client' });
    ServiceOrder.belongsTo(employe_model, { foreignKey: 'employee_id', as: 'id_employe' });


    return ServiceOrder;
}