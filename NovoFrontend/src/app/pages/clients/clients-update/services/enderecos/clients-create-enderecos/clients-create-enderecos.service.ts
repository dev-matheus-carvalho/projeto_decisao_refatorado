import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Enderecos,
  GetEnderecosInterface,
} from 'src/app/pages/clients/clients-update/models/interfaces/endereco/listarEnderecos/getEnderecosInterface';

@Injectable({
  providedIn: 'root',
})
export class ClientsCreateEnderecosService {
  private baseUrl: string = 'http://localhost:3000/endereco';

  constructor(private http: HttpClient) {}

  public createEndereco(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    is_principal: string | boolean,
    idCliente: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http
        .post<string>(this.baseUrl, {
          cep,
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          is_principal,
          idCliente,
        })
        .subscribe({
          next: (value: string) => resolve(value),
          error: (error) => reject(error),
        });
    });
  }
}
