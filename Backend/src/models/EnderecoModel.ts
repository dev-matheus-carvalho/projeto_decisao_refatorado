import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class EnderecoModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idEndereco!: string;
  public cep!: string;
  public logradouro!: string;
  public numero?: string;
  public complemento!: string;
  public bairro!: string;
  public cidade!: string;
  public estado!: string;
  public is_principal!: boolean;

  public idCliente!: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idEndereco: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        cep: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        logradouro: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        numero: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        complemento: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cidade: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        estado: {
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
        modelName: 'Endereco', // O nome da tabela
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
