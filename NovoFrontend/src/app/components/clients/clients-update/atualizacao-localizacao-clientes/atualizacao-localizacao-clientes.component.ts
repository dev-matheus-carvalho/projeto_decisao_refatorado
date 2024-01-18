import { Component, OnInit } from '@angular/core';
import {
  Enderecos,
  GetEnderecosInterface,
} from 'src/app/shared/interfaces/enderecos/listarEnderecos/getEnderecosInterface';
import { ClientsCreateEnderecosService } from 'src/app/shared/services/clients/clients-create-enderecos/clients-create-enderecos.service';
import { ClientsDeleteEnderecosService } from 'src/app/shared/services/clients/clients-delete-enderecos/clients-delete-enderecos.service';
import { ClientsGetEnderecosService } from 'src/app/shared/services/clients/clients-get-enderecos/clients-get-enderecos.service';
import { ClientsUpdateEnderecosService } from 'src/app/shared/services/clients/clients-update-enderecos/clients-update-enderecos.service';

@Component({
  selector: 'app-atualizacao-localizacao-clientes',
  templateUrl: './atualizacao-localizacao-clientes.component.html',
  styleUrls: ['./atualizacao-localizacao-clientes.component.scss'],
})
export class AtualizacaoLocalizacaoClientesComponent implements OnInit {
  public existeEndereco: boolean = false;

  public showAddTelefone: boolean = false;
  public showAddEmail: boolean = false;

  public listaDeEnderecos: Array<Enderecos> = [];

  public inputCep: string = '';
  public inputLogradouro: string = '';
  public inputNumero: string = '';
  public inputComplemento: string = '';
  public inputBairro: string = '';
  public inputCidade: string = '';
  public inputEstado: string = '';

  public enderecoPrincipal: boolean = false;

  constructor(
    private clientsGetEnderecosService: ClientsGetEnderecosService,
    private clientsCreateEnderecosService: ClientsCreateEnderecosService,
    private clientsUpdateEnderecosService: ClientsUpdateEnderecosService,
    private clientsDeleteEnderecosService: ClientsDeleteEnderecosService,
  ) {}

  ngOnInit(): void {
    this.listarEnderecos();
  }

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
      console.log('É string');
      this.existeEndereco = false;
    } else {
      console.log('É array');
      this.existeEndereco = true;
      this.listaDeEnderecos = [...enderecos];
    }
    // console.log(typeof a)
  }

  public async criarEndereco() {
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

  public showTelefone() {
    this.showAddTelefone = !this.showAddTelefone;
  }

  public cancelAddTelefone() {
    this.showAddTelefone = false;
  }

  public showEmail() {
    this.showAddEmail = !this.showAddEmail;
  }

  public cancelAddEmail() {
    this.showAddEmail = false;
  }

  public salvar() {
    localStorage.setItem('page', 'create/representantes');
  }

  private limparDados() {
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
