export interface Cliente {
  idCliente: string,
  nome: string,
  identificacao: string,
  nome_fantasia: string,
  nome_mae: string,
  inscricao_municipal: string,
  inscricao_estadual: string,
  data_criacao: string,
  autor: string,
  situacao: string,
  idUsuario: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface GetClientesInterface {
  usuario: string,
  clientes: Array<Cliente>
}

export interface CreateCliente {
  nome: string,
  identificacao: string,
  nome_fantasia?: string,
  nome_mae?: string,
  inscricao_municipal?: string,
  inscricao_estadual?: string,
  situacao?: string,
  idUsuario: string
}

export interface MsgCreateClientesInterface {
  usuario: string,
  isCpf: boolean,
  idCliente: string,
  msg: string,
}

export interface UpdateCliente {
  nome: string,
  nome_fantasia?: string,
  nome_mae?: string,
  inscricao_municipal?: string,
  inscricao_estadual?: string,
  situacao?: string,
  idUsuario: string
}

export interface MsgUpdateClientesInterface {
  usuario: string,
  msg: string,
}
