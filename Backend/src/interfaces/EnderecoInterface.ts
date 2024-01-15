export interface EnderecoInterface {
  idEndereco: string;
  cep: string;
  logradouro: string;
  numero?: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  is_principal: boolean;
}
