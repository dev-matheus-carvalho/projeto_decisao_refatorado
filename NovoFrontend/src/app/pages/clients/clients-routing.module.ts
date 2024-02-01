import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsReadComponent } from './clients-read/components/clients-read.component';
import { ClientsCreateComponent } from './clients-create/components/clients-create.component';
import { FormsComponent } from './clients-create/componentes filhas/forms/forms.component';
import { LocalizacaoComponent } from './clients-create/componentes filhas/localizacao/localizacao.component';
import { RepresentantesComponent } from './clients-create/representantes/representantes.component';
import { CadastroComponent } from './clients-create/representantes/cadastro/cadastro.component';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';
import { ClientsUpdateComponent } from './clients-update/components/clients-update.component';
import { AtualizacaoFormularioClientesComponent } from './clients-update/componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from './clients-update/componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from './clients-update/atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { PainelRepresentantesComponent } from './clients-update/atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { CreateRepresentantesComponent } from './clients-update/atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { UpdateRepresentantesComponent } from './clients-update/atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';
import { AuthGuardChild } from 'src/app/guards/auth-guard-child.guard';

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
      { path: 'atualizar-representantes', component: AtualizacaoRepresentantesClientesComponent, children: [
        { path: 'listar-representantes', component: PainelRepresentantesComponent },
        { path: 'criar-representante', component: CreateRepresentantesComponent },
        { path: 'atualizar-representante', component: UpdateRepresentantesComponent }
      ] },
    ], canActivateChild: [AuthGuardChild]
  },
];

@NgModule({
  imports: [RouterModule.forChild(clients)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
