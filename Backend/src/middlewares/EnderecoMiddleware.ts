import { NextFunction, Request, Response } from 'express';

export function EnderecoMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const {
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    is_principal,
    idCliente,
  } = request.body;

  if (
    cep === undefined &&
    logradouro === undefined &&
    numero === undefined &&
    complemento === undefined &&
    bairro === undefined &&
    cidade === undefined &&
    estado === undefined &&
    is_principal === undefined &&
    idCliente === undefined
  ) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }

  if (cep === undefined) {
    return response.status(400).json('Campo cep deve ser preenchido');
  }
  if (logradouro === undefined) {
    return response.status(400).json('Campo logradouro deve ser preenchido');
  }
  if (numero === undefined) {
    return response.status(400).json('Campo numero deve ser preenchido');
  }
  if (complemento === undefined) {
    return response.status(400).json('Campo complemento deve ser preenchido');
  }
  if (bairro === undefined) {
    return response.status(400).json('Campo bairro deve ser preenchido');
  }
  if (cidade === undefined) {
    return response.status(400).json('Campo cidade deve ser preenchido');
  }
  if (estado === undefined) {
    return response.status(400).json('Campo estado deve ser preenchido');
  }
  if (is_principal === undefined) {
    return response.status(400).json('Campo is_principal deve ser preenchido');
  }
  if (idCliente === undefined) {
    return response.status(400).json('Campo idCliente deve ser preenchido');
  }

  next();
}
