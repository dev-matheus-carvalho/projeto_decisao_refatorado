import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { ClientsLayoutModule } from './layouts/clients-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegisterComponent } from './pages/register/components/register.component';
import { LoginComponent } from './pages/login/components/login.component';
import { LogoDecisaoComponent } from './shared/components/logo-decisao/logo-decisao.component';
import { AuthGuardChild } from './shared/guards/auth-guard-child.guard';
import { AuthGuard } from './shared/guards/auth-guard.guard';
import { LoginService } from './shared/services/login/login.service';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './components/app.component';
// import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
// import { MenuComponent } from '../menu/menu.component';
// import { FooterComponent } from '../footer/footer.component';
// import { WelcomeModule } from '../../../pages/welcome/welcome.module';
// // import { ClientsModule } from './pages/clients/clients.module';
// import { RegisterComponent } from '../../../pages/register/components/register.component';
// import { LoginComponent } from '../../../pages/login/components/login.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LoginService } from '../../services/login/login.service';
// import { AuthGuardChild } from '../../guards/auth-guard-child.guard';
// import { AuthGuard } from '../../guards/auth-guard.guard';
// import { LogoDecisaoComponent } from '../logo-decisao/logo-decisao.component';
// import { ClientsLayoutModule } from '../../../layouts/clients-layout.module';

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
    // // ClientsModule,
    ClientsLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService, AuthGuard, AuthGuardChild],
  bootstrap: [AppComponent],
})
export class AppModule {}
