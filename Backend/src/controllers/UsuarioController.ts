import { Request, Response } from 'express';
import {
  UsuarioExiste,
  createUsuario,
  deleteUsuario,
  getAllUsuarios,
  getUserByID,
  updateUsuarioSemSenha,
  updateUsuarios,
  usuarioLogado,
  verificaSenha,
} from '../services/UsuariosService';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { CustomError } from '../error/CustomError';
import { Encriptar } from '../security/UsuarioSecurity';
import { RequestExtends } from '../interfaces/RequestInterface';

export async function listarUsuarios(
  request: RequestExtends,
  response: Response,
) {
  try {
    const email = request.user;
    const usuario = await usuarioLogado(email);
    let data = {};

    const listaUsuarios = await getAllUsuarios();

    if (listaUsuarios.length === 0) {
      return response.status(401).json('Não há usuários no sistema');
    } else {
      data = {
        nome: usuario.nome,
        usuarios: listaUsuarios,
      };
      return response.status(200).json(data);
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao listar usuários!', 500);
  }
}

export async function pegarUsuarioPorID(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const usuario = await getUserByID(id);

    const email = request.user;
    const usuarioLogin = await usuarioLogado(email);
    let data = {};

    if (usuario === false)
      return response.status(400).json('Usuário não encontrado');

    data = {
      nome: usuarioLogin.nome,
      usuario: usuario,
    };
    return response.status(200).json(data);
  } catch (error) {
    CustomError(
      response,
      'Erro Interno: Verifque a identificação do usuário',
      500,
    );
  }
}

export async function criarUsuario(
  request: Request,
  response: Response,
): Promise<UsuarioInterface | unknown> {
  try {
    const { nome, email, senha } = request.body;
    const resultado = await createUsuario(nome, email, senha);

    if (resultado !== false) {
      return response.status(200).json('Usuário criado com sucesso!');
    } else {
      return response
        .status(400)
        .json('Este usuário já está cadastrado no sistema!');
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha na criação do usuário!', 500);
  }
}

export async function atualizarUsuario(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { nome, email, senha, novaSenha } = request.body;
    const { id } = request.params;

    const e_mail = request.user;
    const usuarioLogin = await usuarioLogado(e_mail);
    let data = {};

    // true (existe) ou false (não existe)
    const usuarioExiste = await UsuarioExiste(id);
    if (usuarioExiste === false)
      return response.status(400).json('Usuário não encontrado');

    // true (senha igual) ou false (senha diferente)
    const senhaOk = await verificaSenha(id, senha);
    if (senhaOk === false)
      return response
        .status(400)
        .json('Senha incompatível. Verifique sua senha atual');

    const newSenha = await Encriptar(novaSenha);

    await updateUsuarios(id, nome, email, newSenha);

    data = {
      nome: usuarioLogin.nome,
      msg: 'Usuário atualizado com sucesso',
    };

    return response.status(200).json(data);
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao atualizar usuário', 500);
  }
}

export async function atualizarUsuarioSemSenha(
  request: Request,
  response: Response,
) {
  try {
    const { nome, email } = request.body;
    const { id } = request.params;

    let data = {};

    // true (existe) ou false (não existe)
    const usuarioExiste = await UsuarioExiste(id);
    if (usuarioExiste === false)
      return response.status(400).json('Usuário não encontrado');

    await updateUsuarioSemSenha(id, nome, email);

    data = {
      msg: 'Usuário atualizado com sucesso',
    };

    return response.status(200).json(data);
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao atualizar usuário', 500);
  }
}

export async function deletarUsuario(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const usuarioDeletado = await deleteUsuario(id);

    const email = request.user;
    const usuario = await usuarioLogado(email);
    let data = {};

    if (usuarioDeletado === 1) {
      data = {
        nome: usuario.nome,
        msg: 'Usuário deletado com sucesso',
      };
      return response.status(200).json(data);
    } else {
      return response.status(400).json('Usuário não encontrado no sistema');
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao deletar usuário', 500);
  }
}
