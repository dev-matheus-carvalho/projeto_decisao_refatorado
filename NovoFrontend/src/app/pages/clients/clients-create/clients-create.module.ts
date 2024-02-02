import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsCreateRoutingModule } from './clients-create-routing.module';
import { ClientsCreateComponent } from './components/clients-create.component';
import { LocalizacaoComponent } from './componentes filhas/localizacao/localizacao.component';
import { FormsComponent } from './componentes filhas/forms/forms.component';
import { RepresentantesComponent } from './representantes/representantes.component';
import { CadastroComponent } from './representantes/cadastro/cadastro.component';
import { ClientsLayoutModule } from 'src/app/layouts/clients-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientsCreateComponent,
    LocalizacaoComponent,
    FormsComponent,
    RepresentantesComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientsLayoutModule,
    ClientsCreateRoutingModule
  ]
})
export class ClientsCreateModule { }
