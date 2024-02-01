import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsCreateService } from 'src/app/pages/clients/clients-create/services/clients-create/clients-create.service';
import { ClientsGetByIdService } from 'src/app/pages/clients/clients-update/services/clients/clients-get-by-id/clients-get-by-id.service';
import { ClientsUpdateService } from 'src/app/pages/clients/clients-update/services/clients/clients-update/clients-update.service';

@Component({
  selector: 'app-atualizacao-formulario-clientes',
  templateUrl: './atualizacao-formulario-clientes.component.html',
  styleUrls: ['./atualizacao-formulario-clientes.component.scss'],
})
export class AtualizacaoFormularioClientesComponent implements OnInit {
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
    nome: new FormControl<string | null | undefined>(''),
    nomeMaeOuFantasia: new FormControl<string | null>(null),
    inscricaoMunicipal: new FormControl<string | null>(null),
    inscricaoEstadual: new FormControl<string | null>(null),
  });

  private nome: boolean = false;
  private identificacao: boolean = false;
  private nomeMaeOuFantasia: boolean = false;

  public cnpjOuCpf: string = '';
  public dataCadastro?: Date | string;
  public inputNome?: string = '';
  public inputNomeFantasia?: string = '';
  public inputNomeDaMae?: string = '';
  public inputInscricaoMunicipal?: string = '';
  public inputInscricaoEstadual?: string = '';
  public inputNomeFantasiaOuMae: string = '';

  public nomeFantasiaOuMae: string = 'Nome fantasia';

  ngOnInit(): void {
    // this.router.navigate(['create/formulario']);
    const idCliente = localStorage.getItem('idCliente')!;
    this.buscarCliente(String(idCliente));
  }

  constructor(
    private router: Router,
    private clientsCreateService: ClientsCreateService,
    private clientsGetByIdService: ClientsGetByIdService,
    private clientsUpdateService: ClientsUpdateService
  ) {}

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

  private async buscarCliente(idCliente: string) {
    try {
      const cliente = await this.clientsGetByIdService.getClientsById(
        idCliente
      );

      // console.log(cliente);

      // this.dataCadastro = cliente.cliente.createdAt;
      const data = new Date(cliente.cliente.createdAt);
      this.dataCadastro = this.formatarData(data);

      if (
        cliente.cliente.nome_fantasia === '' ||
        cliente.cliente.nome_fantasia === null ||
        cliente.cliente.nome_fantasia === undefined
      ) {
        this.nomeFantasiaOuMae = 'Nome da mãe';
        this.show = false;

        this.cnpjOuCpf = cliente.cliente.identificacao!;
        this.inputNome = cliente.cliente.nome!;
        this.inputNomeFantasiaOuMae = cliente.cliente.nome_mae!;
      } else {
        this.nomeFantasiaOuMae = 'Nome fantasia';
        this.show = true;

        this.cnpjOuCpf = cliente.cliente.identificacao!;
        this.inputNome = cliente.cliente.nome!;
        this.inputNomeFantasiaOuMae = cliente.cliente.nome_fantasia!;
        this.inputInscricaoMunicipal = cliente.cliente.inscricao_municipal;
        this.inputInscricaoEstadual = cliente.cliente.inscricao_estadual;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async salvar() {
    try {
      const idCliente = localStorage.getItem('idCliente')!;

      if (this.nomeFantasiaOuMae === 'Nome da mãe') {
        // cadastro cpf

        await this.clientsUpdateService.updateClient(
          idCliente,
          this.inputNome!,
          '',
          this.inputNomeFantasiaOuMae!,
          '',
          '',
          this.status,
          String(localStorage.getItem('idUsuario'))
        );

        localStorage.setItem('page', '/update/atualizar-localizacao');

        // localStorage.setItem('page', '/atualizar-formulario');
      } else {
        // cadastro cnpj

        await this.clientsUpdateService.updateClient(
          idCliente,
          this.inputNome!,
          this.inputNomeFantasiaOuMae!,
          '',
          this.inputInscricaoMunicipal!,
          this.inputInscricaoEstadual!,
          this.status,
          String(localStorage.getItem('idUsuario'))
        );

        localStorage.setItem('page', '/update/atualizar-localizacao');
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

  public formatarData(date: Date) {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
