import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientesById } from 'src/app/shared/interfaces/clients/clientes-get-by-id/ClientsGetByIdInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetByIdService {

  private token: string = localStorage.getItem('token')!;
  private baseUrl: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  public getClientsById(id: string | number): Promise<ClientesById> {
    return new Promise((resolve, reject) => {
      this.http.get<ClientesById>(`${this.baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: (value: ClientesById) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
