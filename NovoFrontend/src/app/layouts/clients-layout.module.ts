import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsLayoutRoutingModule } from './clients-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsReadComponent } from 'src/app/pages/clients/clients-read/components/clients-read.component';
import { ClientsCreateComponent } from 'src/app/pages/clients/clients-create/clients-create.component';
import { FormsComponent } from 'src/app/pages/clients/clients-create/forms/forms.component';
import { LocalizacaoComponent } from 'src/app/pages/clients/clients-create/localizacao/localizacao.component';
import { RepresentantesComponent } from 'src/app/pages/clients/clients-create/representantes/representantes.component';
import { CadastroComponent } from 'src/app/pages/clients/clients-create/representantes/cadastro/cadastro.component';
import { ClientsUpdateComponent } from 'src/app/pages/clients/clients-update/components/clients-update.component';
import { AtualizacaoFormularioClientesComponent } from 'src/app/pages/clients/clients-update/componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from 'src/app/pages/clients/clients-update/componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { PainelRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { CreateRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { UpdateRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';
import { ClientsComponentUpdateComponent } from './clients/clients-component-update/clients-component-update.component';


@NgModule({
  declarations: [
    ClientsReadComponent,
    ClientsCreateComponent,
    FormsComponent,
    LocalizacaoComponent,
    RepresentantesComponent,
    CadastroComponent,
    ClientsUpdateComponent,
    AtualizacaoFormularioClientesComponent,
    AtualizacaoLocalizacaoClientesComponent,
    AtualizacaoRepresentantesClientesComponent,
    PainelRepresentantesComponent,
    CreateRepresentantesComponent,
    UpdateRepresentantesComponent,
    ClientsComponentUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientsLayoutRoutingModule
  ]
})
export class ClientsLayoutModule { }
