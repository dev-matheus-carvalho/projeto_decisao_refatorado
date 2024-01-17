export interface GetEnderecosInterface {
  enderecos: Array<Enderecos>
}

export interface Enderecos {
  idEndereco: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  is_principal: boolean;
  idCliente: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
