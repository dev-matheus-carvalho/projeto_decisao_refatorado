import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class TelefoneModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idTelefone!: string;
  public numero!: string;
  public is_principal!: boolean;

  public idCliente!: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idTelefone: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        numero: {
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
        modelName: 'Telefone', // O nome da tabela
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
