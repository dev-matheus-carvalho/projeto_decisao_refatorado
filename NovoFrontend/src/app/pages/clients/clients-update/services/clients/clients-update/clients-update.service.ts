import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsUpdateService {
  private token: string = localStorage.getItem('token')!;
  // public idUsuario: string = localStorage.getItem('idUsuario')!;
  private baseUrl: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  public updateClient(
    idCliente: string | number,
    nome: string,
    nome_fantasia: string,
    nome_mae: string,
    inscricao_municipal: string,
    inscricao_estadual: string,
    situacao: string,
    idUsuario: string
  ): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.http
        .put<unknown>(
          `${this.baseUrl}/${idCliente}`,
          { nome, nome_fantasia, nome_mae, inscricao_municipal, inscricao_estadual, situacao, idUsuario },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .subscribe({
          next: (value: unknown) => resolve(value),
          error: (error) => reject(error),
        });
    });
  }
}
