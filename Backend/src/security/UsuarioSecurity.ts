import { hash, compare } from 'bcryptjs';

export async function Encriptar(senha: string) {
  return await hash(senha, 8);
}

export async function Descriptografar(
  senha: string,
  senhaEncriptografada: string,
) {
  return await compare(senha, senhaEncriptografada);
}
