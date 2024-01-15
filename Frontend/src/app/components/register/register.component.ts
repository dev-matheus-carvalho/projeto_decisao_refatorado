import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  senha!: string;
  repetirSenha!: string;

  eValido: string = '';
  eValidoNome: string = '';
  eValidoEmail: string = '';
  eValidoSenha: string = '';
  eValidoRepetirSenha: string = '';

  msg: string = '';
  msgNome: string = '';
  msgEmail: string = '';
  msgSenha: string = '';
  msgRepetirSenha: string = '';

  habilitarBotao: boolean = false;
  estadoBotao: string = 'disabled';
  cor: string = 'light';

  constructor(
    private registerService: RegisterService,
    private route: Router) { }


  onKeyUp() {
    if (this.nome === '' ||
      this.email === '' ||
      this.senha === undefined ||
      this.senha === '' ||
      this.repetirSenha === undefined ||
      this.repetirSenha === '') {
      this.habilitarBotao = true;
      this.cor = 'light';
      this.estadoBotao = 'disabled';
      console.log('Não habilita')
    } else {
      this.habilitarBotao = true;
      this.cor = 'primary';
      this.estadoBotao = ''
      console.log('Habilita')
    }
  }

  async registrar() {
    try {
      const nomeOk = this.validarNome();
      const emailOk = this.validarEmail();
      const senhaOk = this.validarSenha();
      const repetirSenhaOk = this.validarRepetirSenha();

      const camposOk = this.validarTodosOsCampos(
        nomeOk,
        emailOk,
        senhaOk,
        repetirSenhaOk
      );

      if (camposOk === true) {
        this.habilitarBotao = true;
        this.estadoBotao = '';
        const senhasIguais = this.verificaSenhaIgual();
        if (senhasIguais === true) {
          this.eValidoSenha = 'is-valid';
          this.eValidoRepetirSenha = 'is-valid';
          console.log('Faz o registro...');

          await this.registerService
          .fazerRegistro(this.nome, this.email, this.senha);
          this.route.navigate(['/login']);
        } else {
          this.eValidoSenha = 'is-invalid';
          this.eValidoRepetirSenha = 'is-invalid';

          this.msgSenha = 'Senhas têm que ser iguais';
          this.msgRepetirSenha = 'Senhas têm que ser iguais';
          console.log('Senhas não são iguais');
        }
      } else {
        this.habilitarBotao = false;
        this.estadoBotao = 'disabled';
        console.log()
      }
    } catch (error: any) {
      const msgErro = error.error;

      this.msgNome = '';
      this.msgEmail = msgErro;
      this.msgSenha = '';
      this.msgRepetirSenha = '';

      this.eValidoNome = 'is-valid';
      this.eValidoEmail = 'is-invalid';
      this.eValidoSenha = 'is-valid';
      this.eValidoRepetirSenha = 'is-valid';

      setTimeout(() => {
        this.msgNome = '';
        this.msgEmail = '';
        this.msgSenha = '';
        this.msgRepetirSenha = '';

        this.eValidoNome = 'is-valid';
        this.eValidoEmail = 'is-invalid';
        this.eValidoSenha = 'is-valid';
        this.eValidoRepetirSenha = 'is-valid';
      }, 5000);
    }
  }


  validarNome() {
    if (this.nome === null || this.nome === undefined || this.nome === '') {
      return false;
    }
    return true;
  }

  validarEmail() {
    if (this.email === null || this.email === undefined || this.email === '') {
      return false;
    }
    return true;
  }

  validarSenha() {
    if (this.senha === null || this.senha === undefined || this.senha === '') {
      return false;
    }
    return true;
  }

  validarRepetirSenha() {
    if (this.repetirSenha === null || this.repetirSenha === undefined || this.repetirSenha === '') {
      return false;
    }
    return true;
  }

  validarTodosOsCampos(
    nome: boolean,
    email: boolean,
    senha: boolean,
    repetirSenha: boolean) {
    if (
      nome === false &&
      email === false &&
      senha === false &&
      repetirSenha === false) {
      this.msg = 'Preencha todos os campos';
      this.msgNome = '';
      this.msgEmail = '';
      this.msgSenha = '';
      this.msgRepetirSenha = '';

      this.eValidoNome = 'is-invalid';
      this.eValidoEmail = 'is-invalid';
      this.eValidoSenha = 'is-invalid';
      this.eValidoRepetirSenha = 'is-invalid';

      console.log('Preencha todos os campos');
      return false;
    } else if (nome === false) {
      this.msg = '';
      this.msgNome = 'Preencha o campo nome';
      this.msgEmail = '';
      this.msgSenha = '';
      this.msgRepetirSenha = '';

      this.eValidoNome = 'is-invalid';
      this.eValidoEmail = 'is-valid';
      this.eValidoSenha = 'is-valid';
      this.eValidoRepetirSenha = 'is-valid';
      console.log('Preencha o nome');
      return false
    } else if (email === false) {
      this.msg = '';
      this.msgNome = '';
      this.msgEmail = 'Preencha todos o campo email';
      this.msgSenha = '';
      this.msgRepetirSenha = '';

      this.eValidoNome = 'is-valid';
      this.eValidoEmail = 'is-invalid';
      this.eValidoSenha = 'is-valid';
      this.eValidoRepetirSenha = 'is-valid';
      console.log('Preencha o email');
      return false
    } else if (senha === false) {
      this.msg = '';
      this.msgNome = '';
      this.msgEmail = '';
      this.msgSenha = 'Preencha o campo senha';
      this.msgRepetirSenha = 'Preencha o campo senha primeiro';

      this.eValidoNome = 'is-valid';
      this.eValidoEmail = 'is-valid';
      this.eValidoSenha = 'is-invalid';
      this.eValidoRepetirSenha = 'is-invalid';
      console.log('Preencha a senha');
      return false
    } else if (repetirSenha === false) {
      this.msg = '';
      this.msgNome = '';
      this.msgEmail = '';
      this.msgSenha = '';
      this.msgRepetirSenha = 'Repita a senha anterior';

      this.eValidoNome = 'is-valid';
      this.eValidoEmail = 'is-valid';
      this.eValidoSenha = '';
      this.eValidoRepetirSenha = 'is-invalid';
      console.log('Preencha o repetir senha');
      return false
    } else {
      this.msg = '';
      this.msgNome = '';
      this.msgEmail = '';
      this.msgSenha = '';
      this.msgRepetirSenha = '';

      this.eValidoNome = 'is-valid';
      this.eValidoEmail = 'is-valid';
      this.eValidoSenha = '';
      this.eValidoRepetirSenha = '';
      console.log('Tudo válido');
      return true;
    }
  }

  verificaSenhaIgual() {
    if (this.senha === this.repetirSenha) {
      return true;
    } else {
      return false;
    }
  }


}
