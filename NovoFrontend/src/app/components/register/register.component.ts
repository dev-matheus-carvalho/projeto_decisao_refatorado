import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // .................................. Dados .....................................

  public nome: string = '';
  public email: string = '';
  public senha: string = '';
  public confirmarSenha: string = '';

  // ............................... Tipo do input ................................

  public typeInputSenha: string = 'password';
  public typeInputConfirmarSenha: string = 'password';

  // ........................ Os campos estão preenchidos ..........................

  public campoNomePreenchido: boolean = false;
  public campoEmailPreenchido: boolean = false;
  public campoSenhaPreenchido: boolean = false;
  public campoConfirmarSenhaPreenchido: boolean = false;

  public habilitarBotao: boolean = false;

  // .............................. Mensagem de erro ...............................

  public mostrarMensagemDeErro: boolean = false;


  // ================================== Contrutor ==================================

  constructor(private registerService: RegisterService, private router: Router) { }

  // ================================ Registrar ===================================

  public async register(): Promise<void> {
    const senhasIguais = this.verificarSenhas();

    if (senhasIguais === true) {

      this.mostrarMensagemDeErro = false;
      await this.registerService.register(this.nome, this.email, this.senha);
      this.router.navigate(['/login']);

    } else {
      this.mostrarMensagemDeErro = true;
    }
  }

  // ================================ Mudar input ==================================

  public mostrarSenha(): void {
    if(this.typeInputSenha === 'password') {
      this.typeInputSenha = 'text';
    } else {
      this.typeInputSenha = 'password';
    }
  }

  public mostrarConfirmarSenha(): void {
    if(this.typeInputConfirmarSenha === 'password') {
      this.typeInputConfirmarSenha = 'text';
    } else {
      this.typeInputConfirmarSenha = 'password';
    }
  }

  // ===================== Verificar se os campos estão preenchidos ================

  public onKeyUp(): void {
    this.habilitarBotao = this.campoNomePreenchido
    && this.campoEmailPreenchido
    && this.campoSenhaPreenchido
    && this.campoConfirmarSenhaPreenchido;
  }

  public onKeyUpNome($event: any): void {
    if ($event.target.value === '' || $event.target.value === null || $event.target.value === undefined) {
      this.campoNomePreenchido = false;
    } else {
      this.campoNomePreenchido = true;
    }
  }

  public onKeyUpEmail($event: any): void {
    if ($event.target.value === '' || $event.target.value === null || $event.target.value === undefined) {
      this.campoEmailPreenchido = false;
    } else {
      this.campoEmailPreenchido = true;
    }
  }

  public onKeyUpSenha($event: any): void {
    if ($event.target.value === '' || $event.target.value === null || $event.target.value === undefined) {
      this.campoSenhaPreenchido = false;
    } else {
      this.campoSenhaPreenchido = true;
    }
  }

  public onKeyUpConfirmarSenha($event: any): void {
    if ($event.target.value === '' || $event.target.value === null || $event.target.value === undefined) {
      this.campoConfirmarSenhaPreenchido = false;
    } else {
      this.campoConfirmarSenhaPreenchido = true;
    }
  }

  // =================== Verificar se as senhas são iguais =========================

 private verificarSenhas(): boolean {
  if (this.senha === this.confirmarSenha) {
    return true;
  } else {
    return false;
  }
 }

}
