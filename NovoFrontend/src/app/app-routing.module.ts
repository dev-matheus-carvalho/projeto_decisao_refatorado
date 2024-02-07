import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from '../../../pages/register/components/register.component';
// import { LoginComponent } from '../../../pages/login/components/login.component';
// import { AuthGuardChild } from '../../guards/auth-guard-child.guard';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';
import { AuthGuardChild } from './shared/guards/auth-guard-child.guard';
import { AuthGuard } from './shared/guards/auth-guard.guard';
// import { LogoDecisaoComponent } from '../logo-decisao/logo-decisao.component';

const routes: Routes = [
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'base-cabecalho-login-register', component: LogoDecisaoComponent },

  // { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule), canActivate: [AuthGuard] },

  { path: '', loadChildren: () => import('./layouts/login-layout/login-layout.module').then((m) => m.LoginLayoutModule) },
  // { path: 'clients', loadChildren: () => import('./pages/clients/clients-read/clients-read.module').then((m) => m.ClientsReadModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
