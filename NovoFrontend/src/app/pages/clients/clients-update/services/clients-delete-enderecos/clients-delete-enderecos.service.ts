import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsDeleteEnderecosService {
  private baseUrl: string = 'http://localhost:3000/endereco';

  constructor(private http: HttpClient) {}

  public deleteEndereco(id: string | number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.delete<string>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
