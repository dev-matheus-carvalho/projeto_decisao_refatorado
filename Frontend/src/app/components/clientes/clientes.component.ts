import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  cabecalho: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
      // this.cabecalho = false;
  }

  async criarCliente() {
    this.cabecalho = false;
  }

}
