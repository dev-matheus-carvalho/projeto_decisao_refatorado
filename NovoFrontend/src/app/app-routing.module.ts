import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthGuardChild } from './guards/auth-guard-child.guard';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'base-cabecalho-login-register', component: LogoDecisaoComponent },

  { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule), canActivate: [AuthGuard] },

  { path: 'clients', loadChildren: () => import('./pages/clients/clients.module').then((m) => m.ClientsModule), canActivate: [AuthGuard], canActivateChild: [AuthGuardChild] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
