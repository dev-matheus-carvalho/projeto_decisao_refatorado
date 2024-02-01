import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChild } from 'src/app/guards/auth-guard-child.guard';
import { ClientsCreateComponent } from 'src/app/pages/clients/clients-create/clients-create.component';
import { FormsComponent } from 'src/app/pages/clients/clients-create/forms/forms.component';
import { LocalizacaoComponent } from 'src/app/pages/clients/clients-create/localizacao/localizacao.component';
import { CadastroComponent } from 'src/app/pages/clients/clients-create/representantes/cadastro/cadastro.component';
import { RepresentantesComponent } from 'src/app/pages/clients/clients-create/representantes/representantes.component';
import { ClientsReadComponent } from 'src/app/pages/clients/clients-read/clients-read.component';
import { AtualizacaoFormularioClientesComponent } from 'src/app/pages/clients/clients-update/componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from 'src/app/pages/clients/clients-update/componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { CreateRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { PainelRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { UpdateRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';
import { ClientsUpdateComponent } from 'src/app/pages/clients/clients-update/components/clients-update.component';

const routes: Routes = [
  { path: '', component: ClientsReadComponent },
  {
    path: 'create',
    component: ClientsCreateComponent,

    children: [
      { path: 'formulario', component: FormsComponent },
      { path: 'localizacao', component: LocalizacaoComponent },
      {
        path: 'representantes',
        component: RepresentantesComponent,
        children: [{ path: 'cadastrar', component: CadastroComponent }],
      },
    ],
  },

  {
    path: 'update',
    component: ClientsUpdateComponent,

    children: [
      {
        path: 'atualizar-formulario',
        component: AtualizacaoFormularioClientesComponent,
      },
      {
        path: 'atualizar-localizacao',
        component: AtualizacaoLocalizacaoClientesComponent,
      },
      {
        path: 'atualizar-representantes',
        component: AtualizacaoRepresentantesClientesComponent,
        children: [
          {
            path: 'listar-representantes',
            component: PainelRepresentantesComponent,
          },
          {
            path: 'criar-representante',
            component: CreateRepresentantesComponent,
          },
          {
            path: 'atualizar-representante',
            component: UpdateRepresentantesComponent,
          },
        ],
      },
    ],
    canActivateChild: [AuthGuardChild],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsLayoutRoutingModule {}
