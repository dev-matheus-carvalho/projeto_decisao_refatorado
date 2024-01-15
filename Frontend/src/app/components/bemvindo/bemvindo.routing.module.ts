import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemvindoComponent } from './bemvindo.component';
import { AuthGuard } from 'src/app/guards/auth-guards.guard';


const bemVindoRoutes: Routes = [
  { path: '', component: BemvindoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bemVindoRoutes)],
  exports: [RouterModule]
})
export class BemVindoRoutingModule { }
