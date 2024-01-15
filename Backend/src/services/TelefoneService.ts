import { TelefoneModel } from '../models/TelefoneModel';
import { v4 } from 'uuid';

export async function verificarTelefonePorCliente(
  numero: string,
  idCliente: string,
) {
  return await TelefoneModel.findOne({ where: { numero, idCliente } });
}

export async function verificaSeExisteTelefonePorCliente(idCliente: string) {
  return await TelefoneModel.findAll({ where: { idCliente } });
}
export async function buscarTelefonePorNumero(numero: string) {
  return await TelefoneModel.findOne({
    where: { numero },
  });
}

export async function listarTelefonesDeUmCliente(idCliente: string) {
  return await TelefoneModel.findOne({
    where: { idCliente, is_principal: true },
  });
}

export async function listarTodosOsTelefones() {
  return await TelefoneModel.findAll();
}

export async function buscarTelefone(idTelefone: string) {
  return await TelefoneModel.findOne({ where: { idTelefone } });
}

export async function createTelefone(
  numero: string,
  is_principal: string,
  idCliente: string,
) {
  return await TelefoneModel.create({
    idEndereco: v4(),
    numero,
    is_principal,
    idCliente,
  });
}

export async function updateTelefone(
  idTelefone: string,
  numero: string,
  is_principal: string,
  idCliente: string,
) {
  return await TelefoneModel.update(
    {
      numero,
      is_principal,
      idCliente,
    },
    { where: { idTelefone, idCliente } },
  );
}

export async function updateDeTelefonePrincipal(
  numero: string,
  idCliente: string,
) {
  return await TelefoneModel.update(
    { is_principal: false },
    { where: { idCliente, numero } },
  );
}

export async function updateMarcarPrincipal(numero: string, idCliente: string) {
  return await TelefoneModel.update(
    { is_principal: true },
    { where: { idCliente, numero } },
  );
}

export async function deleteTelefone(idTelefone: string) {
  return await TelefoneModel.destroy({ where: { idTelefone } });
}
