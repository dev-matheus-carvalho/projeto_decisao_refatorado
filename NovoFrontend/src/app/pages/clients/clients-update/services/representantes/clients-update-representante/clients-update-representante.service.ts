import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsUpdateRepresentanteService {
  private baseUrl: string = 'http://localhost:3000/representante';

  constructor(private http: HttpClient) {}

  public UpdateRepresentante(
    idRepresentante: string,
    nome: string,
    idCliente: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http
        .put<string>(`${ this.baseUrl }/${ idRepresentante }`, { nome, idCliente })
        .subscribe({
          next: (value: string) => resolve(value),
          error: (error) => reject(error),
        });
    });
  }
}
