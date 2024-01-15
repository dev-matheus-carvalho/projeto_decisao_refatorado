import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUserInterface } from 'src/app/shared/interfaces/users/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserGetService {
  private token = localStorage.getItem('token');

  private baseUrl: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  public getUser(usuario: string): Promise<GetUserInterface> {
    return new Promise((resolve, reject) => {
      this.http.get<GetUserInterface>(`${this.baseUrl}/${usuario}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: (value: GetUserInterface) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
