import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  primeiraLetra!: string | undefined;
  ultimaLetra!: string | undefined;
  show: boolean = false;
  posicaoImagem: boolean = true;

  constructor(
    private loginService: LoginService,
    private headerService: HeaderService
    ) {}

  ngOnInit(): void {
      const nome = localStorage.getItem('nome');
      const arrayNome = nome?.split(' ');

      if(arrayNome !== undefined) {
        const tamanhoArray = arrayNome?.length;
        const ultimaLetra: string = arrayNome[tamanhoArray - 1 ].charAt(0);

        this.primeiraLetra = nome?.charAt(0);
        this.ultimaLetra = ultimaLetra;
      }
  }

  mostrarTela() {
    console.log('Mostrar tela')
    this.show = !this.show;
    this.posicaoImagem = !this.posicaoImagem;
  }

  tirarTela() {
    console.log('Tirar tela')
    this.show = false;
    this.posicaoImagem = true;
    this.loginService.ocultarMenu();
  }

  msgSaida() {
    this.headerService.mostrarMsgSaida();
    this.show = false;
    this.posicaoImagem = true
  }
}
