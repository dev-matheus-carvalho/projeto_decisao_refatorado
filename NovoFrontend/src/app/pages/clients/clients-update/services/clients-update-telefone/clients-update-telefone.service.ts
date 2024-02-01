import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsUpdateTelefoneService {

  private baseUrl: string = 'http://localhost:3000/telefone';

  constructor(private http: HttpClient) { }

  public UpdateTelefone(id: string | number, numero: string, is_principal: string, idCliente: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.put<string>(`${this.baseUrl}/${id}`, {numero, is_principal, idCliente}).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
