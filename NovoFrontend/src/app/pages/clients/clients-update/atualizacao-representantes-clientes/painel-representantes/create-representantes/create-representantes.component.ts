import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsCreateRepresentantesService } from 'src/app/pages/clients/clients-update/services/clients-create-representantes/clients-create-representantes.service';

@Component({
  selector: 'app-create-representantes',
  templateUrl: './create-representantes.component.html',
  styleUrls: ['./create-representantes.component.scss'],
})
export class CreateRepresentantesComponent {
  public desabilitarBotaoSalvar: boolean = false;

  public habilitarInputIdentificacao: boolean = false;

  public form = new FormGroup({
    identificacao: new FormControl<string | null>(null),
    nome: new FormControl<string | null>(null),
  });

  private nome: boolean = false;
  private identificacao: boolean = false;

  ngOnInit(): void {
    // this.router.navigate(['create/formulario']);
  }

  constructor(
    private router: Router,
    private clientsCreateRepresentantesService: ClientsCreateRepresentantesService
  ) {}

  public async criarRepresentante() {
    try {
      await this.clientsCreateRepresentantesService.CreateRepresentantes(
        this.form.controls.nome.value!,
        this.form.controls.identificacao.value!,
        localStorage.getItem('idCliente')!
      );

      localStorage.setItem('page', '/update/atualizar-representantes/listar-representantes/');

      this.router.navigate(['/update/atualizar-representantes/listar-representantes/']);
    } catch (error) {
      console.log(error);
    }
  }

  public eventIdentificacao($event: any) {
    if (
      this.form.controls.identificacao.value === '' ||
      this.form.controls.identificacao.value === null ||
      this.form.controls.identificacao.value === undefined
    ) {
      this.identificacao = false;
    } else {
      if (this.form.controls.identificacao.value.length === 14) {
        // CPF
        // this.desabilitarBotaoSalvar = true;
        this.habilitarInputIdentificacao = true;
        this.identificacao = true;
      } else if (this.form.controls.identificacao.value.length === 18) {
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
      this.form.controls.nome.value === '' ||
      this.form.controls.nome.value === null ||
      this.form.controls.nome.value === undefined
    ) {
      // this.habilitarInputIdentificacao = false;
      this.nome = false;
    } else {
      // this.habilitarInputIdentificacao = true;
      this.nome = true;
    }
  }

  public event() {
    const resultado = this.identificacao && this.nome;

    if (resultado === true) {
      this.desabilitarBotaoSalvar = true;
    } else {
      this.desabilitarBotaoSalvar = false;
    }
  }

  public cancelar() {
    localStorage.setItem('page', '/update/atualizar-representantes/listar-representantes/')
  }
}
