export interface LoginInterface {
  token: string;
  usuario: UsuarioLogin;
};

interface UsuarioLogin {
  idUsuario: string;
  nome: string;
  email: string;
}
