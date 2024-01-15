import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BemvindoComponent } from './bemvindo.component';
import { BemVindoRoutingModule } from './bemvindo.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BemVindoRoutingModule
  ],
  exports: [],
  declarations: [BemvindoComponent],
  providers: [],
})
export class BemVindoModule { }
