import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  msgEmail: string = '';
  msgSenha: string = '';

  eValidoEmail: string = '';
  eValidoSenha: string = '';

  lembrar = false;

  constructor (
    private loginService: LoginService,
    private route: Router
    ) { }

    async login() {
      try {
        const resultadoLogin = await this.loginService.fazerLogin(this.email, this.senha, this.lembrar);

        this.msgEmail = '';
        this.msgSenha = '';

        this.eValidoEmail = 'is-valid';
        this.eValidoSenha = 'is-valid';

        console.log(resultadoLogin);

        localStorage.setItem('token', resultadoLogin.token);
        localStorage.setItem('nome', resultadoLogin.usuario.nome);
        localStorage.setItem('idUsuario', resultadoLogin.usuario.idUsuario);

        this.route.navigate(['/']);

      } catch (error: any) {
        const msgError = error.error;

        if (msgError === 'E-mail inserido incorreto. Tente novamente') {

          this.msgEmail = msgError;
          this.eValidoEmail = 'is-invalid';

          setTimeout(() => {
            this.msgEmail = '';
            this.eValidoEmail = '';

          }, 5000);
        } else {

          this.msgSenha = msgError;
          this.eValidoSenha = 'is-invalid';

          console.log(this.msgSenha);

          setTimeout(() => {
            this.msgSenha = '';
            this.eValidoSenha = '';
          }, 5000);
        }
      }
    }

    teste() {
      console.log(this.lembrar)
    }
}
