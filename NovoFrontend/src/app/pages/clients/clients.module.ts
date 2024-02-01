import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsReadComponent } from './clients-read/clients-read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { FormsComponent } from './clients-create/forms/forms.component';
import { LocalizacaoComponent } from './clients-create/localizacao/localizacao.component';
import { RepresentantesComponent } from './clients-create/representantes/representantes.component';
import { CadastroComponent } from './clients-create/representantes/cadastro/cadastro.component';
import { ClientsReadService } from 'src/app/pages/clients/clients-read/services/clients-read/clients-read.service';
import { ClientsUpdateComponent } from './clients-update/clients-update.component';
import { AtualizacaoFormularioClientesComponent } from './clients-update/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from './clients-update/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from './clients-update/atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { PainelRepresentantesComponent } from './clients-update/atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { CreateRepresentantesComponent } from './clients-update/atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { UpdateRepresentantesComponent } from './clients-update/atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';


@NgModule({
  declarations: [
    // ClientsReadComponent,
    // ClientsCreateComponent,
    // FormsComponent,
    // LocalizacaoComponent,
    // RepresentantesComponent,
    // CadastroComponent,
    // ClientsUpdateComponent,
    // AtualizacaoFormularioClientesComponent,
    // AtualizacaoLocalizacaoClientesComponent,
    // AtualizacaoRepresentantesClientesComponent,
    // PainelRepresentantesComponent,
    // CreateRepresentantesComponent,
    // UpdateRepresentantesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientsRoutingModule
  ],
  providers: [ClientsReadService]
})
export class ClientsModule { }
