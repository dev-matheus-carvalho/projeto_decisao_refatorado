import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientsReadInterface } from 'src/app/pages/clients/clients-read/models/interfaces/clients/clients-read/clientsReadInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsReadService {

  private baseUrl: string = 'http://localhost:3000/clientes';
  private token: string = localStorage.getItem('token')!;

  constructor(private http: HttpClient) { }

  public getClientes(): Promise<ClientsReadInterface> {
    return new Promise((resolve, reject) => {
      this.http.get<ClientsReadInterface>(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: value => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
