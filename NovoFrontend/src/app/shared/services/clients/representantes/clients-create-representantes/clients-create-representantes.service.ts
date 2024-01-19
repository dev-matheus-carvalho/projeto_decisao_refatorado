import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsCreateRepresentantesService {

  private baseUrl: string = 'http://localhost:3000/representante';

  constructor(private http: HttpClient) { }

  public CreateRepresentantes(nome: string, identificacao: string, idCliente: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post<string>(this.baseUrl, {nome, identificacao, idCliente}).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
