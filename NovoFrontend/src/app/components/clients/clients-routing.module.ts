import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsReadComponent } from './clients-read/clients-read.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { FormsComponent } from './clients-create/forms/forms.component';
import { LocalizacaoComponent } from './clients-create/localizacao/localizacao.component';
import { RepresentantesComponent } from './clients-create/representantes/representantes.component';
import { CadastroComponent } from './clients-create/representantes/cadastro/cadastro.component';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';
import { ClientsUpdateComponent } from './clients-update/clients-update.component';
import { AtualizacaoFormularioClientesComponent } from './clients-update/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from './clients-update/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from './clients-update/atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';

const clients: Routes = [
  { path: '', component: ClientsReadComponent },
  {
    path: 'create',
    component: ClientsCreateComponent,

    children: [
      { path: 'formulario', component: FormsComponent },
      { path: 'localizacao', component: LocalizacaoComponent },
      { path: 'representantes', component: RepresentantesComponent, children: [{ path: 'cadastrar', component: CadastroComponent }] },
    ],
  },

  {
    path: 'update',
    component: ClientsUpdateComponent,

    children: [
      { path: 'atualizar-formulario', component: AtualizacaoFormularioClientesComponent },
      { path: 'atualizar-localizacao', component: AtualizacaoLocalizacaoClientesComponent },
      { path: 'atualizar-representantes', component: AtualizacaoRepresentantesClientesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(clients)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}