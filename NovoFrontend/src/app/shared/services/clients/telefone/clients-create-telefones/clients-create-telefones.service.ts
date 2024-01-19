import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsCreateTelefonesService {

  private baseUrl: string = 'http://localhost:3000/telefone';

  constructor(private http: HttpClient) { }

  public CreateTelefones(numero: string, is_principal: boolean | string, idCliente: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post<string>(this.baseUrl, { numero, is_principal, idCliente }).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
