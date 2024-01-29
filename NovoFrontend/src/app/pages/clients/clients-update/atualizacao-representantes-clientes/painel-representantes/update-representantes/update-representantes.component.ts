import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsGetOneRepresentanteService } from 'src/app/shared/services/clients/representantes/clients-get-one-representante/clients-get-one-representante.service';
import { ClientsUpdateRepresentanteService } from 'src/app/shared/services/clients/representantes/clients-update-representante/clients-update-representante.service';

@Component({
  selector: 'app-update-representantes',
  templateUrl: './update-representantes.component.html',
  styleUrls: ['./update-representantes.component.scss'],
})
export class UpdateRepresentantesComponent {
  public desabilitarBotaoSalvar: boolean = false;

  public habilitarInputIdentificacao: boolean = false;

  public inputIndentificacao: string = '';
  public inputNome: string = '';

  public form = new FormGroup({
    identificacao: new FormControl<string | null>(null),
    nome: new FormControl<string | null>(null),
  });

  private nome: boolean = false;
  private identificacao: boolean = false;

  ngOnInit(): void {
    // this.router.navigate(['create/formulario']);
    this.getUsuario();
  }

  constructor(
    private router: Router,
    private clientsGetOneRepresentanteService: ClientsGetOneRepresentanteService,
    private clientsUpdateRepresentanteService: ClientsUpdateRepresentanteService
  ) {}

  public async getUsuario() {
    const idRepresentante = localStorage.getItem('idRepresentante')!;
    const representante =
      await this.clientsGetOneRepresentanteService.GetRepresentante(idRepresentante);

      this.inputIndentificacao = representante.identificacao;
      this.inputNome = representante.nome;

  }

  public async atualizarRepresentante() {
    try {
      const idRepresentante = localStorage.getItem('idRepresentante')!;
      const idCliente = localStorage.getItem('idCliente')!;

      await this.clientsUpdateRepresentanteService.UpdateRepresentante(idRepresentante, this.inputNome, idCliente);

      localStorage.setItem(
        'page',
        '/update/atualizar-representantes/listar-representantes/'
      );

      this.router.navigate(['/update/atualizar-representantes/listar-representantes/']);
    } catch (error) {
      console.log(error);
    }
  }

  public eventIdentificacao($event: any) {
    if (
      this.inputIndentificacao === '' ||
      this.inputIndentificacao === null ||
      this.inputIndentificacao === undefined
    ) {
      this.identificacao = false;
    } else {
      if (this.inputIndentificacao.length === 14) {
        // CPF
        // this.desabilitarBotaoSalvar = true;
        this.habilitarInputIdentificacao = true;
        this.identificacao = true;
      } else if (this.inputIndentificacao.length === 18) {
        // CNPJ
        // this.desabilitarBotaoSalvar = true;
        this.habilitarInputIdentificacao = true;
        this.identificacao = true;
      } else {
        // Valor invalido
        // this.desabilitarBotaoSalvar = false;
        this.habilitarInputIdentificacao = false;
        this.identificacao = false;
      }
    }
  }

  public eventNome($event: any) {
    if (
      this.inputNome === '' ||
      this.inputNome === null ||
      this.inputNome === undefined
    ) {
      // this.habilitarInputIdentificacao = false;
      this.nome = false;
    } else {
      // this.habilitarInputIdentificacao = true;
      this.nome = true;
    }
  }

  public event() {
    const resultado = this.nome;

    if (resultado === true) {
      this.desabilitarBotaoSalvar = true;
    } else {
      this.desabilitarBotaoSalvar = false;
    }
  }

  public cancelar() {
    localStorage.setItem(
      'page',
      '/update/atualizar-representantes/listar-representantes/'
    );

    this.router.navigate(['/update/atualizar-representantes/listar-representantes/']);
  }
}
