import { NextFunction, Request, Response } from 'express';

export async function EmailMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { email, is_principal, idCliente } = request.body;

  if (
    email === undefined &&
    idCliente === undefined &&
    is_principal === undefined
  ) {
    return response
      .status(400)
      .json('Todos os campos precisam ser preenchidos');
  }

  if (email === undefined) {
    return response.status(400).json('Campos email é obrigatório');
  }

  if (is_principal === undefined) {
    return response.status(400).json('Campos is_principal é obrigatório');
  }

  if (idCliente === undefined) {
    return response.status(400).json('Campos idCliente é obrigatório');
  }
  next();
}
