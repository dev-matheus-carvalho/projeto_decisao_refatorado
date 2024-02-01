import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllEmails } from 'src/app/shared/interfaces/email/getAllEmails';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetAllEmailsService {

  private baseUrl: string = 'http://localhost:3000/email';

  constructor(private http: HttpClient) { }

  public GetEmails(id: string | number): Promise<Array<GetAllEmails> | string> {
    return new Promise((resolve, reject) => {
      this.http.get<Array<GetAllEmails> | string>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: Array<GetAllEmails> | string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
