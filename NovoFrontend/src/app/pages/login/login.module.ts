import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ClientsLayoutModule } from 'src/app/layouts/clients-layout.module';
import { LoginComponent } from './components/login.component';
import { LoginLayoutModule } from 'src/app/layouts/login-layout/login-layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ClientsLayoutModule,
    LoginLayoutModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
