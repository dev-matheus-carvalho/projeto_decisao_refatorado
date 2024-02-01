import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsUpdateEmailService {

  private baseUrl: string = 'http://localhost:3000/email';

  constructor(private http: HttpClient) { }

  public UpdateEmail(idEmail: string, email: string, is_principal: string, idCliente: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.put<string>(`${this.baseUrl}/${idEmail}`, {email, is_principal, idCliente}).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
