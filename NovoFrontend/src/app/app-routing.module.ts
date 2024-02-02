import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth-guard.guard';
import { AuthGuardChild } from './shared/guards/auth-guard-child.guard';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';

const routes: Routes = [
  // { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'base-cabecalho-login-register', component: LogoDecisaoComponent },

  { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule), canActivate: [AuthGuard] },

  { path: 'layout', loadChildren: () => import('./layouts/clients-layout.module').then((m) => m.ClientsLayoutModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },
  // { path: 'clients', loadChildren: () => import('./pages/clients/clients-read/clients-read.module').then((m) => m.ClientsReadModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
