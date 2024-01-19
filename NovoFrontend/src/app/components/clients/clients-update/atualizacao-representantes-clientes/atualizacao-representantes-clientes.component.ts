import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsCreateService } from 'src/app/shared/services/clients/clients-create/clients-create.service';

@Component({
  selector: 'app-atualizacao-representantes-clientes',
  templateUrl: './atualizacao-representantes-clientes.component.html',
  styleUrls: ['./atualizacao-representantes-clientes.component.scss'],
})
export class AtualizacaoRepresentantesClientesComponent implements OnInit {
  public showCabecalho: boolean = true;
  public showCadastro: boolean = true;
  public showLista: boolean = false;

  public situacaoTeste: string = 'Ativo';

  ngOnInit(): void {
    this.showCabecalho = true;
  }

  public cadastrar() {
    this.showCabecalho = false;
  }
}
