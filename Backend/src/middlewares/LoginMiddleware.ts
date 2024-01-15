import { NextFunction, Request, Response } from 'express';

export function LoginMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { email, senha } = request.body;

  if (email === undefined && senha === undefined) {
    return response.status(400).json('Todos os campos devem ser preenchidos');
  }

  if (email === undefined) {
    return response.status(400).json('Campo email deve ser preenchido');
  }

  if (senha === undefined) {
    return response.status(400).json('Campo senha deve ser preenchido');
  }
  next();
}
