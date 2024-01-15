import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.scss']
})
export class ClientesCreateComponent implements OnInit {

  upDown: boolean = false;

  ativo: string = 'Ativo';
  inativo: string = 'Inativo';
  negativo: string = 'Negativo';

  status: string = 'Ativo';

  cor: string = 'ativo';

  cadastro: string = 'selecionar';
  localizacao: string = '';
  representantes: string = '';

  cadastro_ativo: string = 'link-ativo';
  localizacao_ativo: string = 'link';
  representantes_ativo: string = 'link';

  showStatus: boolean = false;

  ocultarMenuCadastro: boolean = false;
  // valorEmitter = this.clienteService.mostrarMenuCadastro.subscribe(
  //   value => this.ocultarMenuCadastro = value
  // );

  constructor(
    private clienteService: ClienteService,
    private router: Router
    ) {}

  ngOnInit(): void {
    // this.clienteService.mostrarMenuCadastro.subscribe(value => {
    //   this.ocultarMenuCadastro = value
    // });
    console.log('Mostrar menu cadastro: ', this.ocultarMenuCadastro)
    // this.router.navigate(['clientes/criar/formulario']);
  }

  seta() {
    this.upDown = !this.upDown;
  }


  statusAtivo() {
    this.status = this.ativo;
    this.upDown = false;
    this.cor = 'ativo';
    console.log(this.status)
  }
  statusInativo() {
    this.status = this.inativo;
    this.upDown = false;
    this.cor = 'inativo';
    console.log(this.status)
  }
  statusNegativo() {
    this.status = this.negativo;
    this.upDown = false;
    this.cor = 'negativo';
    console.log(this.status)
  }

  menuCadastroSelecionado() {
    this.cadastro = 'selecionar';
    this.localizacao = '';
    this.representantes = '';

    this.cadastro_ativo = 'link-ativo';
    this.localizacao_ativo = 'link';
    this.representantes_ativo = 'link';
  }

  menuLocalizacaoSelecionado() {
    this.cadastro = '';
    this.localizacao = 'selecionar';
    this.representantes = '';

    this.cadastro_ativo = 'link';
    this.localizacao_ativo = 'link-ativo';
    this.representantes_ativo = 'link';
  }

  menuRepresentantesSelecionado() {
    this.cadastro = '';
    this.localizacao = '';
    this.representantes = 'selecionar';

    this.cadastro_ativo = 'link';
    this.localizacao_ativo = 'link';
    this.representantes_ativo = 'link-ativo';
  }

}
