import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  show = true;

  constructor(private router: Router) { }

  public salvar() {
    localStorage.setItem('page', 'create/localizacao')
  }

}
