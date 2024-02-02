import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsCreateComponent } from './components/clients-create.component';
import { FormsComponent } from './componentes filhas/forms/forms.component';
import { LocalizacaoComponent } from './componentes filhas/localizacao/localizacao.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsCreateComponent,

    children: [
      { path: 'formulario', component: FormsComponent },
      { path: 'localizacao', component: LocalizacaoComponent },
      // {
      //   path: 'representantes',
      //   component: RepresentantesComponent,
      //   children: [{ path: 'cadastrar', component: CadastroComponent }],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsCreateRoutingModule { }
