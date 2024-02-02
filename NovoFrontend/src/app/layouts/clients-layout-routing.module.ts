import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChild } from 'src/app/shared/guards/auth-guard-child.guard';
import { ClientsCreateComponent } from 'src/app/pages/clients/clients-create/components/clients-create.component';
import { FormsComponent } from 'src/app/pages/clients/clients-create/componentes filhas/forms/forms.component';
import { LocalizacaoComponent } from 'src/app/pages/clients/clients-create/componentes filhas/localizacao/localizacao.component';
import { CadastroComponent } from 'src/app/pages/clients/clients-create/representantes/cadastro/cadastro.component';
import { RepresentantesComponent } from 'src/app/pages/clients/clients-create/representantes/representantes.component';
import { ClientsReadComponent } from 'src/app/pages/clients/clients-read/components/clients-read.component';
import { AtualizacaoFormularioClientesComponent } from 'src/app/pages/clients/clients-update/componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from 'src/app/pages/clients/clients-update/componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { CreateRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { PainelRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { UpdateRepresentantesComponent } from 'src/app/pages/clients/clients-update/atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';
import { ClientsUpdateComponent } from 'src/app/pages/clients/clients-update/components/clients-update.component';
import { AuthGuard } from '../shared/guards/auth-guard.guard';

const routes: Routes = [
  // { path: '', component: ClientsReadComponent },
  { path: 'clients', loadChildren: () => import('../pages/clients/clients-read/clients-read.module').then((m) => m.ClientsReadModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },
  { path: 'register', loadChildren: () => import('../pages/register/register.module').then((m) => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('../pages/login/login.module').then((m) => m.LoginModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },

  // {
  //   path: 'create',
  //   component: ClientsCreateComponent,

  //   children: [
  //     { path: 'formulario', component: FormsComponent },
  //     { path: 'localizacao', component: LocalizacaoComponent },
  //     {
  //       path: 'representantes',
  //       component: RepresentantesComponent,
  //       children: [{ path: 'cadastrar', component: CadastroComponent }],
  //     },
  //   ],
  // },
  { path: 'create', loadChildren: () => import('../pages/clients/clients-create/clients-create.module').then((m) => m.ClientsCreateModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },

  { path: 'update', loadChildren: () => import('../pages/clients/clients-update/clients-update.module').then((m) => m.ClientsUpdateModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] }

  // {
  //   path: 'update',
  //   component: ClientsUpdateComponent,

  //   children: [
  //     {
  //       path: 'atualizar-formulario',
  //       component: AtualizacaoFormularioClientesComponent,
  //     },
  //     {
  //       path: 'atualizar-localizacao',
  //       component: AtualizacaoLocalizacaoClientesComponent,
  //     },
  //     {
  //       path: 'atualizar-representantes',
  //       component: AtualizacaoRepresentantesClientesComponent,
  //       children: [
  //         {
  //           path: 'listar-representantes',
  //           component: PainelRepresentantesComponent,
  //         },
  //         {
  //           path: 'criar-representante',
  //           component: CreateRepresentantesComponent,
  //         },
  //         {
  //           path: 'atualizar-representante',
  //           component: UpdateRepresentantesComponent,
  //         },
  //       ],
  //     },
  //   ],
  //   canActivateChild: [AuthGuardChild],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsLayoutRoutingModule {}
