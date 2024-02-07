import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginComponent } from 'src/app/pages/login/components/login.component';

const routes: Routes = [
  { path: '',
component: LoginComponent,
children: [
  {path: 'login', loadChildren: () => import('../../pages/login/login.module').then((m)=>  m.LoginModule ) }
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
