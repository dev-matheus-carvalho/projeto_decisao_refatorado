import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WelcomeModule } from './pages/welcome/welcome.module';
// import { ClientsModule } from './pages/clients/clients.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';
import { AuthGuardChild } from './shared/guards/auth-guard-child.guard';
import { AuthGuard } from './shared/guards/auth-guard.guard';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';
import { ClientsLayoutModule } from './layouts/clients-layout.module';

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
    // ClientsModule,
    ClientsLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService, AuthGuard, AuthGuardChild],
  bootstrap: [AppComponent],
})
export class AppModule {}
