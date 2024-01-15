import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserPutService } from '../../services/users/user-put/user-put.service';
import { UserGetService } from '../../services/users/user-get/user-get.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public iniciaisDoUsuario: string = '';
  private permanecerLogado: string | null = localStorage.getItem(
    'lembrarAutenticacao'
  );

  public inputNome: string = '';
  public inputEmail: string = '';
  public inputSenha: string = '';
  public inputNovaSenha: string = '';
  public inputConfirmarSenha: string = '';

  public salvarUsuarioSemSenha: boolean = true;
  public salvarUsuarioComSenha: boolean = false;

  public podeHabilitarBotaoSalvarSemSenha: boolean = false;
  public podeHabilitarBotaoSalvarComSenha: boolean = false;

  public habilitarInputNome: boolean = false;
  public habilitarInputEmail: boolean = false;
  public habilitarInputSenha: boolean = false;
  public habilitarInputNovaSenha: boolean = false;
  public habilitarInputConfirmarSenha: boolean = false;

  public senha: string = 'password';
  public novaSenha: string = 'password';
  public confirmarNovaSenha: string = 'password';

  public checkAlterarSenha: boolean = false;

  public habilitarCampoSenha: string = 'input-senha-atual-desabilitada';
  public habilitarCampoNovaSenha: string = 'input-nova-senha-desabilitada';
  public habilitarCampoConfirmarSenha: string =
    'input-confirmar-senha-desabilitada';

  public form = new FormGroup({
    nome: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
  });

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    const nome = this.pegarPrimeiraEUltimaLetraDoNome(usuario!);

    this.iniciaisDoUsuario = nome;
  }

  constructor(
    private router: Router,
    private login: LoginService,
    private userPutService: UserPutService,
    private userGetService: UserGetService
  ) {}

  public async dadosUsuario(): Promise<void> {
    const idUsuario: string = localStorage.getItem('idUsuario')!;
    const usuario = await this.userGetService.getUser(idUsuario);

    this.inputNome = usuario.usuario.nome;
    this.inputEmail = usuario.usuario.email;
    this.form.controls.nome.setValue(usuario.usuario.nome);
    this.form.controls.email.setValue(usuario.usuario.email);
  }

  private pegarPrimeiraEUltimaLetraDoNome(nome: string): string {
    // Verifica se o nome é composto
    const partes = nome.split(' ');

    if (partes.length === 1) {
      // Se não for composto, pega a primeira e última letra
      return nome.slice(0, 1).toUpperCase() + nome.slice(-1).toUpperCase();
    } else {
      // Se for composto, pega as duas primeiras letras
      const iniciais = partes.map((parte) => parte.slice(0, 1)).join('');
      return iniciais.toUpperCase();
    }
  }

  public sairDoSistema(): void {
    localStorage.setItem('page', '');
    localStorage.setItem('idUsuario', '');
    localStorage.setItem('lembrarAutenticacao', '');
    localStorage.setItem('usuario', '');
    localStorage.setItem('token', '');

    this.router.navigate(['/login']);
  }

  public async atualizarUsuarioSemSenha(): Promise<void> {
    try {
      // this.form.controls.nome.setValue(usuario.usuario.nome);
      // this.form.controls.email.setValue(usuario.usuario.email);
      console.log(this.form.controls.nome.value);
      const usuario: string = localStorage.getItem('idUsuario')!;

      await this.userPutService.updateSemSenha(
        this.form.controls.nome.value!,
        this.form.controls.email.value!,
        usuario
      );
    } catch (error) {
      console.log('error');
    }
  }

  public async atualizarUsuarioComSenha(): Promise<void> {
    try {
      const usuario: string = localStorage.getItem('idUsuario')!;

      if (this.inputNovaSenha === this.inputConfirmarSenha) {
        console.log('Pode cadastrar');

        await this.userPutService.updateComSenha(
          this.form.controls.nome.value!,
          this.form.controls.email.value!,
          this.inputSenha,
          this.inputNovaSenha,
          usuario
        );
      } else {
        console.log('Não pode cadastrar');
      }
    } catch (error) {
      console.log(error);
    }
  }

  public ocultarMenu(): void {
    this.login.ocultarMenu();
  }

  public alterarSenha(): void {
    this.checkAlterarSenha = !this.checkAlterarSenha;

    if (this.checkAlterarSenha === true) {
      this.salvarUsuarioSemSenha = false;
      this.salvarUsuarioComSenha = true;

      this.habilitarCampoSenha = 'input-senha-atual';
      this.habilitarCampoNovaSenha = 'input-nova-senha';
      this.habilitarCampoConfirmarSenha = 'input-confirmar-senha';
    } else {
      this.salvarUsuarioSemSenha = true;
      this.salvarUsuarioComSenha = false;

      this.habilitarCampoSenha = 'input-senha-atual-desabilitada';
      this.habilitarCampoNovaSenha = 'input-nova-senha-desabilitada';
      this.habilitarCampoConfirmarSenha = 'input-confirmar-senha-desabilitada';
    }
  }

  public mostrarSenhaAtual(): void {
    if (this.senha === 'password') {
      this.senha = 'text';
    } else {
      this.senha = 'password';
    }
  }

  public mostrarNovaSenha(): void {
    if (this.novaSenha === 'password') {
      this.novaSenha = 'text';
    } else {
      this.novaSenha = 'password';
    }
  }

  public mostrarConfirmacaoSenha(): void {
    if (this.confirmarNovaSenha === 'password') {
      this.confirmarNovaSenha = 'text';
    } else {
      this.confirmarNovaSenha = 'password';
    }
  }

  public habilitarBotaoSalvarSemSenha(): void {
    const habilitar = this.habilitarInputNome && this.habilitarInputEmail;

    if (habilitar === true) {
      this.podeHabilitarBotaoSalvarSemSenha = true;
    } else {
      console.log(this.inputNome);
      this.podeHabilitarBotaoSalvarSemSenha = false;
    }
  }

  public habilitarBotaoSalvarComSenha(): void {
    const habilitar =
      this.habilitarInputNome &&
      this.habilitarInputEmail &&
      this.habilitarInputSenha &&
      this.habilitarInputNovaSenha &&
      this.habilitarInputConfirmarSenha;

    if (habilitar === true) {
      this.podeHabilitarBotaoSalvarComSenha = true;
    } else {
      this.podeHabilitarBotaoSalvarComSenha = false;
    }
  }

  public nomeEstaHabilitado($event: any): boolean {
    if (
      this.inputNome === '' ||
      this.inputNome === undefined ||
      this.inputNome === null
    ) {
      return (this.habilitarInputNome = false);
    } else {
      return (this.habilitarInputNome = true);
    }
  }

  public emailEstaHabilitado($event: any): boolean {
    if (
      this.inputEmail === '' ||
      this.inputEmail === undefined ||
      this.inputEmail === null
    ) {
      return (this.habilitarInputEmail = false);
    } else {
      return (this.habilitarInputEmail = true);
    }
  }

  public senhaEstaHabilitado($event: any): boolean {
    if (
      this.inputSenha === '' ||
      this.inputSenha === undefined ||
      this.inputSenha === null
    ) {
      return (this.habilitarInputSenha = false);
    } else {
      return (this.habilitarInputSenha = true);
    }
  }

  public senhaAtualEstaHabilitado($event: any): boolean {
    if (
      this.inputNovaSenha === '' ||
      this.inputNovaSenha === undefined ||
      this.inputNovaSenha === null
    ) {
      return (this.habilitarInputNovaSenha = false);
    } else {
      return (this.habilitarInputNovaSenha = true);
    }
  }

  public confirmarSenhaEstaHabilitado($event: any): boolean {
    if (
      this.inputConfirmarSenha === '' ||
      this.inputConfirmarSenha === undefined ||
      this.inputConfirmarSenha === null
    ) {
      return (this.habilitarInputConfirmarSenha = false);
    } else {
      return (this.habilitarInputConfirmarSenha = true);
    }
  }
}
