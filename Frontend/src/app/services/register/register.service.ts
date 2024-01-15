import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  fazerRegistro(nome: string, email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, { nome, email, senha })
      .subscribe({
        next: (value: any) => resolve(value),
        error: error => reject(error),
      });
    });
  }

}
