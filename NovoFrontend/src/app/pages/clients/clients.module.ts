import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsReadComponent } from './clients-read/components/clients-read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClientsCreateComponent } from './clients-create/components/clients-create.component';
import { FormsComponent } from './clients-create/componentes filhas/forms/forms.component';
import { LocalizacaoComponent } from './clients-create/componentes filhas/localizacao/localizacao.component';
import { RepresentantesComponent } from './clients-create/representantes/representantes.component';
import { CadastroComponent } from './clients-create/representantes/cadastro/cadastro.component';
import { ClientsReadService } from 'src/app/pages/clients/clients-read/services/clients/clients-read/clients-read.service';
import { ClientsUpdateComponent } from './clients-update/components/clients-update.component';
import { AtualizacaoFormularioClientesComponent } from './clients-update/componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from './clients-update/componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
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
