import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetOneTelefone } from 'src/app/shared/interfaces/telefones/getOneTelefone/getOneTelefoneInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetOneTelefoneService {
  private baseUrl: string = 'http://localhost:3000/telefone/buscartelefone';

  constructor(private http: HttpClient) { }

  public GetOneTelefone(id: string | number): Promise<GetOneTelefone> {
    return new Promise((resolve, reject) => {
      this.http.get<GetOneTelefone>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: GetOneTelefone) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
