import { JwtPayload } from 'jsonwebtoken';
import { v4 } from 'uuid';

import { Descriptografar, Encriptar } from '../security/UsuarioSecurity';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { UsuarioModel } from '../models/UsuarioModel';

export async function usuarioLogado(email: string | JwtPayload) {
  return await UsuarioModel.findOne({ where: { email } });
}

export async function getAllUsuarios(): Promise<UsuarioModel[]> {
  const listaDeUsuarios = await UsuarioModel.findAll();
  const data = [];

  for (const dado of listaDeUsuarios) {
    data.push({
      idUsuario: dado.idUsuario,
      nome: dado.nome,
      email: dado.email,
    });
  }
  return data;
}

export async function getUserByID(id: string) {
  const usuario = await UsuarioModel.findOne({ where: { idUsuario: id } });

  if (!usuario) return false;

  return usuario;
}

export async function createUsuario(
  nome: string,
  email: string,
  senha: string,
): Promise<UsuarioInterface | false | unknown> {
  const usuarioExiste = await UsuarioModel.findOne({ where: { email } });

  if (usuarioExiste === null) {
    // crie o usuario
    const senhaEncriptografada = await Encriptar(senha);
    return await UsuarioModel.create({
      idUsuario: v4(),
      nome: nome,
      email: email,
      senha: senhaEncriptografada,
    });
  } else {
    return false;
  }
}

export async function updateUsuarios(
  id: string,
  nome: string,
  email: string,
  senha: string,
) {
  const updateUsuario = await UsuarioModel.update(
    {
      nome: nome,
      email: email,
      senha: senha,
    },
    { where: { idUsuario: id }, returning: ['*'] },
  );
  return updateUsuario;
}

export async function updateUsuarioSemSenha(
  id: string,
  nome: string,
  email: string,
) {
  const updateUsuario = await UsuarioModel.update(
    {
      nome: nome,
      email: email,
    },
    { where: { idUsuario: id }, returning: ['*'] },
  );
  return updateUsuario;
}

export async function deleteUsuario(id: string) {
  return await UsuarioModel.destroy({ where: { idUsuario: id } });
}

export async function UsuarioExiste(id: string) {
  const resultado = await UsuarioModel.findOne({ where: { idUsuario: id } });

  if (!resultado) return false;

  return true;
}

export async function verificaSenha(id: string, senha: string) {
  const usuarioExiste = await UsuarioModel.findOne({
    where: { idUsuario: id },
  });
  if (!usuarioExiste) return false;

  const senhaEncriptada = usuarioExiste.senha;
  const verificaSenha = await Descriptografar(senha, senhaEncriptada);
  if (verificaSenha === false) return false;
  return true;
}
