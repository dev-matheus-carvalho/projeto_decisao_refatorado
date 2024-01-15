import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  mostrarMsgSair: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  mostrarMsgSaida() {
    this.mostrarMsgSair.emit(true);
  }

  // naoMostrarMsgSaida() {
  //   this.mostrarMsgSair.emit(true);
  // }
}
