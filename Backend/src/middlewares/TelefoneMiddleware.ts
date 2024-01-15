import { NextFunction, Request, Response } from 'express';

export async function TelefoneMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { numero, idCliente, is_principal } = request.body;

  if (
    numero === undefined &&
    idCliente === undefined &&
    is_principal === undefined
  ) {
    return response
      .status(400)
      .json('Todos os campos precisam ser preenchidos');
  }

  if (numero === undefined) {
    return response.status(400).json('Campos número é obrigatório');
  }

  if (is_principal === undefined) {
    return response.status(400).json('Campos is_principal é obrigatório');
  }

  if (idCliente === undefined) {
    return response.status(400).json('Campos idCliente é obrigatório');
  }
  next();
}
