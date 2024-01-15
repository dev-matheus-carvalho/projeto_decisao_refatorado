import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class RepresentanteModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idRepresentante!: string;
  public nome!: string;
  public readonly identificacao!: string;

  public idCliente?: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idRepresentante: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        identificacao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        idCliente: {
          type: DataTypes.UUID,
          allowNull: true,
        },
      },

      {
        sequelize: db,
        modelName: 'Representante', // O nome da tabela
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
