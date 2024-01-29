import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthGuardChild } from './guards/auth-guard-child.guard';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'base-cabecalho-login-register', component: LogoDecisaoComponent },

  { path: '', loadChildren: () => import('./components/welcome/welcome.module').then((m) => m.WelcomeModule), canActivate: [AuthGuard] },

  { path: 'clients', loadChildren: () => import('./components/clients/clients.module').then((m) => m.ClientsModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
