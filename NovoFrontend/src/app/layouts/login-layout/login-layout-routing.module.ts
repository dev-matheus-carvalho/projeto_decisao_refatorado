import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';

const routes: Routes = [
  { path: '',
component: LoginLayoutComponent,
children: [
  {path: 'login', loadChildren: () => import('../../pages/login/login.module').then((m)=>  m.LoginModule ) }
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
