import { Component } from '@angular/core';

@Component({
  selector: 'app-atualizacao-localizacao-clientes',
  templateUrl: './atualizacao-localizacao-clientes.component.html',
  styleUrls: ['./atualizacao-localizacao-clientes.component.scss'],
})
export class AtualizacaoLocalizacaoClientesComponent {
  public showAddTelefone: boolean = false;
  public showAddEmail: boolean = false;

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
}
