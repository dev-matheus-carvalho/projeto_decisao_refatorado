import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loginEfetuado: boolean = false;

  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.login.mostrarMenu.subscribe(mostrar => {
      this.loginEfetuado = mostrar;
    });


    // this.login.mostrarMenu.subscribe((mostrar) => {
    //   console.log('Mostrar:', mostrar);
    //   this.loginEfetuado = mostrar;
    //   console.log('Login Efetuado:', this.loginEfetuado);
    // });
  }
}
