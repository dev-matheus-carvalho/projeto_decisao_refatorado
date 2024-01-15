import { v4 } from 'uuid';
import { ClienteModel } from '../models/ClienteModel';

export function identificarCPF(identificacao: string) {
  const isCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return isCPF.test(identificacao);
}

export async function mesmoCliente(identificacao: string) {
  const mesmoCliente = await ClienteModel.findOne({
    where: { identificacao },
  });

  if (mesmoCliente === null) {
    return true; // Crie um novo cliente
  } else {
    return false;
  }
}

export async function getAllClientes() {
  return await ClienteModel.findAll();
}

export async function findClienteByID(idCliente: string) {
  const cliente = await ClienteModel.findOne({ where: { idCliente } });
  if (cliente === null) {
    return false;
  } else {
    return cliente;
  }
}

export async function mesmoAutor(identificacao: string, autor: string) {
  const mesmoAutor = await ClienteModel.findOne({
    where: { identificacao, autor },
  });

  if (mesmoAutor === null) {
    return true; // Crie um novo cliente
  } else {
    return false;
  }
}

export async function createCliente(
  nome: string,
  identificacao: string,
  nome_fantasia: string,
  nome_mae: string,
  inscricao_municipal: string,
  inscricao_estadual: string,
  autor: string,
  situacao: string,
  idUsuario: string,
) {
  return await ClienteModel.create({
    idCliente: v4(),
    nome: nome,
    identificacao: identificacao,
    nome_fantasia: nome_fantasia,
    nome_mae: nome_mae,
    inscricao_municipal: inscricao_municipal,
    inscricao_estadual: inscricao_estadual,
    data_criacao: new Date(),
    autor: autor,
    situacao,
    idUsuario: idUsuario,
  });
}

export async function updateCliente(
  idCliente: string,
  nome: string,
  nome_fantasia: string,
  nome_mae: string,
  inscricao_municipal: string,
  inscricao_estadual: string,
  situacao: string,
  idUsuario: string,
) {
  const clienteAtualizado = await ClienteModel.update(
    {
      nome,
      nome_fantasia,
      nome_mae,
      inscricao_municipal,
      inscricao_estadual,
      situacao,
      idUsuario,
    },
    { where: { idCliente } },
  );

  return clienteAtualizado;
}

export async function deleteCliente(idCliente: string) {
  return await ClienteModel.destroy({ where: { idCliente } });
}
