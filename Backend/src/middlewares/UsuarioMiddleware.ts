import { NextFunction, Request, Response } from 'express';

export function UsuarioFormMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, email, senha } = request.body;

  if (nome === undefined && email === undefined && senha === undefined) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }
  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchido');
  }
  if (email === undefined) {
    return response.status(400).json('Campo email deve ser preenchido');
  }
  if (senha === undefined) {
    return response.status(400).json('Campo senha deve ser preenchido');
  }
  next();
}

export function UpdateUsuarioMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, email, senha, novaSenha } = request.body;

  if (
    nome === undefined &&
    email === undefined &&
    senha === undefined &&
    novaSenha === undefined
  ) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }
  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchido');
  }
  if (email === undefined) {
    return response.status(400).json('Campo email deve ser preenchido');
  }
  if (senha === undefined) {
    return response.status(400).json('Campo senha deve ser preenchido');
  }
  if (novaSenha === undefined) {
    return response.status(400).json('Campo nova senha deve ser preenchido');
  }
  next();
}

export function UpdateUsuarioSemSenhaMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, email } = request.body;

  if (nome === undefined && email === undefined) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }
  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchido');
  }
  if (email === undefined) {
    return response.status(400).json('Campo email deve ser preenchido');
  }

  next();
}
