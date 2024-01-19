import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsDeleteRepresentantesService {

  private baseUrl: string = 'http://localhost:3000/representante';

  constructor(private http: HttpClient) { }

  public DeleteRepresentantes(idRepresentante: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.delete<string>(`${this.baseUrl}/${idRepresentante}`).subscribe({
        next: (value: string) => resolve(value),
        error: (error) => reject(error),
      });
    });
  }
}
