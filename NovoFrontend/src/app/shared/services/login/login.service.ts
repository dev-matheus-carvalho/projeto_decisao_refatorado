import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LoginInterface } from '../../interfaces/authentication/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'http://localhost:3000/login';

  public mostrarMenu: EventEmitter<boolean> = new EventEmitter();

  private lembrarLogin: boolean = false;
  private usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient) { }

  public login(email: string, senha: string, lembrarLogin: boolean): Promise<LoginInterface> {
    return new Promise((resolve, reject) => {
      this.http.post<LoginInterface>(this.baseUrl, { email, senha })
      .subscribe({
        next: (value: LoginInterface) => {
          resolve(value);
          this.lembrarLogin = lembrarLogin;
          this.usuarioAutenticado = true;
          this.mostrarMenu.emit(true);

          localStorage.setItem('page', 'home');
          localStorage.setItem('idUsuario', value.usuario.idUsuario);
          localStorage.setItem('token', value.token);
          localStorage.setItem('lembrarAutenticacao', String(lembrarLogin));
          localStorage.setItem('usuario', value.usuario.nome);

        },
        error: error => reject(error)
      })
    });
  }

  public usuarioEstaAutenticado() {
    const token = localStorage.getItem('token');
    let existeToken!: boolean;

    if (token !== '') {
      existeToken = true;
      this.mostrarMenu.emit(true);
      return this.usuarioAutenticado || existeToken;
    } else {
      return false;
    }
  }

  public ocultarMenu() {
    this.mostrarMenu.emit(false);
  }
}
