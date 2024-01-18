import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllTelefones } from 'src/app/shared/interfaces/telefones/getAllTelefone/gelAllTelefonesInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetAllTelefonesService {

  private baseUrl: string = 'http://localhost:3000/telefone';

  constructor(private http: HttpClient) { }

  public GetTelefones(id: string | number): Promise<Array<GetAllTelefones>> {
    return new Promise((resolve, reject) => {
      this.http.get<Array<GetAllTelefones>>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: Array<GetAllTelefones>) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
