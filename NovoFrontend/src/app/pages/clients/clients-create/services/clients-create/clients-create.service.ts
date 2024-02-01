import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostClient } from 'src/app/pages/clients/clients-create/models/interfaces/clients/clients-post/ClientsPostInterface';

@Injectable({
  providedIn: 'root',
})
export class ClientsCreateService {
  private token: string = localStorage.getItem('token')!;
  private baseUrl: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  public postClient(
    nome: string,
    identificacao: string,
    nome_fantasia: string,
    nome_mae: string,
    situacao: string,
    idUsuario: string,
  ): Promise<PostClient> {
    return new Promise((resolve, reject) => {
      this.http
        .post<PostClient>(
          this.baseUrl,
          { nome, identificacao, nome_fantasia, nome_mae, situacao, idUsuario },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .subscribe({
          next: (value: PostClient) => resolve(value),
          error: (error) => reject(error),
        });
    });
  }
}
