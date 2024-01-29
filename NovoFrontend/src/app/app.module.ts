import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WelcomeModule } from './components/welcome/welcome.module';
import { ClientsModule } from './components/clients/clients.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';
import { AuthGuardChild } from './guards/auth-guard-child.guard';
import { AuthGuard } from './guards/auth-guard.guard';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    LogoDecisaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    ClientsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService, AuthGuard, AuthGuardChild],
  bootstrap: [AppComponent],
})
export class AppModule {}
