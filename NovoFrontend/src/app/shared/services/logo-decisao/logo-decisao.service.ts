import { Injectable } from '@angular/core';
import { LogoDecisao } from '../../interfaces/logo-decisao/LogoInterface';

@Injectable({
  providedIn: 'root'
})
export class LogoDecisaoService {

  public resposta: LogoDecisao = { titulo: '', subtitulo: '' };

  constructor() { }

  public setCabecalhoLogoLoginERegister(titulo: string, subtitulo: string): void {
   this.resposta = { titulo: titulo, subtitulo: subtitulo };
  }

  public getCabecalhoLogoLoginERegister(): LogoDecisao {
    return this.resposta;
  }
}
