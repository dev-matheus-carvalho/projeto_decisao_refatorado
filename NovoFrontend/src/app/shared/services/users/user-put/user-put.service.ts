import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPutService {
  private token = localStorage.getItem('token');

  private baseUrlSemSenha: string = 'http://localhost:3000/usuarios/nopassword';
  private baseUrlComSenha: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  public updateSemSenha(nome: string, email: string, usuario: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.http.put<unknown>(`${this.baseUrlSemSenha}/${usuario}`, { nome, email }, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: (value: unknown) => resolve(value),
        error: error => reject(error)
      });
    });
  }

  public updateComSenha(
    nome: string,
    email: string,
    senha: string,
    novaSenha: string,
    usuario: string
  ): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.http.put<unknown>(`${this.baseUrlComSenha}/${usuario}`,
      { nome, email, senha, novaSenha }, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: (value: unknown) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
