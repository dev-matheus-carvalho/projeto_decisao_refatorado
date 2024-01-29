import { Component, OnInit } from '@angular/core';
import { LogoDecisaoService } from '../../services/logo-decisao/logo-decisao.service';
import { LogoDecisao } from '../../interfaces/logo-decisao/LogoInterface';

@Component({
  selector: 'app-logo-decisao',
  templateUrl: './logo-decisao.component.html',
  styleUrls: ['./logo-decisao.component.scss']
})
export class LogoDecisaoComponent implements OnInit{

  public resposta: LogoDecisao = { titulo: '', subtitulo: '' };

  constructor(private logoDecisaoService: LogoDecisaoService) {}

  ngOnInit(): void {
      const retorno = this.logoDecisaoService.getCabecalhoLogoLoginERegister();

      this.resposta = { titulo: retorno.titulo, subtitulo: retorno.subtitulo };
  }
}
