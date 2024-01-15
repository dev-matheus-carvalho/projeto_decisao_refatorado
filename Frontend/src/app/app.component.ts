import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { HeaderService } from './services/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  show: boolean = false;
  showMsgSair: boolean = false;

  constructor(
    private loginService: LoginService,
    private headerService: HeaderService
    ) {}

  ngOnInit(): void {
    this.loginService.mostrarMenu.subscribe(mostrar => {
      this.show = mostrar;
    });

    this.headerService.mostrarMsgSair.subscribe(mostrar => {
      this.showMsgSair = mostrar;
    })
  }

  fecharJanela() {
    console.log(this.loginService.lembrar);

    if(this.loginService.lembrar === true) {
      this.show = false;
      this.showMsgSair = false;
    } else {
      this.show = false;
      this.showMsgSair = false;
      localStorage.setItem('token', '');
      localStorage.setItem('nome', '');
      localStorage.setItem('idUsuario', '');
    }
  }

  fecharJanelaPrincipal() {
    this.showMsgSair = false;
  }

}
