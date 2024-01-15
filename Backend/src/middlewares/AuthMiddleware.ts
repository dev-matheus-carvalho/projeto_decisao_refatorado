import { NextFunction, Response } from 'express';
import { VerificarToken } from '../token/UserToken';
import { RequestExtends } from '../interfaces/RequestInterface';

export async function SessaoToken(
  request: RequestExtends,
  response: Response,
  next: NextFunction,
) {
  try {
    const jwtByUser = request.headers.authorization;
    const jwt = jwtByUser.split(' ').pop();
    const usuario = await VerificarToken(`${jwt}`);

    if (typeof usuario === 'object' && usuario.email) {
      request.user = usuario.email; // Pega o email do usuário
    } else {
      // O usuário não é um objeto JwtPayload, então retorna um erro
      response.status(500).json('Não o campo email. Verifique os dados');
    }

    next();
  } catch (error) {
    response.status(400).json('Operação não autorizada');
  }
}
