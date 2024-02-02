import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsUpdateRoutingModule } from './clients-update-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsUpdateComponent } from './components/clients-update.component';
import { AtualizacaoRepresentantesClientesComponent } from './atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { CreateRepresentantesComponent } from './atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { PainelRepresentantesComponent } from './atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { UpdateRepresentantesComponent } from './atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';
import { AtualizacaoFormularioClientesComponent } from './componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from './componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { ClientsLayoutModule } from 'src/app/layouts/clients-layout.module';


@NgModule({
  declarations: [
    ClientsUpdateComponent,
    AtualizacaoRepresentantesClientesComponent,
    CreateRepresentantesComponent,
    PainelRepresentantesComponent,
    UpdateRepresentantesComponent,
    AtualizacaoFormularioClientesComponent,
    AtualizacaoLocalizacaoClientesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientsLayoutModule,
    ClientsUpdateRoutingModule
  ]
})
export class ClientsUpdateModule { }
