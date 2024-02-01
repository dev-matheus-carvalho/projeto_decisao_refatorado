import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsCreateService } from 'src/app/pages/clients/clients-create/services/clients-create/clients-create.service';

@Component({
  selector: 'app-atualizacao-representantes-clientes',
  templateUrl: './atualizacao-representantes-clientes.component.html',
  styleUrls: ['./atualizacao-representantes-clientes.component.scss'],
})
export class AtualizacaoRepresentantesClientesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([localStorage.getItem('page')!]);
  }
}
