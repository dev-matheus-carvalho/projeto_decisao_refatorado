import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsReadRoutingModule } from './clients-read-routing.module';
import { ClientsReadComponent } from './components/clients-read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsLayoutModule } from 'src/app/layouts/clients-layout.module';


@NgModule({
  declarations: [
    ClientsReadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientsLayoutModule,
    ClientsReadRoutingModule
  ]
})
export class ClientsReadModule { }
