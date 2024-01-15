import { Sequelize } from 'sequelize';

import { UsuarioModel } from '../models/UsuarioModel';
import { ClienteModel } from '../models/ClienteModel';
import { EmailModel } from '../models/EmailModel';
import { EnderecoModel } from '../models/EnderecoModel';
import { TelefoneModel } from '../models/TelefoneModel';
import { RepresentanteModel } from '../models/RepresentanteModel';

export class Models {
  /* Coloque aqui o nome das suas entidades como o exemplo abaixo */
  public usuario: typeof UsuarioModel = UsuarioModel;
  public cliente: typeof ClienteModel = ClienteModel;
  public email: typeof EmailModel = EmailModel;
  public endereco: typeof EnderecoModel = EnderecoModel;
  public telefone: typeof TelefoneModel = TelefoneModel;
  public representante: typeof RepresentanteModel = RepresentanteModel;

  constructor(db: Sequelize) {
    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].initialization !== undefined
      ) {
        this[pModel].initialization(db);
      }
    });

    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].association !== undefined
      ) {
        this[pModel].association(this);
      }
    });
  }
}
