import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsDeleteTelefoneService {

  private baseUrl: string = 'http://localhost:3000/telefone';

  constructor(private http: HttpClient) { }

  public DeleteTelefone(id: string | number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.delete<string>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
