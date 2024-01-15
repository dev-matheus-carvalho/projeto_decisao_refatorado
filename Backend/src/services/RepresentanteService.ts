import { RepresentanteModel } from '../models/RepresentanteModel';
import { v4 } from 'uuid';

export async function verificaClienteERepresentante(idCliente: string) {
  return await RepresentanteModel.findAll({
    where: { idCliente },
  }); // Se não houver cliente associado com nenhum representante, retorna um array vazio
}

export async function verificaRepresentanteDuplicado(identificacao: string) {
  const representanteExist = await RepresentanteModel.findOne({
    where: { identificacao },
  });

  if (representanteExist === null) {
    return false;
  } else {
    return true;
  }
}

export async function verificaCadastroClienteDuplicado(
  identificacao: string,
  idCliente: string,
) {
  const result = await RepresentanteModel.findOne({
    where: { identificacao, idCliente },
  });

  if (result === null) {
    return false;
  } else {
    return true;
  }
}

export async function getAllRepresentante() {
  return await RepresentanteModel.findAll();
}

export async function getRepresentanteByID(idRepresentante: string) {
  return await RepresentanteModel.findOne({ where: { idRepresentante } });
}

export async function createRepresentante(
  nome: string,
  identificacao: string,
  idCliente: string,
) {
  return await RepresentanteModel.create({
    idRepresentante: v4(),
    nome: nome,
    identificacao: identificacao,
    idCliente: idCliente,
  });
}

export async function updateteRepresentante(
  idRepresentante: string,
  nome: string,
  idCliente: string,
) {
  return await RepresentanteModel.update(
    {
      nome,
      idCliente,
    },
    { where: { idRepresentante } },
  );
}

export async function deleteRepresentante(idRepresentante: string) {
  return await RepresentanteModel.destroy({ where: { idRepresentante } });
}

export async function deleteRepresentanteDoCliente(
  idRepresentante: string,
  idCliente: string,
) {
  return await RepresentanteModel.update(
    {
      idCliente: null,
    },
    { where: { idRepresentante, idCliente } },
  );
}

export async function representanteExiste(idRepresentante: string) {
  const resultado = await RepresentanteModel.findOne({
    where: { idRepresentante },
  });
  if (resultado === null) {
    return false;
  } else {
    return true;
  }
}
