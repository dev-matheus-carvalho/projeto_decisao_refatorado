import { ClienteEnum } from '../enum/ClienteEnum';

export interface ClienteInterface {
  idCliente: string;
  name: string;
  identificacao: string;
  nome_fantasia: string;
  nome_mae: string;
  inscricao_municipal: string;
  inscricao_estadual: string;
  data_cadastro: Date;
  situacao: ClienteEnum;
  idUsuario: string;
}

export interface ClienteBodyInterface {
  name: string;
  identificacao: string;
  nome_fantasia: string;
  nome_mae: string;
  inscricao_municipal: string;
  inscricao_estadual: string;
  situacao: ClienteEnum;
  idUsuario: string;
}
