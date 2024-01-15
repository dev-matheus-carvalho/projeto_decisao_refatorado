import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  // Usuário logado
  private token: string = '';
  private nome: string = '';
  public lembrarLogin: boolean = false;

  public email: string = '';
  public senha: string = '';


  public mostrarSenha: boolean = false;
  public typeSenha: string = 'password';

  public emailHabilitado: boolean = false;
  public senhaHabilitado: boolean = false;
  public habilitarBotaoLogin: boolean = false;

  // ............................... Erros ....................................

  // Erro email

  public errorInputEmail: string = '';
  public mostrarMsgErrorEmail: boolean = false;

  // Erro senha

  public errorInputSenha: string = '';
  public mostrarMsgErrorSenha: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  public async login() {
    try {
      await this.loginService.login(this.email, this.senha, this.lembrarLogin);
      this.router.navigate(['']);

    } catch (error: any) {
      if(this.email !== '' || this.senha !== '') {

        if(error.error === 'E-mail inserido incorreto. Tente novamente') {

          this.errorInputEmail = 'input-invalido';
          this.mostrarMsgErrorEmail = true;

        } else {

          this.errorInputSenha = 'input-invalido';
          this.mostrarMsgErrorSenha = true;

        }

      } else {
        this.errorInputEmail = 'input-invalido';
        this.mostrarMsgErrorEmail = true;

        this.errorInputSenha = 'input-invalido';
        this.mostrarMsgErrorSenha = true;
      }
    }
  }

  // =================================== Operações ================================

  // Mostrar ou ocultar senha

  public mostrarOuOcultarSenha() {
    this.mostrarSenha = !this.mostrarSenha;

    if (this.mostrarSenha === true) {
      this.typeSenha = 'text';
    } else {
      this.typeSenha = 'password';
    }
  }

  // Habilitar botões

  public onKeyUp() {
    this.habilitarBotaoLogin = this.emailHabilitado && this.senhaHabilitado;
  }

  public onKeyUpEmail($event: any) {
    if ($event.target.value === '' || $event.target.value === null || $event.target.value === undefined) {
      this.emailHabilitado = false;
    } else {
      this.emailHabilitado = true;
    }
  }

  public onKeyUpSenha($event: any) {
    if ($event.target.value === '' || $event.target.value === null || $event.target.value === undefined) {
      this.senhaHabilitado = false;
    } else {
      this.senhaHabilitado = true;
    }
  }
}
