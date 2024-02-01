import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsCreateService } from 'src/app/pages/clients/clients-create/services/clients-create/clients-create.service';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.scss'],
})
export class ClientsUpdateComponent implements OnInit {
  public show: boolean = true;
  public showStatus: boolean = true;
  public cor: string = 'ativo';
  public status: string = 'Ativo';
  public upDown: boolean = false;
  public ativo: string = 'Ativo';
  public inativo: string = 'Inativo';
  public negativo: string = 'Negativo';

  public desabilitarBotaoSalvar: boolean = false;

  public typeInput: string = 'Nome fantasia';
  public habilitarInputIdentificacao: boolean = false;

  public form = new FormGroup({
    identificacao: new FormControl<string | null>(null),
    nome: new FormControl<string | null>(null),
    nomeMaeOuFantasia: new FormControl<string | null>(null),
  });

  constructor(
    private router: Router,
    private clientsCreateService: ClientsCreateService
  ) { }

  ngOnInit(): void {
      this.router.navigate([String(localStorage.getItem('page')!)])
  }

  private nome: boolean = false;
  private identificacao: boolean = false;
  private nomeMaeOuFantasia: boolean = false;

  seta() {
    this.upDown = !this.upDown;
  }

  statusAtivo() {
    this.status = this.ativo;
    this.upDown = false;
    this.cor = 'ativo';
  }

  statusInativo() {
    this.status = this.inativo;
    this.upDown = false;
    this.cor = 'inativo';
  }

  statusNegativo() {
    this.status = this.negativo;
    this.upDown = false;
    this.cor = 'negativo';
  }

  public async salvar() {
    try {
      console.log(this.form.controls.identificacao.value?.length);
      const idUsuario = localStorage.getItem('idUsuario')!;

      if (this.form.controls.identificacao.value!.length === 14) {
        console.log('Cadastra CPF');

        await this.clientsCreateService.postClient(
          this.form.controls.nome.value!,
          this.form.controls.identificacao.value!,
          '',
          this.form.controls.nomeMaeOuFantasia.value!,
          'Inativo',
          idUsuario
        );

        this.router.navigate(['/clients']);
      } else if (this.form.controls.identificacao.value!.length === 18) {
        console.log('Cadastra CNPJ');

        await this.clientsCreateService.postClient(
          this.form.controls.nome.value!,
          this.form.controls.identificacao.value!,
          this.form.controls.nomeMaeOuFantasia.value!,
          '',
          'Inativo',
          idUsuario
        );
        this.router.navigate(['/clients']);
      }
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
        this.typeInput = 'Nome da mãe';
        // this.desabilitarBotaoSalvar = true;
        this.habilitarInputIdentificacao = true;
        this.identificacao = true;
      } else if (this.form.controls.identificacao.value.length === 18) {
        // CNPJ
        this.typeInput = 'Nome Fantasia';
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

  public eventNomeMaeOuFantasia($event: any) {
    if (
      this.form.controls.nomeMaeOuFantasia.value === '' ||
      this.form.controls.nomeMaeOuFantasia.value === null ||
      this.form.controls.nomeMaeOuFantasia.value === undefined
    ) {
      this.nomeMaeOuFantasia = false;
    } else {
      this.nomeMaeOuFantasia = true;
    }
  }

  public event() {
    const resultado = this.identificacao && this.nome && this.nomeMaeOuFantasia;

    if (resultado === true) {
      this.desabilitarBotaoSalvar = true;
    } else {
      this.desabilitarBotaoSalvar = false;
    }
  }
}
