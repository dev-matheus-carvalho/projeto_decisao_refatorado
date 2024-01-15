import { Descriptografar } from '../security/UsuarioSecurity';
import { UsuarioModel } from '../models/UsuarioModel';
import { GerarToken } from '../token/UserToken';

export async function loginUsuario(email: string, senha: string) {
  const usuarioExiste = await UsuarioModel.findOne({ where: { email } });
  if (!usuarioExiste) return true;

  const senhaEncriptada = usuarioExiste.senha;
  const verificaSenha = await Descriptografar(senha, senhaEncriptada);
  if (verificaSenha === false) return false;

  const token = await GerarToken(usuarioExiste.email);

  const dados = {
    token: token,
    usuario: {
      idUsuario: usuarioExiste.idUsuario,
      nome: usuarioExiste.nome,
      email: usuarioExiste.email,
    },
  };
  return dados;
}
