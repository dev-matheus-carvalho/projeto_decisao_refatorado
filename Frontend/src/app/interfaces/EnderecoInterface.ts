export interface GetEndereco {
  idEndereco?: string,
  cep?: string,
  logradouro?: string,
  numero?: string,
  complemento?: string,
  bairro?: string,
  cidade?: string,
  estado?: string,
  is_principal?: boolean,
  idCliente?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export interface EnderecoCompleto {
  endereco?: string,
  is_principal?: boolean,
}
