import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';
import { LocalizacaoComponent } from './clientes-update/localizacao/localizacao.component';
import { RepresentantesComponent } from './clientes-create/representantes/representantes.component';
import { FormularioComponent } from './clientes-create/formulario/formulario.component';
import { ClientesUpdateComponent } from './clientes-update/clientes-update.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    ClientesUpdateComponent,
    LocalizacaoComponent,
    RepresentantesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClientesRoutingModule,
  ]
})
export class ClientesModule { }
