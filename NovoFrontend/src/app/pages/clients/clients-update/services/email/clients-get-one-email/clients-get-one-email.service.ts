import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetOneEmails } from 'src/app/pages/clients/clients-update/models/interfaces/email/getOneEmail';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetOneEmailService {

  private baseUrl: string = 'http://localhost:3000/email/buscaremail';

  constructor(private http: HttpClient) { }

  public GetOneEmail(idEmail: string): Promise<GetOneEmails> {
    return new Promise((resolve, reject) => {
      this.http.get<GetOneEmails>(`${this.baseUrl}/${idEmail}`).subscribe({
        next: (value: GetOneEmails) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
