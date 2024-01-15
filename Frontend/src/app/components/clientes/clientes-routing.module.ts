import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';
import { FormularioComponent } from './clientes-create/formulario/formulario.component';
import { LocalizacaoComponent } from './clientes-update/localizacao/localizacao.component';
import { RepresentantesComponent } from './clientes-create/representantes/representantes.component';
import { ClientesUpdateComponent } from './clientes-update/clientes-update.component';

const clienteRoutes: Routes = [
  { path: '', component: ClientesComponent, children: [
    { path: 'listar', component: ClientesReadComponent },

  ] },

  { path: 'criar', component: ClientesCreateComponent, children: [
    { path: 'formulario', component: FormularioComponent },
    { path: 'localizacao', component: LocalizacaoComponent },
  ] },

  { path: 'update', component: ClientesUpdateComponent, children: [
    { path: 'localizacao', component: LocalizacaoComponent }
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
