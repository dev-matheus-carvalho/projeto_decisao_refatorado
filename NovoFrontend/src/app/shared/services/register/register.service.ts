import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl: string = 'http://localhost:3000/usuarios';

  constructor(private httt: HttpClient) { }

  public register(nome: string, email: string, senha: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.httt.post<string>(this.baseUrl, { nome, email, senha }).subscribe({
        next: (value: string) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
