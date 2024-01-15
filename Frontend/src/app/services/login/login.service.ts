import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from 'src/app/interfaces/LoginInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenu: EventEmitter<boolean> = new EventEmitter();
  baseUrl: string = 'http://localhost:3000/login';

  lembrar: boolean = false;
  usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient) { }

  fazerLogin(email: string, senha: string, lembrarLogin: boolean): Promise<LoginInterface> {
    return new Promise((resolve, reject) => {
      this.http.post<LoginInterface>(this.baseUrl, { email, senha })
      .subscribe({
        next: (value: any) => {
          resolve(value);
          this.lembrar = lembrarLogin;
          this.usuarioAutenticado = true;
          console.log('Login service: ', value)
          this.mostrarMenu.emit(true);
        },
        error: error => {
          reject(error);
          this.usuarioAutenticado = false;
        },
      });
    });
  }

  ocultarMenu() {
    this.mostrarMenu.emit(false);
  }

  usuarioEstaAutenticado() {
    const token = localStorage.getItem('token');

    let existeToken!: boolean;
    if(token !== '') {
      existeToken = true;
      this.mostrarMenu.emit(true);
      return this.usuarioAutenticado || existeToken;
    } else {
      return false;
    }
  }

}
