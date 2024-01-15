import { NextFunction, Request, Response } from 'express';

export function createRepresentanteMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, identificacao, idCliente } = request.body;

  if (
    nome === undefined &&
    identificacao === undefined &&
    idCliente === undefined
  ) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }

  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchidos');
  }

  if (identificacao === undefined) {
    return response
      .status(400)
      .json('Campo identificacao deve ser preenchidos');
  }

  if (idCliente === undefined) {
    return response.status(400).json('Campo idCliente deve ser preenchidos');
  }

  next();
}

export function updateRepresentanteMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome, idCliente } = request.body;

  if (nome === undefined && idCliente === undefined) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }

  if (nome === undefined) {
    return response.status(400).json('Campo nome deve ser preenchidos');
  }

  if (idCliente === undefined) {
    return response.status(400).json('Campo idCliente deve ser preenchidos');
  }

  next();
}
