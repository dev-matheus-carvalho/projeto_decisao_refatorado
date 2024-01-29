import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.scss']
})
export class RepresentantesComponent implements OnInit {

  public showCabecalho: boolean = true;
  public showCadastro: boolean = true;
  public showLista: boolean = true;

  public situacaoTeste: string = 'Ativo';

  ngOnInit(): void {
    this.showCabecalho = true;
  }

  public cadastrar() {
    this.showCabecalho = false;
  }
}
