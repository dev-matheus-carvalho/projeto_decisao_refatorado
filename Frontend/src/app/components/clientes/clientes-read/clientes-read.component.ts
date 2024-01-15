import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/ClienteInterface';
import { ClienteService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.scss']
})
export class ClientesReadComponent implements OnInit{

  temClientes: boolean = false;

  cliente: Array<Cliente> = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  async listarClientes() {
    try {
      const clientes = await this.clienteService.getClientes();

      if(clientes.clientes.length === 0) {
        this.temClientes = false;
        console.log('Não tem clientes')
      } else {
        this.temClientes = true;
        for(let i of clientes.clientes) {
          // let dia = i.createdAt.getDate();
          // let mes = i.createdAt.getMonth() + 1;
          // let ano = i.createdAt.getFullYear();

          // let dataFormatada = `${dia}/${mes}/${ano}`;

          this.cliente.push({
            idCliente: i.idCliente,
            nome: i.nome,
            identificacao: i.identificacao,
            nome_fantasia: i.nome_fantasia,
            nome_mae: i.nome_mae,
            inscricao_municipal: i.inscricao_municipal,
            inscricao_estadual: i.inscricao_estadual,

            data_criacao: `
            ${i.data_criacao.charAt(8)}${i.data_criacao.charAt(9)}/${i.data_criacao.charAt(5)}${i.data_criacao.charAt(6)}/${i.data_criacao.charAt(0)}${i.data_criacao.charAt(1)}${i.data_criacao.charAt(2)}${i.data_criacao.charAt(3)}`,

            autor: i.autor,
            situacao: i.situacao,
            idUsuario: i.idUsuario,
            createdAt: i.createdAt,
            updatedAt: i.updatedAt,

          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
