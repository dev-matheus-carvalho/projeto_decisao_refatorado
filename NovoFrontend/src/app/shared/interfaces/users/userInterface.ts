export interface UserInterface {
  idUsuario: string;
  nome: string;
  email: string;
  senha?: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface GetUserInterface {
  nome: string;
  usuario: UserInterface
}
