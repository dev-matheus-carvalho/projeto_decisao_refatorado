import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllTelefones } from 'src/app/pages/clients/clients-update/models/interfaces/telefone/getAllTelefone/gelAllTelefonesInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetAllTelefonesService {

  private baseUrl: string = 'http://localhost:3000/telefone';

  constructor(private http: HttpClient) { }

  public GetTelefones(id: string | number): Promise<Array<GetAllTelefones> | string> {
    return new Promise((resolve, reject) => {
      this.http.get<Array<GetAllTelefones> | string>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: Array<GetAllTelefones> | string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
