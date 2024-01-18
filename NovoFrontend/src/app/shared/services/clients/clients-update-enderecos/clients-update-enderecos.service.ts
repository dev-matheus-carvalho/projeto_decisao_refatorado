import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enderecos } from 'src/app/shared/interfaces/enderecos/listarEnderecos/getEnderecosInterface';

@Injectable({
  providedIn: 'root',
})
export class ClientsUpdateEnderecosService {
  private baseUrl: string = 'http://localhost:3000/endereco';

  constructor(private http: HttpClient) {}

  public updateEnderecoById(
    id: string | number,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    is_principal: boolean | string,
    idCliente: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http
        .put<string>(`${this.baseUrl}/${id}`, {
          cep,
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          is_principal,
          idCliente
        })
        .subscribe({
          next: (value: string) => resolve(value),
          error: (error) => reject(error),
        });
    });
  }
}
