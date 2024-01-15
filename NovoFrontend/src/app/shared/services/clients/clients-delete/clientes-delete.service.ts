import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesDeleteService {

  private token: string = localStorage.getItem('token')!;
  private baseUrl: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  public deleteClients(id: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.http.delete<unknown>(`${this.baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: (value: unknown) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
