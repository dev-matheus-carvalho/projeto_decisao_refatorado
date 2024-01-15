import { EnderecoModel } from '../models/EnderecoModel';
import { v4 } from 'uuid';

export async function verificarEnderecoPorCliente(
  cep: string,
  idCliente: string,
) {
  return await EnderecoModel.findOne({ where: { cep, idCliente } });
}

export async function verificaSeExisteEnderecoPorCliente(idCliente: string) {
  return await EnderecoModel.findAll({ where: { idCliente } });
}
export async function buscarEnderecoPorCep(cep: string) {
  return await EnderecoModel.findOne({
    where: { cep },
  });
}

export async function listarEnderecosDeUmCliente(idCliente: string) {
  return await EnderecoModel.findOne({
    where: { idCliente, is_principal: true },
  });
}

export async function listarTodosOsEnderecos() {
  return await EnderecoModel.findAll();
}

export async function buscarEndereco(idEndereco: string) {
  return await EnderecoModel.findOne({ where: { idEndereco } });
}

export async function createEndereco(
  cep: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string,
  is_principal: string,
  idCliente: string,
) {
  return await EnderecoModel.create({
    idEndereco: v4(),
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    is_principal,
    idCliente,
  });
}

export async function updateEndereco(
  idEndereco: string,
  cep: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string,
  is_principal: string,
  idCliente: string,
) {
  return await EnderecoModel.update(
    {
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      is_principal,
      idCliente,
    },
    { where: { idEndereco, idCliente } },
  );
}

export async function updateDeEnderecoPrincipal(
  cep: string,
  idCliente: string,
) {
  return await EnderecoModel.update(
    { is_principal: false },
    { where: { idCliente, cep } },
  );
}

export async function updateMarcarPrincipal(cep: string, idCliente: string) {
  return await EnderecoModel.update(
    { is_principal: true },
    { where: { idCliente, cep } },
  );
}

export async function deleteEndereco(idEndereco: string) {
  return await EnderecoModel.destroy({ where: { idEndereco } });
}
