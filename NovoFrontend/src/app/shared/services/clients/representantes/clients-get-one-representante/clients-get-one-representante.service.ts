import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetOneRepresentante } from 'src/app/shared/interfaces/representantes/GetOneRepresentante';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetOneRepresentanteService {

  private baseUrl: string = 'http://localhost:3000/representante';

  constructor(private http: HttpClient) { }

  public GetRepresentante(idRepresentante: string): Promise<GetOneRepresentante> {
    return new Promise((resolve, reject) => {
      this.http.get<GetOneRepresentante>(`${this.baseUrl}/${idRepresentante}`).subscribe({
        next: (value: GetOneRepresentante) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
