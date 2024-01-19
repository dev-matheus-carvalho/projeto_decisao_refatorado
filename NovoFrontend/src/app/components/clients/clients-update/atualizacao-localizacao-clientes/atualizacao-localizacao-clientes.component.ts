import { Component, OnInit } from '@angular/core';
import { GetAllEmails } from 'src/app/shared/interfaces/email/getAllEmails';
import {
  Enderecos,
  GetEnderecosInterface,
} from 'src/app/shared/interfaces/enderecos/listarEnderecos/getEnderecosInterface';
import { GetAllTelefones } from 'src/app/shared/interfaces/telefones/getAllTelefone/gelAllTelefonesInterface';
import { ClientsCreateEnderecosService } from 'src/app/shared/services/clients/clients-create-enderecos/clients-create-enderecos.service';
import { ClientsDeleteEnderecosService } from 'src/app/shared/services/clients/clients-delete-enderecos/clients-delete-enderecos.service';
import { ClientsGetEnderecosService } from 'src/app/shared/services/clients/clients-get-enderecos/clients-get-enderecos.service';
import { ClientsUpdateEnderecosService } from 'src/app/shared/services/clients/clients-update-enderecos/clients-update-enderecos.service';
import { ClientsCreateEmailService } from 'src/app/shared/services/clients/email/clients-create-email/clients-create-email.service';
import { ClientsDeleteEmailService } from 'src/app/shared/services/clients/email/clients-delete-email/clients-delete-email.service';
import { ClientsGetAllEmailsService } from 'src/app/shared/services/clients/email/clients-get-all-emails/clients-get-all-emails.service';
import { ClientsGetOneEmailService } from 'src/app/shared/services/clients/email/clients-get-one-email/clients-get-one-email.service';
import { ClientsUpdateEmailService } from 'src/app/shared/services/clients/email/clients-update-email/clients-update-email.service';
import { ClientsCreateTelefonesService } from 'src/app/shared/services/clients/telefone/clients-create-telefones/clients-create-telefones.service';
import { ClientsDeleteTelefoneService } from 'src/app/shared/services/clients/telefone/clients-delete-telefone/clients-delete-telefone.service';
import { ClientsGetAllTelefonesService } from 'src/app/shared/services/clients/telefone/clients-get-all-telefones/clients-get-all-telefones.service';
import { ClientsGetOneTelefoneService } from 'src/app/shared/services/clients/telefone/clients-get-one-telefone/clients-get-one-telefone.service';
import { ClientsUpdateTelefoneService } from 'src/app/shared/services/clients/telefone/clients-update-telefone/clients-update-telefone.service';

@Component({
  selector: 'app-atualizacao-localizacao-clientes',
  templateUrl: './atualizacao-localizacao-clientes.component.html',
  styleUrls: ['./atualizacao-localizacao-clientes.component.scss'],
})
export class AtualizacaoLocalizacaoClientesComponent implements OnInit {
  public existeEndereco: boolean = false;
  public existeTelefone: boolean = false;
  public existeEmail: boolean = false;

  public showAddTelefone: boolean = false;
  public showAddEmail: boolean = false;

  public listaDeEnderecos: Array<Enderecos> = [];
  public listaDeTelefones: Array<GetAllTelefones> = [];
  public listaDeEmail: Array<GetAllEmails> = [];

  public inputCep: string = '';
  public inputLogradouro: string = '';
  public inputNumero: string = '';
  public inputComplemento: string = '';
  public inputBairro: string = '';
  public inputCidade: string = '';
  public inputEstado: string = '';

  public inputNumeroTelefone: string = '';
  public inputEmail: string = '';

  public enderecoPrincipal: boolean = false;
  public telefonePrincipal: boolean = true;
  public emailPrincipal: boolean = true;

  public salvarTelefone: boolean = true;
  public salvarEmail: boolean = true;

  public desabilitarCheckBoxTelefone: boolean = false;
  public desabilitarCheckBoxEmail: boolean = false;

  constructor(
    private clientsGetEnderecosService: ClientsGetEnderecosService,
    private clientsCreateEnderecosService: ClientsCreateEnderecosService,
    private clientsUpdateEnderecosService: ClientsUpdateEnderecosService,
    private clientsDeleteEnderecosService: ClientsDeleteEnderecosService,
    private clientsGetAllTelefonesService: ClientsGetAllTelefonesService,
    private clientsCreateTelefonesService: ClientsCreateTelefonesService,
    private clientsGetOneTelefoneService: ClientsGetOneTelefoneService,
    private clientsUpdateTelefoneService: ClientsUpdateTelefoneService,
    private clientsDeleteTelefoneService: ClientsDeleteTelefoneService,
    private clientsGetAllEmailsService: ClientsGetAllEmailsService,
    private clientsCreateEmailService: ClientsCreateEmailService,
    private clientsGetOneEmailService: ClientsGetOneEmailService,
    private clientsUpdateEmailService: ClientsUpdateEmailService,
    private clientsDeleteEmailService: ClientsDeleteEmailService
  ) {}

  ngOnInit(): void {
    this.listarEnderecos();
    this.listarTelefones();
    this.listarEmail();
  }

  // ================================== Endereços ==================================

  public pegarIdEndereco(idEndereco: string) {
    localStorage.setItem('idEndereco', idEndereco);
  }

  public async listarEnderecos() {
    const idCliente = localStorage.getItem('idCliente')!;
    const enderecos =
      await this.clientsGetEnderecosService.getEnderecoByIdCliente(
        String(idCliente)
      );

    console.log(enderecos);
    if (typeof enderecos === 'string') {
      this.existeEndereco = false;
    } else {
      this.existeEndereco = true;
      this.listaDeEnderecos = [...enderecos];
    }
  }

  public async criarEndereco() {
    this.limparDados();

    const novoEndereco =
      await this.clientsCreateEnderecosService.createEndereco(
        this.inputCep,
        this.inputLogradouro,
        this.inputNumero,
        this.inputComplemento,
        this.inputBairro,
        this.inputCidade,
        this.inputEstado,
        String(this.enderecoPrincipal),
        String(localStorage.getItem('idCliente')!)
      );

    console.log(this.enderecoPrincipal);
    this.limparDados();
    this.listarEnderecos();

    this.limparDados();
  }

  public async editarEndereco(id: string) {
    try {
      localStorage.setItem('idEndereco', id);
      const endereco =
        await this.clientsGetEnderecosService.getEnderecoByIdEndereco(
          String(id)
        );

      this.inputCep = endereco.cep;
      this.inputLogradouro = endereco.logradouro;
      this.inputNumero = endereco.numero;
      this.inputComplemento = endereco.complemento;
      this.inputBairro = endereco.bairro;
      this.inputCidade = endereco.cidade;
      this.inputEstado = endereco.estado;
      this.enderecoPrincipal = endereco.is_principal;

      console.log(this.inputCep);
    } catch (error: any) {
      console.log(error);
    }
  }

  public async alterarEndereco() {
    try {
      const id = localStorage.getItem('idEndereco')!;
      const idCliente = localStorage.getItem('idCliente')!;

      await this.clientsUpdateEnderecosService.updateEnderecoById(
        id,
        this.inputCep,
        this.inputLogradouro,
        this.inputNumero,
        this.inputComplemento,
        this.inputBairro,
        this.inputCidade,
        this.inputEstado,
        String(this.enderecoPrincipal),
        String(idCliente)
      );

      localStorage.setItem('idEndereco', '');

      this.listarEnderecos();
    } catch (error: any) {
      console.log(error);
    }
  }

  public async excluirEndereco() {
    const idEndereco = localStorage.getItem('idEndereco')!;

    await this.clientsDeleteEnderecosService.deleteEndereco(idEndereco);

    localStorage.setItem('idEndereco', '');
    this.listarEnderecos();
  }

  // =================================== Telefone ====================================

  public async listarTelefones() {
    const idCliente = localStorage.getItem('idCliente')!;
    const telefones = await this.clientsGetAllTelefonesService.GetTelefones(
      idCliente
    );

    if (typeof telefones === 'string') {
      console.log('É string');
      this.existeTelefone = false;
    } else {
      console.log('É array');
      this.existeTelefone = true;
      this.listaDeTelefones = [...telefones];
    }
  }

  public pegarIdTelefone(idTelefone: string) {
    localStorage.setItem('idTelefone', idTelefone);
  }

  public async criarTelefone() {
    try {
      const idCliente = localStorage.getItem('idCliente')!;
      if (this.listaDeTelefones.length !== 0) {
        await this.clientsCreateTelefonesService.CreateTelefones(
          this.inputNumeroTelefone,
          this.telefonePrincipal,
          idCliente
        );

        this.listarTelefones();
      } else {
        await this.clientsCreateTelefonesService.CreateTelefones(
          this.inputNumeroTelefone,
          true,
          idCliente
        );

        this.listarTelefones();
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  public async alterarTelefone() {
    try {
      this.limparDadosTelefone();
      this.salvarTelefone = false;
      this.showAddTelefone = true;

      const idTelefone = localStorage.getItem('idTelefone')!;
      const idCliente = localStorage.getItem('idCliente')!;

      const telefone = await this.clientsGetOneTelefoneService.GetOneTelefone(
        idTelefone
      );

      this.inputNumeroTelefone = telefone.numero;
      this.telefonePrincipal = telefone.is_principal;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async updateTelefone() {
    try {
      const idTelefone = localStorage.getItem('idTelefone')!;
      const idCliente = localStorage.getItem('idCliente')!;

      await this.clientsUpdateTelefoneService.UpdateTelefone(
        idTelefone,
        this.inputNumeroTelefone,
        String(this.telefonePrincipal),
        idCliente
      );

      this.showTelefone();
      this.listarTelefones();
    } catch (error: any) {
      console.log(error);
    }
  }

  public async deletarTelefone(idTelefone: string) {
    try {
      await this.clientsDeleteTelefoneService.DeleteTelefone(idTelefone);
      await this.listarTelefones();
    } catch (error: any) {
      console.log(error);
    }
  }

  public verificaSeEstaVazio() {
    if (this.listaDeTelefones.length === 0) {
      this.telefonePrincipal = true;
      this.desabilitarCheckBoxTelefone = true;
    } else {
      this.telefonePrincipal = false;
      this.desabilitarCheckBoxTelefone = false;
    }
  }

  public limparDadosTelefone() {
    this.inputNumeroTelefone = '';
    this.telefonePrincipal = false;
  }

  public showTelefone() {
    this.salvarTelefone = true;
    this.showAddTelefone = !this.showAddTelefone;
  }

  public cancelAddTelefone() {
    this.showAddTelefone = false;
  }

  // ==================================== Email =====================================

  public async listarEmail() {
    const idCliente = localStorage.getItem('idCliente')!;
    const email = await this.clientsGetAllEmailsService.GetEmails(idCliente);

    console.log(email);

    if (typeof email === 'string') {
      console.log('É string');
      this.existeEmail = false;
    } else {
      console.log('É array');
      this.existeEmail = true;
      this.listaDeEmail = [...email];
    }
  }

  public async criarEmail() {
    try {
      const idCliente = localStorage.getItem('idCliente')!;

      if (this.listaDeEmail.length !== 0) {
        await this.clientsCreateEmailService.CreateEmail(
          this.inputEmail,
          String(this.emailPrincipal),
          idCliente
        );

        await this.listarEmail();
      } else {
        await this.clientsCreateEmailService.CreateEmail(
          this.inputEmail,
          String(this.emailPrincipal),
          idCliente
        );

        await this.listarEmail();
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  public async alterarEmail() {
    try {
      this.limparDadosEmail();
      this.salvarEmail = false;
      this.showAddEmail = true;

      const idEmail = localStorage.getItem('idEmail')!;

      const email = await this.clientsGetOneEmailService.GetOneEmail(idEmail);

      this.inputEmail = email.email;
      this.emailPrincipal = email.is_principal;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async updateEmail() {
    try {
      const idEmail = localStorage.getItem('idEmail')!;
      const idCliente = localStorage.getItem('idCliente')!;

      await this.clientsUpdateEmailService.UpdateEmail(
        idEmail,
        this.inputEmail,
        String(this.emailPrincipal),
        idCliente
      );

      this.showEmail();
      this.listarEmail();
    } catch (error: any) {
      console.log(error);
    }
  }

  public async deletarEmail(idEmail: string) {
    try {
      await this.clientsDeleteEmailService.DeleteEmail(idEmail);
      await this.listarEmail()
    } catch (error) {
      console.log(error);
    }
  }

  public verificaSeEmailEstaVazio() {
    if (this.listaDeEmail.length === 0) {
      this.emailPrincipal = true;
      this.desabilitarCheckBoxEmail = true;
    } else {
      this.emailPrincipal = false;
      this.desabilitarCheckBoxEmail = false;
    }
  }

  public pegarIdEmail(idEmail: string) {
    localStorage.setItem('idEmail', idEmail);
  }

  public limparDadosEmail() {
    this.inputEmail = '';
    this.emailPrincipal = false;
  }

  public showEmail() {
    this.showAddEmail = !this.showAddEmail;
  }

  public cancelAddEmail() {
    this.showAddEmail = false;
  }

  // ===============================================================================

  public salvar() {
    localStorage.setItem('page', 'update/atualizar-representantes/listar-representantes/');
    // /update/atualizar-representantes
    // localStorage.setItem('page', 'create/representantes');
  }

  public limparDados() {
    this.inputCep = '';
    this.inputLogradouro = '';
    this.inputNumero = '';
    this.inputComplemento = '';
    this.inputBairro = '';
    this.inputCidade = '';
    this.inputEstado = '';
    this.enderecoPrincipal = false;
  }
}
