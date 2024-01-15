import { Response } from 'express';

export function CustomError(
  response: Response,
  msg: string,
  statusCode: number,
) {
  return response.status(statusCode).json(msg);
}
