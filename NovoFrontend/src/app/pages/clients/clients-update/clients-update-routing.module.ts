import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsUpdateComponent } from './components/clients-update.component';
import { AtualizacaoFormularioClientesComponent } from './componentes filhas/atualizacao-formulario-clientes/atualizacao-formulario-clientes.component';
import { AtualizacaoLocalizacaoClientesComponent } from './componentes filhas/atualizacao-localizacao-clientes/atualizacao-localizacao-clientes.component';
import { AtualizacaoRepresentantesClientesComponent } from './atualizacao-representantes-clientes/atualizacao-representantes-clientes.component';
import { PainelRepresentantesComponent } from './atualizacao-representantes-clientes/painel-representantes/painel-representantes/painel-representantes.component';
import { CreateRepresentantesComponent } from './atualizacao-representantes-clientes/painel-representantes/create-representantes/create-representantes.component';
import { UpdateRepresentantesComponent } from './atualizacao-representantes-clientes/painel-representantes/update-representantes/update-representantes.component';
import { AuthGuardChild } from 'src/app/guards/auth-guard-child.guard';

const routes: Routes = [
  {
    path: '',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsUpdateRoutingModule { }
