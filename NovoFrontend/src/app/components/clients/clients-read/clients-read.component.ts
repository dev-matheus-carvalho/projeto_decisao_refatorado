import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsReadInterface } from 'src/app/shared/interfaces/clients/clients-read/clientsReadInterface';
import { ClientesDeleteService } from 'src/app/shared/services/clients/clients-delete/clientes-delete.service';
import { ClientsReadService } from 'src/app/shared/services/clients/clients-read/clients-read.service';

@Component({
  selector: 'app-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.scss'],
})
export class ClientsReadComponent implements OnInit, OnDestroy {
  listaClientesVazia: boolean = false;

  public listaClientes: ClientsReadInterface = {
    usuario: '',
    clientes: [],
  };

  constructor(
    private clientsReadService: ClientsReadService,
    private clientesDeleteService: ClientesDeleteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('idCliente'));
    this.listarClientes();
  }

  ngOnDestroy(): void {
    this.deletarCliente();
  }

  public async listarClientes() {
    const usuarios = await this.clientsReadService.getClientes();
    if (usuarios.clientes.length === 0) {
      this.listaClientesVazia = true;
    }

    this.listaClientesVazia = false;
    this.listaClientes.usuario = usuarios.usuario;
    this.listaClientes.clientes = [...usuarios.clientes];

    this.listaClientes.clientes.forEach((data) => {
      const dataConvertida = new Date(data.createdAt);
      const dataFormatada = this.formatDate(dataConvertida);

      data.createdAt = dataFormatada;
    });
  }

  public async deletarCliente(id?: string) {
    await this.clientesDeleteService.deleteClients(id!);
    await this.listarClientes()
  }

  private formatDate(date: Date) {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  cadastrar() {
    localStorage.setItem('page', 'create/formulario');
  }

  public armazenaIdCliente(idCliente: string | unknown) {
    localStorage.setItem('idCliente', String(idCliente));
    localStorage.setItem('page', '/update/atualizar-formulario')
  }
}
