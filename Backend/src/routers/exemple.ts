import { Router } from 'express';
import { v4 } from 'uuid';

import { ClienteModel } from '../models/ClienteModel';
import { UsuarioModel } from '../models/UsuarioModel';
import { EmailModel } from '../models/EmailModel';
import { EnderecoModel } from '../models/EnderecoModel';
import { TelefoneModel } from '../models/TelefoneModel';
import { RepresentanteModel } from '../models/RepresentanteModel';

const router = Router();

router.get('/', async (resquest, response) => {
  // const a = await UsuarioModel.create({
  //   idUsuario: v4(),
  //   nome: 'Matheus',
  //   email: 'matheus@gamail.com',
  //   senha: '1234',
  // });

  // const a = await ClienteModel.create({
  //   idCliente: v4(),
  //   nome: 'Matheus 2',
  //   identificacao: 'Ativo',
  //   // nome_fantasia: '',
  //   // nome_mae: '',
  //   // inscrição_municipal: '',
  //   // inscrição_estadual: '',
  //   data_criacao: new Date(),
  //   idUsuario: '5257f37f-713d-42ef-ab67-5ac07c1d79a9',
  // });

  // const a = await EmailModel.create({
  //   idEmail: v4(),
  //   email: 'matheus1@gamail.com',
  //   is_principal: true,
  //   idCliente: '4456106d-a7ed-4c5e-ab29-9a6c27de5020',
  // });

  // const a = await EnderecoModel.create({
  //   idEndereco: v4(),
  //   cep: '1',
  //   logradouro: 'Logradouro',
  //   complemento: 'Complemento 1',
  //   bairro: 'bairro',
  //   cidade: 'cidade 1',
  //   estado: 'estado 1',
  //   is_principal: true,
  //   idCliente: '4456106d-a7ed-4c5e-ab29-9a6c27de5020',
  // });

  // const a = await TelefoneModel.create({
  //   idTelefone: v4(),
  //   numero: '1',
  //   is_principal: true,
  //   idCliente: '4456106d-a7ed-4c5e-ab29-9a6c27de5020',
  // });

  const a = await RepresentanteModel.create({
    idRepresentante: v4(),
    nome: 'Representante 1',
    identificacao: 'Ativo',
    idCliente: '4456106d-a7ed-4c5e-ab29-9a6c27de5020',
  });

  response.send(a);
});

export { router };
