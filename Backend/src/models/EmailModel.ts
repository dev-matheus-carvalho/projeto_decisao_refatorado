import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class EmailModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idEmail!: string;
  public email!: string;
  public is_principal!: boolean;

  public idCliente!: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idEmail: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        is_principal: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        idCliente: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },

      {
        sequelize: db,
        modelName: 'Email', // O nome da tabela
      },
    );
  }

  /* Coloque aqui suas associações */

  static association(models: Models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        field: 'idCliente',
        name: 'idCliente',
      },
    });
  }
}
