import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomeModule } from '../../../pages/welcome/welcome.module';
// import { ClientsModule } from './pages/clients/clients.module';
import { RegisterComponent } from '../../../pages/register/components/register.component';
import { LoginComponent } from '../../../pages/login/components/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { AuthGuardChild } from '../../guards/auth-guard-child.guard';
import { AuthGuard } from '../../guards/auth-guard.guard';
import { LogoDecisaoComponent } from '../logo-decisao/logo-decisao.component';
import { ClientsLayoutModule } from '../../../layouts/clients-layout.module';

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
