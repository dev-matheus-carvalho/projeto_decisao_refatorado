import { NextFunction, Request, Response } from 'express';

export function ClienteMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, identificacao, situacao, idUsuario } = request.body;

  if (
    nome === undefined &&
    identificacao === undefined &&
    situacao === undefined &&
    idUsuario === undefined
  ) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }

  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchido');
  }

  if (identificacao === undefined) {
    return response.status(400).json('Campo identificação deve ser preenchido');
  }

  if (situacao === undefined) {
    return response.status(400).json('Campo situação deve ser preenchido');
  }

  if (idUsuario === undefined) {
    return response.status(400).json('Indique um usuário');
  }
  next();
}

export function ClienteUpdateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, situacao, idUsuario } = request.body;

  if (nome === undefined && situacao === undefined && idUsuario === undefined) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }

  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchido');
  }

  if (situacao === undefined) {
    return response.status(400).json('Campo situação deve ser preenchido');
  }

  if (idUsuario === undefined) {
    return response.status(400).json('Indique um usuário');
  }
  next();
}
