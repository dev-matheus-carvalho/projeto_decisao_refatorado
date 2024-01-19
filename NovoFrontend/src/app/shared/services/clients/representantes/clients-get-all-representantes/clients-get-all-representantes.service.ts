import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllRepresentantes } from 'src/app/shared/interfaces/representantes/GetAllRepresentantes';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetAllRepresentantesService {

  private baseUrl: string = 'http://localhost:3000/representante';

  constructor(private http: HttpClient) { }

  public GetRepresentantes(): Promise<Array<GetAllRepresentantes>> {
    return new Promise((resolve, reject) => {
      this.http.get<Array<GetAllRepresentantes>>(this.baseUrl).subscribe({
        next: (value: Array<GetAllRepresentantes>) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
