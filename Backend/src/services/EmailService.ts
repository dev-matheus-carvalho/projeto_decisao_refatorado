import { EmailModel } from '../models/EmailModel';
import { v4 } from 'uuid';

export async function verificarEmailPorCliente(
  email: string,
  idCliente: string,
) {
  return await EmailModel.findOne({ where: { email, idCliente } });
}

export async function verificaSeExisteEmailPorCliente(idCliente: string) {
  return await EmailModel.findAll({ where: { idCliente } });
}
export async function buscarEmailPorEleMesmo(email: string) {
  return await EmailModel.findOne({
    where: { email },
  });
}

export async function listarEmailsDeUmCliente(idCliente: string) {
  return await EmailModel.findOne({
    where: { idCliente, is_principal: true },
  });
}

export async function listarTodosOsEmails() {
  return await EmailModel.findAll();
}

export async function buscarEmail(idEmail: string) {
  return await EmailModel.findOne({ where: { idEmail } });
}

export async function createEmail(
  email: string,
  is_principal: string,
  idCliente: string,
) {
  return await EmailModel.create({
    idEmail: v4(),
    email,
    is_principal,
    idCliente,
  });
}

export async function updateEmail(
  idEmail: string,
  email: string,
  is_principal: string,
  idCliente: string,
) {
  return await EmailModel.update(
    {
      email,
      is_principal,
      idCliente,
    },
    { where: { idEmail, idCliente } },
  );
}

export async function updateDeEmailPrincipal(email: string, idCliente: string) {
  return await EmailModel.update(
    { is_principal: false },
    { where: { idCliente, email } },
  );
}

export async function updateMarcarPrincipal(email: string, idCliente: string) {
  return await EmailModel.update(
    { is_principal: true },
    { where: { idCliente, email } },
  );
}

export async function deleteEmail(idEmail: string) {
  return await EmailModel.destroy({ where: { idEmail } });
}
