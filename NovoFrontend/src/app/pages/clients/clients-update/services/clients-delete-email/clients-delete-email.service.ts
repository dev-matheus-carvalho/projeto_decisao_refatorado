import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsDeleteEmailService {

  private baseUrl: string = 'http://localhost:3000/email';

  constructor(private http: HttpClient) { }

  public DeleteEmail(idEmail: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.delete<string>(`${this.baseUrl}/${idEmail}`).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
